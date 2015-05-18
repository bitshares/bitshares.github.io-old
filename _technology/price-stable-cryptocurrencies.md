---
title: Price-Stable Cryptocurrencies
subtitle: The freedom of cryptocurrency with the stability of the dollar
priority: 2
summary: "
A BitAsset is a cryptocurrency whose value is pegged to that of another asset such as the US Dollar or Gold.  BitAssets
have over 100% of their value backed by the BitShares currency, BTS, and can be converted to BTS at any time at an
exchange rate set by a trustworthy price feed.   In all but the most extreme market conditions, BitAssets are assured to
be worth <i>at least</i> their face value and perhaps more in some circumstances.  Like any other cryptocurrency,
BitAssets are fungible, divisible, and free from any restrictions.
"
---

## Background
Cryptocurrencies are unique in that they are the only digital currency that is not someone else’s liability.  They are
fungible, decentralized, and as valuable as the network of users that support them.    Unfortunately they suffer from
very high volatility because the free market does not know how to value them precisely, its perception of value is
constantly changing as users enter or leave the ecosystem.

The traditional approach to creating a stable asset is to accept deposits and issue a digital token as a claim receipt.
Under this approach the token will be valued by the market as a dollar discounted by any credit-risk associated with the
issuer.   This can work well for transactions and as currency, but less well as a form of savings.   History has proven
time and again that issuers often go bankrupt due to fraud, incompetence, or government intervention.

More recent approaches have used a cryptocurrency as collateral in a [contract for
difference](http://www.investopedia.com/terms/c/contractfordifferences.asp).  Under this approach, two parties can take
opposite sides of a trade where one party is guaranteed price stability and the other party is granted leverage.    This
approach works well as long as there is sufficient collateral and the contract can be settled by an honest 3rd party
with a price feed.  Unfortunately a contract for difference is not fungible and has a explicit settlement date which
means they are not useful as a currency.

## Introducing BitAssets

BitAssets take the concept of Contract for Difference and make the long side fungible.  For the purpose of this
discussion we will assume that the long side of the contract is BitUSD and that the backing collateral is BTS
(BitShares).
To achieve this BitAssets use the following set of market rules:

1. Anyone with BitUSD can settle their position within an hour at the feed price.
2. The least collateralized short positions are used to settle the position.
3. The price feed is the median of many sources that are updated at least once per hour.
4. Short positions never expire except by hitting the maintenance collateral limit or being force settled due to being
   the least collateralized at the time of forced settlement.
5. In the event the least collateralized short position lacks enough collateral to cover at the price feed, then all
   BitUSD positions are automatically force settled at the price of the least collateralized short.

A simple metric for testing the validity of our claim that 1.00 BitUSD is always worth *at least* $1.00 is to
demonstrate that if you can find someone willing to sell 1.00 BitUSD for $1.00 that it would be the cheapest option for
buying BTS.   This means that 100% of the buying demand for BTS would be available to give liquidity to BitUSD holders
as a priority over BTS holders.   In the following sections I will attempt to prove this condition is met.

While the rules are simple, the consequences are less obvious.   Let's analyze this from the perspective of the various
players.

## The Shorter
When deciding a price at which to enter a short order, a trader must consider the risk of forced settlement.   In this
case no trader will attempt to short at or below the price feed because they could be forced to settle at the price
feed.   In fact, a smart trader would allow enough of a spread to account for the risk of being forced to settle at a
feed price that was off by a small amount.    In practice the risk posed by the feed error is balanced equally between
being in the favor of the short and in the favor of the long leaving only the risk of being forced out of their position
at an inopportune time.

A short can minimize their exposure to the feed by providing enough collateral to keep far above the least
collateralized positions and thus very unlikely to be forced to settle at the feed or at an inopportune time.

In practice the only way new BitUSD will enter circulation is if there is someone willing to pay enough of a premium to
convince a short to provide guaranteed liquidity at the price feed on demand while also covering the cost of exchange
rate risk.  In a bear market for the backing cryptocurrency the premium will be higher, in a bull market it will be
lower.

Someone who is short has only one way to exit their position: buy BitUSD off the market.  This means that a short must
also factor in the risk that the premium may change.  If a short position is entered in a bull market with a 0.1%
premium, it may be forced to exit during a bear market with a 5% premium.  In this event a short position is exposed to
both exchange rate of the dollar vs. BTS and the premium risk.   On the other hand, a short entered during a bear market
with a 5% premium may get to cover during a bull market with a .1% premium.

For all intents and purposes the premium moves in the same direction as the price and thus speculators who only care
about relative price changes can ignore the premium.

## The Long (BitUSD holder)
The very first buyer of BitUSD will have to pay the lowest premium set by the shorters.  For the sake of discussion
let's assume the first BitUSD was created in a bear market and cost $1.05 to create.   The holder of that BitUSD has two
options:  sell it on the market for $1.04 or request forced settlement for $1.00.   Clearly the forced settlement option
would only be used in situations where there was a decrease in total demand for BitUSD and there were no offers to buy
it above $1.00.

As a trader only looking to trade back and forth between BitUSD and BTS this premium doesn’t matter.   You are exposed
to volatility in the premium, but that risk is limited to $0.05 in this example.  In practice the premium will probably
be relatively stable and predictable.


## The BTS Buyer
As someone with dollars who is looking to buy BTS I know that 1 BitUSD can be used to buy $1 worth of BTS plus what ever
the current premium is.   I also know that this premium can never be negative because of the option to force-settle at
the price feed.    In this situation I can know with certainty that if I can convince someone with BitUSD to sell it to
me for $1.00 that I can buy more BTS than if I simply buy BTS with my dollars directly.    The higher the premium the
more incentive there is for me to buy BitUSD for $1.00.

This means that in a BTS bear market is when the BitUSD price gives the highest premium of the BTS price and BitUSD
becomes the easiest to sell.  In practice most of the time the BitUSD:USD market will reflect the premium and you will
be unable to find anyone willing to sell for exactly $1.00.

If I have a large quantity of BTS that I want to buy without moving the price then I can start by buying up BitUSD with
my dollars.   This will slowly raise the BitUSD:USD price which is a signal to other market participants.   If I buy it
up slowly then I can avoid signaling the market.   Then after acquiring my position in BitUSD I can request forced
settlement all at once and get the price feed.

Because all positions and trades are visible on the blockchain, all of this trading activity is actually factored into
the price minimizing any profits to be made by attempted manipulation.

## The Merchant

As a merchant I want to know that if I price things in BitUSD that I can actually realize real USD in my bank account in
a reasonable time with minimal risk.   In this case I as a merchant would be the one placing my BitUSD on the market at
$1 per BitUSD.  As we already discussed, all of the BTS buyers would be fighting for the opportunity to buy BitUSD at
that price.

A smart merchant would recognize that 1 BitUSD can actually fetch $1 plus a variable premium and start preferring
customers to pay them in BitUSD at face value.   An even smarter merchant would offer a discount to customers that pay
in BitUSD.

Any way you slice it, merchants have financial incentive to advertise BitUSD as the preferred payment mechanism because
they know that $1.00 is the lower bound on what BitUSD is worth.

## The Customer

As a customer looking to buy goods and services with BitUSD I find myself having to pay a premium to acquire BitUSD from
the market in the first place.   This means I will prefer merchants that offer me a discount equal to the premium I
paid.   On the other hand, if I was a customer that earned BitUSD at a nominal value of $1.00 then the premium is a
wash.   In fact the only people to whom the premium matters are those who are looking to enter or exit the ecosystem.
Once you are within the ecosystem it is easy to simply trade BitUSD at parity even if it is theoretically worth slightly
more outside the ecosystem.

Customers are using BitUSD because it provides them the convenience and freedom of a cryptocurrency and has the lowest
transfer fees of any other payment platform.

Merchants and customers are free to negotiate a way to split the premium and the free market will take care of the rest.
In the mean time everyone can rest assured that BitUSD is always worth at least $1 and can consider the premium for
entering the ecosystem as a one time fee that is likely lower than credit card fees.

## Price Manipulation
There is always concern of price manipulation.  Someone with a large amount of money on both sides of a trade can use
their funds to manipulate the markets and thus the price feed.  If the amount of money they lose manipulating the
markets is less than the amount of money they can gain by manipulating the price feed then it will be profitable
manipulate the market at the expense of either the BitUSD longs or the shorts.   A low collateralized short that sees a
large force-settlement order requested can attempt to manipulate the markets and thus the feed against the BitUSD
holder.

The risk of price manipulation will be priced into the premium on BitUSD charged by the shorts and thus should already
be priced into the market.  If price manipulation became a serious problem that caused very high premiums then it can
easily be addressed by the price feed producers which can adopt a moving average over wider time windows to increase the
difficulty of short-term manipulation.   There are any number of algorithms that can be used to estimate a “fair price”
that keeps BitUSD valued at least $1.00.

In practice a feed producer can actually observe the BitUSD : USD market as an indicator on which way to adjust the
feed.  Generally speaking, the strategy that the feed producers adopt for controlling the feed should be public
knowledge because ultimately that is what the shorts are speculating on.  If feed producers change strategies in
unpredictable ways then it can cause losses to both longs and shorts.

## Black Swans - Extreme Market Conditions

All guarantees of BitAssets are subject to the caveat that a BitAsset can never be worth more than the collateral
backing the least collateralized short position.  In normal market conditions the value of the collateral is always more
than sufficient, but from time to time markets can rapidly revalue the collateral.  If this revaluation happens faster
than the short positions can be forced to cover, then all BitAssets are liquidated at the exchange rate of the least
collateralized short position.  An analogy can be made to an insolvent bank converting its deposits to equity.

## Bond Market

Not every short seller will be happy with the rules offer by BitAssets.  They may want to borrow for a period of time
with higher leverage and no risk of being force settled early.  BitShares offers these speculators the option to borrow
BitUSD on the bond market at interest.   The Bond Market allows speculators to leverage anything against anything else
while others earn interest on collateralized loans.   A Bond market is the perfect way for the market to establish a
yield curve on BitAssets and free both sides of the market from dependency on the Price Feed.

## Privatized BitAssets

BitShares offers entrepreneurs an opportunity to create their own BitAssets with custom parameters and price feeds.
These entrepreneurs can experiment with different parameters such as collateral requirements, price feeds, force
settlement delays and forced settlement fees.   As the manager of a user issued BitAsset you earn 100% of the trading
fees and therefore have financial incentive to market and promote your asset on the network.   The entrepreneur who can
discover and market the best set of parameters can earn a significant profit.   The set of parameters that can be
tweaked by entrepreneurs is broad enough that BitAssets can be used to implement a fully functional prediction market
with a guaranteed global settlement at a fair price and no forced settlement before that date.

Some entrepreneurs may want to experiment with BitAssets that always trade at exactly $1.00 rather than strictly more
than $1.00.   They can do this by manipulating the forced settlement fee continuously such that the average trading
price stays at about $1.00.   By default BitShares prefers fees set by the market and thus opts to let the price float
above $1.00 rather than fixing the price by directly manipulating the forced settlement fee.

## Conclusion

BitAssets are a powerful tool for everyone from speculators, to merchants, to savers, and entrepreneurs and BitShares
provides a platform upon which the market can discover exactly what it needs.
