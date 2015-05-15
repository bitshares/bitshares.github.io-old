---
title: Lessons Learned from BitShares 0.X
---

Technology Lessons

- Keep Everything in Memory
- Assign IDs rather than using UUIDs
- Keep Transaction Interpretation Deterministic and Explicit
- Use Rational/Ratio Prices rather than Fixed Point
- Embrace the Single Threaded Reality of Blockchains

Regulatory & Political Lessons

- Membership Organization, not Decentralized Company
- Anonymity is an Illusion
- Voter Apathy
- Delegate Pay is Political and not tied to Performance
- Fear of Dilution is Worse than Dilution

Economic Lessons
- Underpricing is not Sustainable
- BitAsset's need a *floor* not a *perfect peg*
- Unnecessary Collateral Restrictions
- Socialized Yield is Broken
- You Get What you Ask for Orders were a Bad Idea

Usability Lessons
- Design for Hosted Wallet First (blockchain.info style)
- Keep Domain Name Pricing Simple

There are many reasons for starting over from scratch and producing
a new toolkit and this article hopes to shed some light on what we learned from BitShares 1.0 and the many advancements
that Graphene allows.

The primary focus of Graphene was on Performance, Reliability, Maintainability, and Scalability.  As a result, Graphene
can process 1000 times more transactions per second than the BitShares Toolkit and is able to handle VISA level
transaction volumes.  In addition to performance, the built-in fee structure and revenue sharing incentive structure
should motivate adoption far more effectively than any other blockchain.

Graphene uses Delegated Proof of Stake 2.0 (DPOS 2) as the core consensus algorithm.  Under DPOS 2, all blockchain
parameters are dynamic and can be changed with stakeholder approval and without a hard fork.   The role of delegates has
been divided into several different roles: witness, delegate, and worker.  Graphene implements most of the same features
of BitShares (including BitAssets and User Issued assets) but comes with a far more traditional order matching algorithm
and a major upgrade to BitAssets (BitAssets 2.0).

* TOC
{:toc}

### Lesson 1 - Keep Everything in Memory

Profiling consistently demonstrated to us that LevelDB and disk access were the major bottleneck of BitShares.  Every
time a transaction is processed there are literally dozens of Level DB key/value databases that are consulted, and every
time these databases are accessed there is disk IO.  We wanted to keep everything synchronized via a proven database
like LevelDB so that nodes were robust against power failure.  As we will demonstrate below, this was a bad requirement.

This lesson may seem counterintuitive to those who are familiar with the huge RAM requirements that BitShares has
demanded, often approaching 2GB or more at times.  The reality is that almost all of that RAM was being used for
database caches.   But the actual data requirements for an individual account consisting of a name, a key, and a couple
of balances is well under 1KB of data, so the entire set of balances for all BTS accounts could be kept in just 30 MB of
RAM.   In fact, we could easily keep all of the data associated with 1 million accounts in just 1 GB of RAM.  With this
realization sinking in, it became clear that our problem wasn't the data we needed to store, but how we chose to
represent it and the overhead associated with the various database indices.

If we remove the database entirely and simply load all states at startup and save all states on exit then it becomes
possible to process all of the blocks and transactions in BitShares history in mere seconds.  This is game changing.
The only thing Graphene logs to disk in real time are new blocks as they come in and this disk access is done
asynchronously so it does not slow down processing of blocks.  In the event of a power outage it is trivial to replay
the block history to recover state.

Keeping everything in memory works well at any scale supported by the average home internet connection.  Long before the
memory requirements grow out of reach of the average individual, the internet bandwidth will become the bottleneck.
Memory capacity is growing at a far faster rate than bandwidth.  Delegated Proof of Stake gives us the power to have
"trusted and accountable" centralization.   For just $15,000 you can build a machine with 1 TB of RAM.  This is well
below what many people are spending for Bitcoin mining hardware and probably a fraction of the cost of the bandwidth
required.   This means the network could support 1 billion users while keeping all accounts in memory on "commodity"
hardware.

### Lesson 2 - Keep Transaction Interpretation Deterministic and Explicit

One of  the major challenges faced by developers of wallets is how to represent the transaction history as a ledger.
Most crypto-currencies, including BitShares, have logical accounts that consist of many balances controlled by different
keys.  Transactions consist of combining funds from several balances and distributing them to other balances.  The
problem is that there is no way of accurately and consistently abstracting meaning from these transactions in a general
purpose way.   Wallets end up using fuzzy logic to determine who sent money to whom and often depend upon a limited
subset of the valid transactions.   This gets even worse with blockchains that define everything in terms of scripts
(including Bitcoin).

This becomes particularly problematic when attempting to convey to the user what a particular transaction will do prior
to the user signing it.  Worse yet, it may not even be clear which combination of keys is required to sign it.  In
BitShares there are cases where the meaning of the transaction depends upon blockchain state information that is not
stated in the transaction itself and may not be available until the transaction is actually included in a block.   This
"assumed information" complicates things for everyone involved.  In order to accurately display the impact of a
transaction to a user, the blockchain must capture and record all of this assumed information.  This creates significant
bloat with extra indices and is still unable to give the users absolute certainty about what the side effects of signing
a particular transaction will be.

Under Graphene, every single operation has an explicit fee, a defined set of accounts that must approve of the
operation, a defined set of accounts that are impacted by the operation, and a defined set of balance changes that will
result from the transaction.  An account balance can be entirely calculated with only the raw transactions that
reference it.    This means transactions are slightly larger than theoretically necessary, but what they lose in size
they gain in clarity which is critical for usability, reliability, and ultimately performance.  As we will explain in
Lesson 4, we save more bytes in the transaction by using 48 bit identifiers (instead of 20-32 byte hashes/addresses)
than we lose by having slightly more verbose transactions.

### Lesson 3 - Anonymity is an Illusion

Great effort went into designing a system for BitShares that would allow users to keep their balances secret.  TITAN
used stealth addresses which allowed the sender to create as many new balances for the receiver as necessary to avoid
combining funds and revealing their identity.  The problem is that timing attacks and voting patterns can more or less
completely reveal all balances belonging to an individual account.  To actually gain any privacy under TITAN would
require significant manual effort, an abstention from voting, and require dividing transactions over hours or days to
make a single "stealth" payment.   As a result most people had a false sense of anonymity.  The side effect of
attempting to build in privacy was a lack of scalability and significant complexity in building lightweight wallets and
infrastructure.   Abandoning the requirement for anonymity opens up a wide range of design options that were denied to
us before.

Under Graphene, each named account has exactly one balance per asset type and everyone can see what that balance is and
all transaction history except the private content contained in memos.  This significantly reduces memory consumption
associated with maintaining many different balance records each containing a fraction of the account’s balance.   This
also greatly simplifies voting which can now be done on a per-account basis rather than per-balance basis.
White-listing and web-of-trust implementations are now much easier to implement and maintain.   Bottom line: the cost of
maintaining the *illusion* of anonymity far outweighs its value which is practically zero.

Users can still create many different accounts that never transact with one another, and thereby maintain a high level
of privacy.  The difference is that users are aware of what is public, and have the ability to understand what is
necessary to maintain their privacy.

### Lesson 4 - Assign IDs rather than using UUIDs

Every crypto-currency I know of uses Addresses which are 160+ bit hashes to identify objects.  Large hashes are used
because they are collision resistant and unambiguous.  Bitcoin uses them to reference outputs and keys.  BitShares uses
them to reference balance objects (the moral equivalent of a bitcoin transaction output).   Ethereum uses 256 bit hashes
to reference everything and Ripple uses hashes to identify accounts.

The problem with hashes is that they take up a lot of space in indexes and are computationally slow to calculate,
compare, and otherwise manipulate.  If only we had a way to allocate globally unique IDs without using a
content-addressable hashing scheme!  Fortunately, that is exactly what a blockchain does: achieve consensus about
resource allocation.  This means that we can use the blockchain to assign globally unique IDs to every account,
asset, order, key, or other concept.   These ids can easily be represented as a variant using just a couple of bytes
rather than the 20 to 32 bytes used to represent a hash.  These IDs are not "random" and are thus far more
compressible than the hashes used by other protocols.

### Lesson 5 - Use Rational/Ratio Prices rather than Fixed Point

BitShares represented all prices as 128 bit numbers using a fix point representation.  Despite the very high degree of
precision, rounding errors gave unpredictable results and all markets were forced to pick a single orientation for
prices.   Using the same number of bits, all prices can be represented as a ratio between two assets and can be inverted
without any loss in precision.

### Lesson 6 - Multi-Sig is Difficult

A user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain
technologies. This means that a company account can require approval of its board of directors and each board member may
in turn require 2 factor authentication. The result is a new concept which we call hierarchical threshold multi-sig.
With corporate accounts, board members can change their personal keys without having to change the permissions
associated with the company. Permissions can be nested arbitrarily deep with funds being jointly managed by several
companies, each of which is managed by their own board, each member of which utilizes 2 factor authentication, while all
accounts have a cold-storage backup key.

### Lesson 7 - Voter Apathy

Voters do not have enough time to continually evaluate the performance of delegates and as a result network security can
suffer from having too many delegates and too little attention per delegate.  This combined with a hard requirement for
101 delegates means that voter turnout is low and their ability to quickly adjust their votes to handle non-performing
delegates is less than would be desired.

To resolve this issue, Graphene allows each account to "follow" another account’s voting preferences.  Users can thus
delegate their voting decisions to a trusted party which can be more pro-active.

### Lesson 8 - Delegate Pay is Political and not tied to Performance

Delegates campaigning for "marketing" positions get paid regardless of their results and the stakeholders have no way to
evaluate whether or not the funds were well spent.  The total budget available to BitShares is about $40,000 per month
even with a market capitalization of just $8 million.  This budget is more than enough to fund the entire development
team, but unfortunately the most any *one person* can get is $400 per month, which can only cover the development team
for 3 days per month.

For most marketing positions, the referral program is designed to replace delegate pay.  Introducing vesting periods and
finer grain control over how funds are allocated means dilution is reserved for relatively non-political purposes such
as funding a core team with a single position.

Separating block producers and parameter setters from workers keeps “money” out of the politics of running the network,
           and keeps it far more focused on the viability of a much smaller list of funded initiatives.

### Lesson 9 - Fear of Dilution is Worse than Dilution

The BitShares bear market has lead to many people blaming sell pressure caused by dilution, despite the fact that
dilution is less than 2% per year and the total value of daily dilution is just a few percent of daily trading volume.
Despite the reality that dilution has little direct impact on the price, its presence has been used as an excuse for
others to sell.

Under Graphene, projects funded by dilution can specify a vesting period which guarantees that the diluted stake cannot
be sold for years and thus alleviate any fears that selling of newly created tokens is the cause of short-term price
movements.

### Lesson 10 - Embrace the Single Threaded Reality of Blockchains

There has been a ton of research and development on how to achieve scalable blockchains.  Most approaches assume that
the goal must be to divide the task among nodes rather than having all nodes do all processing.  This divide and conquer
approach seems most intuitive, but it is fundamentally flawed because parallelism isn't free.   It is very common for
developers to take a single threaded program, make it multi-threaded and have performance fall rather than climb.   Our
research into scalability lead us to an [article about the LMAX trading
platform](http://martinfowler.com/articles/lmax.html).

> LMAX is a new retail financial trading platform. It has to process many trades with low latency. The system is built
> on the JVM platform and centers on a Business Logic Processor that can handle 6 million orders per second on a single
> thread. The Business Logic Processor runs entirely in-memory using event sourcing. The Business Logic Processor is
> surrounded by Disruptors - a concurrency component that implements a network of queues that operate without needing
> locks. During the design process the team concluded that recent directions in high-performance concurrency models
> using queues are fundamentally at odds with modern CPU design.

Based upon the success of LMAX, we now have proof that a single core of a desktop processor is able to handle 6 million
orders per second.  We also know that their architecture operates on the basis of a deterministic event processor that
logs inputs rather than logging database state.   In many ways, LMAX can be thought of as a blockchain where each event
is a transaction.   LMAX is a case study on why attempting to multi-thread an inherently sequential process is
fundamentally flawed.  All they needed to do was get all inputs into an ordered sequence and then get everything out of
the way of the core Business Logic Processor (BLP).   The most important aspect is that no blocking operations occur in
the BLP which means no network operations, no disk IO, no locks, and no atomic operations.

When you look at the approaches to solving scalability concerns presented by others, it is like throwing a ton of
network operations into the middle of the Business Logic Processor.   Ultimately, every node needs to achieve consensus
on the state of things.  Ultimately, all orders must be matched in some order.

A single processor and a fiber-optic connection to the Internet can easily process the Business Logic of the blockchain
even at millions of transactions per second.  This reality should be embraced and used to guide architecture design.
To this end, Graphene takes great care to separate validation and constraint checking from actually applying the changes
made by a transaction.  Reindexing a blockchain to rebuild the current world state can skip the validation and
constraint checking for blocks it has previously validated.

### Lesson 11 - Membership Organization, not Decentralized Company

A [working paper](http://www.scribd.com/doc/255347578/SWARM-Working-Paper-Distributed-Networks-and-the-Law), summarizing
the takeaways from the aforementioned workshop and published by CoinDesk, says that tokens for a Decentralized
Collaborative Organization represent “membership” in it. Holders of such tokens are granted unique rights in the
organization, and are effectively “managers and/or partners” in its success. The membership may or may not be
financially incentivized. The paper concludes that such organizations are likely not to be considered securities.

We have long used many metaphors to describe BitShares including a company, co-op, club, country and community.  With
Graphene, we move one step closer to a more regulation immune architecture.  With DPOS 2.0 and the built-in referral
model built around paid memberships, we have gone to great lengths to ensure that no one can be deemed an administrator
and that the network is entirely run by its users, who are jointly "managers and/or partners" in its success.

### Lesson 12 - Underpricing is not Sustainable

We have always maintained that a blockchain needs to be profitable to be sustainable and grow in value.  It doesn't
matter how valuable your product is or how much demand you have, if you sell your product for less than the cost of
production then you will go bankrupt and your business will fail.   In the case of BitShares, we assumed the cost of
user acquisition would be close to 0 and set our fees at $0.01 or less.  This is giving away a great product with high
value for next to nothing and ultimately the business is not profitable because it has not funded user acquisition from
revenue.

Under Graphene, we charge prices that are competitive with successful real world businesses providing similar services.
These real world businesses have real world costs for user acquisition and charge far more than it costs them to merely
update their database balances.   We need to be cheaper than PayPal, Dwolla, and centralized exchanges.   We do not need
to be "as cheap as possible" because that will undermine our product.

### Lesson 13 - BitAsset's need a *floor* not a *perfect peg*

The BitAsset system has evolved over the 9 months since it first launched as we learned how market participants reacted
to various rules.  Liquidity at the feed price is critical to confidence in the value of the token.  A system with
unbalanced rules will tend to bias the price in one direction or the other.  Early on, BitUSD was driven down to $0.85
as demand for shorting outstripped demand for BitUSD and shorts were not forced to cover.   Then, after implementing 30
day forced covering rules, the price stabilized around $0.98 to $1.00.  Later, as the bear market progressed, we now
have BitUSD trading at $1.05 or more because everyone is scared to use leverage and those that have open positions look
to cover their position while those who hold BitUSD are not looking to sell.  Over the course of these past 9 months, we
have seen 3 different markets and had an opportunity to better understand the behavior of market participants.

In order for BitUSD to be accepted as being equal to $1.00 for the purposes of setting prices and online shopping, it
only needs to maintain a floor of $1.00.  If it can maintain a floor of $1.00, then merchants can accept it and know
their margins are safe and that they are not exposed to currency risk.   In order to enable a guaranteed floor, all
BitUSD can be force liquidated at a trustworthy price feed within days.    If this rule is present, then those who
create the BitUSD must sell it at a price that properly accounts for this risk of forced settlement.  This means that at
almost all times new BitUSD will only enter circulation when there is a buyer willing to pay a premium for a guaranteed
floor.

Because USD holders can initiate settlement, there is no need for artificial forced covering every 30 days.   This
relieves shorts of risk, helps increase short demand, and keeps the price of BitUSD near the floor.

### Lesson 14 - Unnecessary Collateral Restrictions

All collateral above the maintenance collateral limit is effectively meaningless when it comes to enforcing the peg.  A
black swan event occurs whenever the least collateralized position is unable to buy enough BitUSD to cover.   At this
point, all positions are force settled and any additional collateral maintained by the shorts is returned to them.  The
only reason for a short to provide additional collateral beyond the maintenance level is to avoid being forced to cover
at a loss during a short squeeze or to avoid being the first to be force settled by a BitUSD holder.

Either the maintenance collateral level is sufficient or the system is fundamentally unsound.   Maintenance collateral
only needs to be high enough to cover any slippage as a result of a short squeeze.   Rules in BitShares that only
allowed users to increase their collateral put extra risk on shorts and did nothing to protect against a black swan.  By
relaxing this restriction, shorts face less risk and can gain higher leverage which will enable them to sell closer to
the floor.

### Lesson 14 - Unnecessary Collateral Restrictions


Under BitShares, the BitAsset holders received a yield simply by holding BitUSD.  This yield was between 1% and 5% APR
on average.  Unfortunately, yield harvesting can happen at any time by someone shorting to themselves to gain a very low
risk return which undermines the goal of encouraging people to buy and hold BitUSD.   This yield was funded from
transaction fees and by interest paid by shorts.

As we stated in Lesson 12, undercharging for transactions is bad for business, and BitShares was effectively earning
nothing for all transactions of BitUSD because 100% of the income generated from fees was paid out to BitUSD holders as
yield, and nothing was left over to cover network expenses.

Charging shorts interest seemed like a good idea when there was surplus demand to short below $1.00, but in a bear
market all interest is effectively 0.  Even in a bull market where there was interest paid, it did not help increase
liquidity, because the benefits of buying the high interest short were shared with all BitUSD holders.  Ultimately,
    interest will not be paid in most circumstances, and when it is paid, it complicates the market.

Attempting to boost the value of BitUSD with yield is counterproductive once Lesson 13 is internalized, and shorts know
they can be force settled at the price feed at any time.  Under these rules, BitUSD already has a floor, and paying
yield on BitUSD would only serve to raise BitUSD above the floor and break the peg.

While *socialized yield* is broken, Graphene offers a far better alternative:  *collateralized bonds*.  Collateralized
bonds enable arbitrary shorting between any two assets, guaranteed interest, and no risk of being force settled.   This
system privatizes the yield to individual bonds and the terms and leverage available can be far more flexible.  In
effect, BitUSD becomes cash and a collateralized bond becomes a Certificate of Deposit.

### Lesson 15 - You Get What you Ask for Orders were a Bad Idea

BitShares went to great effort to avoid market manipulation and eliminate the supposed evil of "front running".  To stop
front running, all orders were matched at the exact price specified in the order.  Any overlap in the market was
captured as fees.   This means that to get the best price, a client would have to submit many orders manually matching
each order.  This had the side effect of slowing down how quickly someone could "walk the book".  This "slow down"
effect was pitched as protection against market manipulation attacks on BitAssets.

Experience has taught us that the lack of standard limit orders has harmed market liquidity and adoption.  Graphene
matches orders on a first-come, first-serve basis and gives the buyer the best price possible up to the limit.   Rather
than charging "unpredictable fees" from market overlap, the network charges a defined fee based upon the size of the
order matched and the assets involved.   Each asset issuer gets an opportunity to configure their fees.

### Lesson 16 - Design for Hosted Wallet First (blockchain.info style)

With the ultimate goal of achieving VISA level transaction volumes, the end user is ultimately going to be forced to use
a light wallet solution.  Hosted wallets are easier to use, require no setup time, and can acquire users much easier
than a downloadable wallet.   When a network is evolving, the constant need to upgrade wallets and re-index a full node
prevents adoption.  The system needs to be designed to be secure for hosted wallets from day one, and it is an
all-around better alternative to full desktop clients.

There are many aspects to BitShares 1.0 that make implementing a hosted wallet difficult.  The API for querying the
chain state required constant polling and the sheer number of queries and their relatively slow performance meant that a
hosted wallet service required too many servers per active user to maintain responsiveness.

Under Graphene, a new websocket-based API eliminates polling and provides a far more efficient way to synchronize
thousands of users to a single server.

## Lessons Learned

### Lesson 15 - Socialized Yield is Broken

Under BitShares the BitAsset holders receive a yield simply by holding BitUSD.  This yield was between 1% and 5% APR on
average.  Unfortunately, yield harvesting can happen at any time by someone shorting to themselves to gain a very low
risk return and undermining goal of encouraging people to buy and hold BitUSD.   The yield was funded from transaction
fees and by interest paid by shorts.

As we stated in Lesson 12, under charging for transactions is bad for business and BitShares was effectively earning
nothing for all transactions of BitUSD because 100% of the income generated from fees was paid out to BitUSD holders as
yield and nothing was left over to cover network expenses.

Charging shorts interest seemed like a good idea when there was surplus demand to short below $1.00, but in a bear
market all interest is effectively 0.  Even in a bull market where there was interest paid it did not help increase
liquidity because the benefits of buying the high interest short were shared with all BitUSD holders.  Ultimately
interest will not be paid in most circumstances and when it is paid it complicates the market.

Attempting to boost the value of BitUSD with yield is counter productive once Lesson 13 is internalized and shorts know
they can be force settled at the price feed at any time.  Under these rules BitUSD already has a floor and paying yield
on BitUSD would only serve to raise BitUSD above the floor and break the peg.

While Socialized Yield is broken, Graphene offers a far better alternative:  Collateralized Bonds.  Collateralized Bonds
enable arbitrary shorting between any two assets, guaranteed interest, and no risk of being force settled.   This system
privatizes the yield to individual bonds and the terms and leverage available can be far more flexible.  In effect,
           BitUSD becomes cash and a Bond becomes a Certificate of Deposit.

### Lesson 11 - Multi-platform Native Desktop Client is Prohibitively Costly and Unprofitable
- **Extremely** costly maintaining multi-platform support (Windows, Linux, Mac)
- Lower conversion rate than a website
- Heavy machine resource usage
- Releases quickly obsoleted by hardforks
- Still used web frontend, thus throwing out the rich C++ type system and making it impossible to keep frontend in sync with backend

### Lesson 12 - Nonexistent Technical Documentation
- Required spin-up time of at least 1 month before a core dev could be productive
- Made it immensely costly for any service/affiliate to attempt integration
- No clear official whitepaper made us look like amateurs

### Lesson 13 - Paid Workers (Delegates) are not enough for growth
- Dilution pay is not sufficient for bootstrapping network effect
- With the referral system, we have created explicit incentives to encourage a positive feedback loop for network growth

### Lesson 14 - No clear public roadmap
- Lack of this information in the market helps lead to shareholder fear, confusion, and apathy
- Core dev team even did not have consensus on priorities; leading to extreme scope creep

### Lesson 15 - Unclear leadership structure
- Network de-jour controlled by elected delegates, but de-facto controlled by core dev team
- Nearly impossible to gauge shareholder consensus on specific issues, and thus unable to prevent disasters like the Merger
- Nearly impossible to achieve consensus on DAC business development tasks and priorities (marketing, public relations, etc.)

### Lesson 16 - Lack of reliable development process and methodology
- Poor/nonexistent documentation and testing strategy resulted in most resources being spent on fixing previous mistakes
- Constant regressions
- Both intentional and unintentional API changes imposing high costs on service providers

### Lesson 17 - Poor documentation on core rules of the DAC
- Highly complex, undocumented, and buggy market causing high risk and levels of fear
- Unclear voting rights causing fear and confusion

### Lesson 18 - Poor communication between community leaders
- Disconnect between Western and Chinese communities

# Lessons Learned

This project will attempt to learn from the mistakes made on the development of BitShares and many of these mistakes are
discussed here.

## Lesson 3 - Performance Matters

A system that has poor performance early on in its life gives many users a bad experience.  It must feel light early on
or people will find that delays and bugs caused by low resources result in poor reviews and stability.

## Lesson 4 - Privacy Doesn't Matter (on the blockchain)

We all *want* privacy, but it is not cheaply attainable and greatly degrades user experience.  Ultimately a false sense
of privacy will harm users more than no privacy at all.  If users know they have no privacy then they will conduct their
online activity accordingly.   The proper way to achieve privacy is through the use of smart contracts implemented as
multi-sig oracles.

## Lesson 5 - Simple Transaction Structure

Transactions should contain all of the data necessary to interpret them and not depend upon data implied by the current
state of the block chain.  Any fees should be explicit and predictable.

## Lesson 7 - Make Marketing Profitable

The block chain should serve as a tool for other businesses to make money.  These other businesses will then have
financial incentive to build on the platform and make money.

## Lesson 8 - Copy Right Reserved

It takes a lot of time and money to build a block chain and the fear of people copying the code and starting a new
killer chain scares off many investors.  The code must be open source, but not free to use for any other block chain.
This means others can still copy it, but no serious business will build upon a platform that is in violation of
copyright.  This will help attract capital.

## Lesson 9 - Keep things In Memory

No database can efficiently process the shear volume of randomly accessed data required when processing transactions.
Keeping things in memory means objects and polymorphism can be used directly and that the time it takes to lookup the
necessary data to process a transaction is constant.

## Lesson 10 - Don't Do Everything

Creating a general purpose ledger will never scale to the performance needs of the financial sector and will result in
never ending change. This means that the block chain must adopt a core set of features and focus on those.
