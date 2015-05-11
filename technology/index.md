---
layout: default
title: Technology - BitShares
---

# Technology

### Why did we build this?

### How does BitShares fulfill the above?

lowering costs
eliminating censorship
level playing field
predictability
transparency
reliability
ease of use
new business models

smart-contracts

[test link](#learn-more)

### What is the software actually?

BitShares is a platform that enables businesses and individuals to start leveraging the power of smart contracts, and it's ready today.

## Features

BitShares is an industrial strength blockchain designed to provide a neutral platform upon which anyone can build a profitable business around standardized smart contracts.

> Earn $80 or more from each user you Sign Up!
> Learn More

### Performance

BitShares can process thousands of transactions per second while confirming transactions in seconds.   This platform is designed to handle VISA level transaction volumes.

### Referral System Built for Viral Growth

BitShares is the first blockchain with a built in referral system designed to promote viral growth.  Sign up a friend and collect 80% of their future transaction fees.   Traditional payment companies expect to generate over $100 per user on average and many companies are willing to pay over $40 per user even without a clear monetization strategy.   BitShares passes the vast majority of that revenue on to its members who sign up new users.

### BitAsset 2.0

BitAssets were first introduced by BitShares in July 2014 as stable digital currencies with minimal counter party risk.  Under BitShares BitAssets receive a significant upgrade with guaranteed minimal liquidity, user created and customized BitAssets, and BitAssets backed by other BitAssets.

BitAssets are the core feature of BitShares and represent a stable crypto-currency with minimal counterparty risk.  With Graphene, BitAssets receive a significant upgrade with many more advanced and tunable parameters.  Perhaps most importantly, there is no longer any pre-determined expiration on shorts and longs can now request force settlement at the price feed after a reasonable waiting period.  Under this system, BitAssets are assured to be worth *AT LEAST* their face value and perhaps more if there is little demand for shorting.


### Corporate Accounts

A user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain technologies.  This means that a company account can require approval of its board of directors and each board member may in turn require 2 factor authentication.   The result is a new concept which we call [hierarchical threshold multi-sig](hierarchical-threshold-multi-sig).  With corporate accounts board members can change their personal keys without having to change the permissions associated with the company.  Permissions can be nested arbitrarily deep with funds being jointly managed by several companies each of which is managed by their own board each member of which utilizes 2 factor authentication while all accounts have a cold-storage backup key.

### Decentralized Exchange
BitShares provides the highest performance decentralized exchange available that has all of the features you would expect in a trading platform.   Orders are settled the second you submit them.   Collateralized bonds provide opportunities for leverage and earning interest and options contracts allow you to hedge your position.

### Identity Management
BitShares accounts can be tagged by other accounts to indicate who knows who.  This web of trust can be used by asset issuers to remain compliant with relevant regulations by restricting their securities to authorized individuals

### Profitable

Proper pricing is important for to ensure a sustainable business model.  By charging fees that are appropriate and distributing the income in an effective manner BitShares powered networks can grow while while others struggle.  Members pay fees similar to Bitcoin ($0.04) while users pay fees similar to Dwolla ($0.20) or centralized exchanges (0.2%).

### Workflow Management with Proposed Transactions

Propose a transaction and allow the blockchain to gather the signatures requested and automatically execute the transaction at the appointed time.  This feature works hand-in-hand with corporate accounts and makes it easy for everyone to approve or reject transactions.  Multi-sig done right.

### Recurring Payments

Recurring payments is a critical feature to many industries that depend upon the subscription model or want to have their bills automatically paid.  With recurring payments one account can grant another account permission to withdraw any amount up to a limit for a specified number of times at a specified interval.  This permission can be revoked at any time.

### Advanced Smart Contracts

At the heart of BitShares is a set of the most common smart contracts that have been optimized for performance and ease of use.  These contracts include [Secured Bonds](bond-market), Collateralized Options, Escrow and Prediction Markets.

### Transferrable Account Names

Named accounts make it easy to share your account with friends and can double as a decentralized domain name system.

## Delegated Proof of Stake 2.0 (DPOS 2.0)

Under DPOS stakeholders elect individuals to produce blocks, configure blockchain parameters, and fund infrastructure.  Under DPOS 2.0 the roles of delegates and users have been divided into several different roles.

1. **Customers** use the services provided by the blockchain and pay full transaction fees.  These users have no role in the governance of the network.
2. **Members** are paid-for premium accounts which can use their stake to vote for elected positions.  Members get an 80% discount on transaction fees and are qualified to receive referral income from new users they sign up.
3. **Witnesses** are an elected position that produce blocks and validate transactions.  They are paid a small percentage of transaction fees necessary to cover the cost of running the network.
4. **Committee Members** are elected positions that have the power to propose changes to the blockchain parameters.  This position is not paid.
5. **Infrastructure Members** are paid by the blockchain to perform needed development.  All infrastructure spending must be directly approved by the voting Members and has a hard-coded spending limit.

New in DPOS 2.0 is the complete configurability of the blockchain.  Everything from transaction sizes, fees, block sizes, and block intervals are dynamic and can be adjusted by the Committee Members to account for changing technologies and load.  There are no hard-coded magic numbers in the blockchain which makes DPOS 2.0 adaptable and resilient.

DPOS 1.0 hardcoded 101 delegates to produce blocks.  Some people felt this was too many, others too few.  One thing we knew for sure is that 101 is probably not the right number and so under DPOS 2.0 the stakeholders now have full control over how many block producers, committee members, and infrastructure members they wish to elect.

## DPOS 2.0 - Witness, Delegate, and Worker Roles
A witness is simply a block producer and is paid a small percentage of transaction fees.   A set of delegates has multi-sig control over the "genesis" account which has the authority to change dozens of blockchain parameters including: block interval, fees, block sizes, etc.  All changes have a review period during which a delegate may be voted out to prevent the proposed change from taking effect.  Delegates are unpaid positions.   Lastly, workers are for funded projects, where each project can define a budget, a manager (multi-sig), a pay schedule, and a vesting period.   Projects can be canceled at any time and the total funding for all projects shall not exceed the maximum dilution rate allows by BTS (50 BTS every 10 seconds halving every 4 years).

## Learn More
See our roadmap for future plans or come join or forum to participate in the discussions!

# what is bitshares? doc

Answering the question "What is BitShares?" has been one of the most difficult challenges I have faced.  BitShares is so many things to different people and there are a thousand different ways of understanding what BitShares is.  This post will tell you what BitShares is to me, its founder.  Before getting into the long-answer to this question, let me give you the executive summary.   BitShares is one of the most important tools that any community can use to secure their freedom; an idea whose time has come. After reading this post I bet you will agree.

<!--more-->

  >  All the forces in the world are not so powerful as an idea whose time has come.  - Victor Hugo

There are many different layers at which we can understand BitShares.  Each layer has its own benefit and usefulness.

![BitShares is like an Onion](/media/BitSharesIsLikeAnOnion.jpg)

##BitShares is software

At its most inner layer, **BitShares is software**.  To be more specific, BitShares is a distributed multi-user database with update permissions managed by a defined set of rules and public key cryptography.   At this level it isn't very interesting to most people, but is still very important.  Software is open source, easily copied and modified, and most importantly protected by free speech.  This means that almost nothing can stop BitShares at this layer short of a global event that destroys almost all digital data.  Governments once attempted to regulate cryptographic software as a weapon and impose export controls.  Governments lost that battle long ago and no longer attempt to regulate or control the spread of free software.  In the case of BitShares the software is in the [Public Domain]({% post_url 2014-12-17-Why-Public-Domain %}).

##BitShares is a network

Moving up a layer, **BitShares is a network**.  A network of computers owned by individuals all over the world run the BitShares software and keep their databases synchronized according to the rules defined by the software.  The BitShares network can survive as long as there are at least two computers that can communicate with each other over the internet.  This network of distributed computers ensures that the database is robust against failure.  Every single computer on the network maintains a full copy of the database which means no one can change the public record.  This immutable public record becomes the foundation of higher layers.

##BitShares is a Ledger

A ledger is a database containing account balances and transfers among them.  Every bank, company, and organization that deals in financial matters has a ledger that tracks who owns what.   The BitShares ledger is very robust because it is built on the prior two layers: highly distributed network, that is fully transparent, and secured by the latest cryptography.

Compare this to ledgers in use all around the world today.  Ledgers based upon paper can be lost, stolen, modified, burned, or miscalculated.  Digital ledgers managed by software such as Quick Books or Quicken are centrally managed, can be updated, changed, back dated, corrupted or otherwise misused.  Advanced ledgers such as is in use by our banking system are still subject to human error, lack transparency, are only backed up a hand full of places and often times are internally inconsistent.

Just ask the owners of MF Global where the depositors' funds went?  Ask any of the big banks who really owns the gold and how many times the same ounce of gold has been used as collateral; they cannot tell you with any degree of certainty.  The ledgers in use today around the world are fundamentally broken when it comes to reliably tracking property rights.  How do we know they are broken? Have you ever heard of cooking the books?  Today's ledgers have insufficient technological barriers against fraudulent edits; the ultimate protection is a manual audit, but audits are time-consuming, expensive, non-public and only as trustworthy as the auditor (think about Enron).

The BitShares ledger changes the game by providing a badly needed advancement in accountability.

##BitShares is a Company

  Companies are merely a ledger tracking joint ownership in a common venture.  Companies issue stock which is nothing more than a ledger entry tracking what percent of the company each individual owns.  Companies are managed by a board of directors which is elected by the shareholders, the votes of which are logged in the companies ledger. Companies have a business model that hopes to earn profit for the shareholders and they maintain detailed records of all business transactions which, in theory, can be audited by the shareholders to ensure management isn't embezzling money.

In the case of BitShares, the database tracks ownership of shares known as BTS.  Each share can vote for 110 delegates, the top 101 delegates by vote become responsible for running the software and maintaining the network as well as performing other tasks for which they are paid by the shareholders.  BitShares is a company in the business of processing transactions for a fee and the profits from this business are shared with the shareholders via stock buybacks.

##BitShares is an Exchange

The New York Stock exchange is a company that maintains a ledger to track ownership of stock and debt issued by other companies. It earns money from transaction fees and has its own stock as well.   Like the New York Stock exchange, BitShares allows people to issue their stock or debt to be tracked and traded on its distributed ledger.

##BitShares is a Bank

Banks are companies that maintain a ledger to track debt collateralized by other assets such as housing.  This debt is the money used around the world, denominated in dollars, euros, yuan, etc.  Banks earn income by charging interest to the borrowers and attract capital by paying interest to depositors.  BitShares creates dollar denominated debt collateralized by BTS.  This dollar denominated debt is a [BitAsset]({% post_url 2014-12-18-What-are-BitShares-Market-Pegged-Assets %}) known as BitUSD.  BitShares supports any number of BitAssets including BitGold, BitSilver, BitOil, etc.  Whereas normal banks practice the unsustainable business of fractional reserve banking, BitShares uses at least 200% reserve and is often over 300% reserve.  Whereas normal banks use illiquid assets to back (collateralize) debt payable on demand, BitShares uses highly liquid BTS as collateral.   Whereas normal banks are bailed out by tax payers, BitShares depositors have direct claim on the collateral.

Overall BitShares is better banking. For a more detailed understanding see my article on ["BitShares as a Bank"]({% post_url 2014-12-20-BitShares-as-a-Bank %}) or Lance Kasper's detailed [article explaining how BitShares Market Pegged Assets]({% post_url 2014-12-18-What-are-BitShares-Market-Pegged-Assets %}) operate.  I highly recommend these article to everyone.


##BitShares is a Currency

Anything can be used as money in the right circumstances.  Gold, silver, giant stones, paper, debt, and cigarettes have all been used as money.  The rich and powerful have often used [bearer shares](http://www.investopedia.com/terms/b/bearer_share.asp) (paper stock certificates) as a form of money.  In the case of BitShares there are many different assets that can be used as money including BTS, BitUSD, BitGold, and BitSilver.   All of these assets have the property of being fungible, divisible, transportable, and impossible to counterfeit.

<a href="http://www.amazon.com/gp/product/B001M5PTQM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001M5PTQM&linkCode=as2&tag=bytesblog-20&linkId=W3Z4KVBNURMF2KG4"><img style="float:left; margin-right:25px;" border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001M5PTQM&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=bytesblog-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=bytesblog-20&l=as2&o=1&a=B001M5PTQM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
I have previously said that the best money is like a <a href="http://www.amazon.com/gp/product/B001M5PTQM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001M5PTQM&linkCode=as2&tag=bytesblog-20&linkId=GVYPRT7QQ5RAB53R">Flux Capacitor</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=bytesblog-20&l=as2&o=1&a=B001M5PTQM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />.  It can move value though time and space as quickly as possible with minimal loss.  Gold is great at moving value though time, as demonstrated by the fact that gold mined 1000 years ago is still worth something today.  Fiat currencies produced by governments have a shelf life of less than 100 years, during which they slowly lose all of their value.  Unfortunately, gold and paper money are not very efficient at moving value through space.  Physically moving boxes of gold or hundred dollar bills long distances or across borders is very time consuming and expensive.

Bank deposits are very efficient at moving value through space via wire transfers, but they are still expensive and relatively slow (days). Bank deposits can also lose all of their value far more often than paper dollars because banks regularly go bankrupt.

With BitShares and BitGold, you get many properties of gold (such as price stability and freedom from counter-party risk), as well as the benefits of bank deposits (you can transfer millions of dollars worth of BitGold to the other side of the world in seconds).

Whether you use BitShares (BTS) as virtual bearer shares, BitGold as a 300% collateralized virtual gold deposit, or BitUSD as an alternative to fractional reserve bank deposits, BitShares provides the best money/currency in the world.

##BitShares is a Community

A piece of software powering a distributed network is worthless without people coming together to give value to the BTS on the ledger entries.  Each and every person that joins the BitShares community adds value to the ledger and gains value from the fellow community members.   All things start small with just a few people.  Over the past year and a half, BitShares has grown from an idea to a global community with thousands of people.

Communities are brought together around common values and principles.  They support each other through thick and thin.  As the founder of BitShares, this community is largely brought together by the principles I espouse on this blog:  Creating decentralized, market-based solutions to secure life, liberty, and property for all.

##BitShares is a Country

Countries are what communities become when they become large enough and powerful enough.  Countries are sovereign and issue their own currency.  Countries are run by elected governments, usually with some kind of senate or parliament like BitShares' delegates.  While we have a long way to go, it is my vision to grow BitShares to the point where the ecosystem is able to make governments irrelevant to our daily lives.  This means all dispute resolution and law enforcement will be managed by the BitShares community in an entirely non-violent manner by leveraging smart contracts, bonds, insurance, and other systems on the BitShares ledger.

##BitShares is an Idea…
…whose time has come.  The specific software, network, and ledger that BitShares is today has very real limitations.  But the *idea* behind BitShares, BitAssets, and non-violent self governance is so powerful that all the forces in the world cannot stop it.  The *idea* will live on in one form or another.  The entire concept of numbers on a ledger having value exists entirely in the collective mind of the BitShares community.  It doesn't matter what form that ledger takes, what matters is that we all share a common idea regarding who owns what.  We no longer rely on governments to be the arbiter of property rights.  BitShares, the software, is just a tool that enables our community to reach unambiguous consensus on property rights.  In many ways, it is no different than [Rai stones](http://en.wikipedia.org/wiki/Rai_stones) which are large immovable stones used as money which were valued because of community consensus.

BitShares is a small town on global scale.

Our community is open to all who wish to create a free society where our children can be secure in life, liberty, and property.  [Join us]({% post_url  2014-12-22-Join-the-BitShares-Community %}) and be a part of the solution.

BitShares
=========
BitShares is a software platform designed to help coordinate voluntary free market operations amongst a set of social actors.

These social actors together maintain a replicated deterministic state machine which defines the state of a free market. This state machine unambigiously defines the ownership of resources amongst market participants, the rules by which resources are reallocated through market operations, and the history of all market operations. Social actors are free to voluntarily enter and exit the market as desired.

Replicas of the state machine are kept consistent using the [Delegated Proof-of-Stake](http://wiki.bitshares.org/index.php/DPOS_or_Delegated_Proof_of_Stake) distributed consensus protocol, which depends on market operations by a special class of market participants colloquially known as shareholders. Resource ownership is secured using digital signatures and inputs to the state machine are shared amongst actors using a peer-to-peer mesh network.

Features
--------
The system is designed to ensure the following properties:
- Fault-Tolerance: the market should be resilient to bad actors
- Immutability: the historical intent of all market participants should be preserved
- Transparency: any actor can inspect the market to verify that it is operating correctly
- Censorship Resistance: no actor can be kept from performing valid market operations
- Flexibility: the rules of the market should be able to change given sufficient shareholder approval
- Self-Sustainability: the market should be be able to fund its own continued operation

Additional information is available at [BitShares.org](http://bitshares.org/) and the [BitShares Wiki](http://wiki.bitshares.org/index.php/Main_Page). Community discussion occurs at [BitSharesTalk.org](https://bitsharestalk.org/).

# Announcing BitShares 2.0

Today we are announcing a major upgrade to the BitShares ecosystem that we have been hinting at over the past several months.  BitShares 2.0 takes all of the lessons we have learned over the past year and incorporates them into a new blockchain development toolkit which we call Graphene.   Graphene may be used to build many different blockchains, but it's first use case will be to upgrade BitShares.   There are many reasons for starting over from scratch and producing a new toolkit and this article hopes to shed some light on what we learned from BitShares 1.0 and the many advancements that Graphene allows.

## Overview of Graphene

The primary focus of Graphene was on Performance, Reliability, Maintainability, and Scalability.  As result Graphene can process 1000 times more transactions per second than the BitShares Toolkit and is able to handle VISA level transaction volumes.  In addition to performance, the built in fee structure and revenue sharing incentive structure should motivate adoption far more effectively than any other blockchain.

Graphene uses Delegated Proof of Stake 2.0 (DPOS 2) as the core consensus algorithm.  Under DPOS2 there all blockchain parameters are dynamic and can be changed with stakeholder approval and without a hard fork.   The role of delegates has been divided into several different roles: witness, delegate, and worker.  Graphene implements most of the same features of BitShares including BitAssets and User Issued assets but comes with a far more traditional order matching algorithm and a major upgrade to BitAssets (BitAssets 2.0).

## DPOS 2.0 - Witness, Delegate, and Worker Roles
A witness is simply a block producer and is paid a small percentage of transaction fees.   A set of delegates has multi-sig control over the "genesis" account which has the authority to change dozens of blockchain parameters including: block interval, fees, block sizes, etc.  All changes have a review period during which a delegate may be voted out to prevent the proposed change from taking effect.  Delegates are unpaid positions.    Lastly workers are for funded projects where each project can define a budget, a manager (multi-sig), a pay schedule, and a vesting period.   Projects can be canceled at any time and the total funding for all projects shall not exceed the maximum dilution rate allows by BTS (50 BTS every 10 seconds halving every 4 years).

## BitAssets 2.0

BitAssets are the core feature of BitShares and represent a stable crypto-currency with minimal counter-party risk.  With Graphene BitAssets receive a significant upgrade with many more advanced tunable parameters.  Perhaps most importantly there is no longer any pre-determined expiration on shorts and longs can now request force settlement at the price feed after a reasonable waiting period.  Under this system BitAssets are assured to be worth *AT LEAST* their face value and perhaps more if their is little demand for shorting.

Introducing Graphene Blockchain Engine
Graphene is an industrial strength blockchain designed to provide a neutral platform upon which anyone can build a profitable business around standardized smart contracts.

Earn $80 or more from each user you Sign Up! Learn More
Referral System Built for Viral Growth
Graphene is the first blockchain with a built in referral system designed to promote viral growth. Sign up a friend and collect 80% of their future transaction fees. Traditional payment companies expect to generate over $100 per user on average and many companies are willing to pay over $40 per user even without a clear monetization strategy. Graphene passes the vast majority of that revenue on to its members who sign up new users.

Performance
Graphene can process thousands of transactions per second while confirming transactions in seconds. This platform is designed to handle VISA level transaction volumes.

Decentralized Exchange
Graphene provides the highest performance decentralized exchange available that has all of the features you would expect in a trading platform. Orders are settled the second you submit them. Collateralized bonds provide opportunities for leverage and earning interest and options contracts allow you to hedge your position.

Identity Management
Graphene accounts can be tagged by other accounts to indicate who knows who. This web of trust can be used by asset issuers to remain compliant with relevant regulations by restricting their securities to authorized individuals

Profitable
Proper pricing is important for to ensure a sustainable business model. By charging fees that are appropriate and distributing the income in an effective manner Graphene powered networks can grow while while others struggle. Members pay fees similar to Bitcoin ($0.04) while users pay fees similar to Dwolla ($0.20) or centralized exchanges (0.2%).

Corporate Accounts
A user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain technologies. This means that a company account can require approval of its board of directors and each board member may in turn require 2 factor authentication. The result is a new concept which we call hierarchical threshold multi-sig. With corporate accounts board members can change their personal keys without having to change the permissions associated with the company. Permissions can be nested arbitrarily deep with funds being jointly managed by several companies each of which is managed by their own board each member of which utilizes 2 factor authentication while all accounts have a cold-storage backup key.

Workflow Management with Proposed Transactions
Propose a transaction and allow the blockchain to gather the signatures requested and automatically execute the transaction at the appointed time. This feature works hand-in-hand with corporate accounts and makes it easy for everyone to approve or reject transactions. Multi-sig done right.

Recurring Payments
Recurring payments is a critical feature to many industries that depend upon the subscription model or want to have their bills automatically paid. With recurring payments one account can grant another account permission to withdraw any amount up to a limit for a specified number of times at a specified interval. This permission can be revoked at any time.

BitAsset 2.0
BitAssets were first introduced by BitShares in July 2014 as stable digital currencies with minimal counter party risk. Under Graphene BitAssets receive a significant upgrade with guaranteed minimal liquidity, user created and customized BitAssets, and BitAssets backed by other BitAssets.

Advanced Smart Contracts
At the heart of Graphene is a set of the most common smart contracts that have been optimized for performance and ease of use. These contracts include Secured Bonds, Collateralized Options, Escrow and Prediction Markets.

Transferrable Account Names
Named accounts make it easy to share your account with friends and can double as a decentralized domain name system.

Delegated Proof of Stake 2.0 (DPOS 2.0)
Under DPOS stakeholders elect individuals to produce blocks, configure blockchain parameters, and fund infrastructure. Under DPOS 2.0 the roles of delegates and users have been divided into several different roles.

Customers use the services provided by the blockchain and pay full transaction fees. These users have no role in the governance of the network.
Members are paid-for premium accounts which can use their stake to vote for elected positions. Members get an 80% discount on transaction fees and are qualified to receive referral income from new users they sign up.
Witnesses are an elected position that produce blocks and validate transactions. They are paid a small percentage of transaction fees necessary to cover the cost of running the network.
Committee Members are elected positions that have the power to propose changes to the blockchain parameters. This position is not paid.
Infrastructure Members are paid by the blockchain to perform needed development. All infrastructure spending must be directly approved by the voting Members and has a hard-coded spending limit.
New in DPOS 2.0 is the complete configurability of the blockchain. Everything from transaction sizes, fees, block sizes, and block intervals are dynamic and can be adjusted by the Committee Members to account for changing technologies and load. There are no hard-coded magic numbers in the blockchain which makes DPOS 2.0 adaptable and resilient.

DPOS 1.0 hardcoded 101 delegates to produce blocks. Some people felt this was too many, others too few. One thing we knew for sure is that 101 is probably not the right number and so under DPOS 2.0 the stakeholders now have full control over how many block producers, committee members, and infrastructure members they wish to elect.

Transactions as Proof of Stake
Every transaction must include 4 bytes from a recent block hash that uniquely identifies the assumed state of the blockchain at the time the transaction was signed. Transactions cannot be included in any chain that does not contain that block. This means that every single transaction contributes to irreversibly confirming the public record. Witnesses provide short-term ordering of transactions while every single user participates in confirming the long-term history.

## Introducing Graphene Blockchain Engine

Graphene is an industrial strength blockchain designed to provide a neutral platform upon which anyone can build a profitable business around standardized smart contracts.

> Earn $80 or more from each user you Sign Up!
> Learn More

### Referral System Built for Viral Growth

Graphene is the first blockchain with a built in referral system designed to promote viral growth.  Sign up a friend and collect 80% of their future transaction fees.   Traditional payment companies expect to generate over $100 per user on average and many companies are willing to pay over $40 per user even without a clear monetization strategy.   Graphene passes the vast majority of that revenue on to its members who sign up new users.

### Performance

Graphene can process thousands of transactions per second while confirming transactions in seconds.   This platform is designed to handle VISA level transaction volumes.

### Decentralized Exchange
Graphene provides the highest performance decentralized exchange available that has all of the features you would expect in a trading platform.   Orders are settled the second you submit them.   Collateralized bonds provide opportunities for leverage and earning interest and options contracts allow you to hedge your position.

### Identity Management
Graphene accounts can be tagged by other accounts to indicate who knows who.  This web of trust can be used by asset issuers to remain compliant with relevant regulations by restricting their securities to authorized individuals

### Profitable

Proper pricing is important for to ensure a sustainable business model.  By charging fees that are appropriate and distributing the income in an effective manner Graphene powered networks can grow while while others struggle.  Members pay fees similar to Bitcoin ($0.04) while users pay fees similar to Dwolla ($0.20) or centralized exchanges (0.2%).

### Corporate Accounts

A user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain technologies.  This means that a company account can require approval of its board of directors and each board member may in turn require 2 factor authentication.   The result is a new concept which we call [hierarchical threshold multi-sig](hierarchical-threshold-multi-sig).  With corporate accounts board members can change their personal keys without having to change the permissions associated with the company.  Permissions can be nested arbitrarily deep with funds being jointly managed by several companies each of which is managed by their own board each member of which utilizes 2 factor authentication while all accounts have a cold-storage backup key.

### Workflow Management with Proposed Transactions

Propose a transaction and allow the blockchain to gather the signatures requested and automatically execute the transaction at the appointed time.  This feature works hand-in-hand with corporate accounts and makes it easy for everyone to approve or reject transactions.  Multi-sig done right.

### Recurring Payments

Recurring payments is a critical feature to many industries that depend upon the subscription model or want to have their bills automatically paid.  With recurring payments one account can grant another account permission to withdraw any amount up to a limit for a specified number of times at a specified interval.  This permission can be revoked at any time.

### BitAsset 2.0

BitAssets were first introduced by BitShares in July 2014 as stable digital currencies with minimal counter party risk.  Under Graphene BitAssets receive a significant upgrade with guaranteed minimal liquidity, user created and customized BitAssets, and BitAssets backed by other BitAssets.

### Advanced Smart Contracts

At the heart of Graphene is a set of the most common smart contracts that have been optimized for performance and ease of use.  These contracts include [Secured Bonds](bond-market), Collateralized Options, Escrow and Prediction Markets.

### Transferrable Account Names

Named accounts make it easy to share your account with friends and can double as a decentralized domain name system.

## Delegated Proof of Stake 2.0 (DPOS 2.0)

Under DPOS stakeholders elect individuals to produce blocks, configure blockchain parameters, and fund infrastructure.  Under DPOS 2.0 the roles of delegates and users have been divided into several different roles.

1. **Customers** use the services provided by the blockchain and pay full transaction fees.  These users have no role in the governance of the network.
2. **Members** are paid-for premium accounts which can use their stake to vote for elected positions.  Members get an 80% discount on transaction fees and are qualified to receive referral income from new users they sign up.
3. **Witnesses** are an elected position that produce blocks and validate transactions.  They are paid a small percentage of transaction fees necessary to cover the cost of running the network.
4. **Committee Members** are elected positions that have the power to propose changes to the blockchain parameters.  This position is not paid.
5. **Infrastructure Members** are paid by the blockchain to perform needed development.  All infrastructure spending must be directly approved by the voting Members and has a hard-coded spending limit.

New in DPOS 2.0 is the complete configurability of the blockchain.  Everything from transaction sizes, fees, block sizes, and block intervals are dynamic and can be adjusted by the Committee Members to account for changing technologies and load.  There are no hard-coded magic numbers in the blockchain which makes DPOS 2.0 adaptable and resilient.

DPOS 1.0 hardcoded 101 delegates to produce blocks.  Some people felt this was too many, others too few.  One thing we knew for sure is that 101 is probably not the right number and so under DPOS 2.0 the stakeholders now have full control over how many block producers, committee members, and infrastructure members they wish to elect.

### Transactions as Proof of Stake
Every transaction must include 4 bytes from a recent block hash that uniquely identifies the assumed state of the blockchain at the time the transaction was signed.  Transactions cannot be included in any chain that does not contain that block.  This means that every single transaction contributes to irreversibly confirming the public record.  Witnesses provide short-term ordering of transactions while every single user participates in confirming the long-term history.



  DPOS has been upgraded and is now more flexible than ever.
Consensus is the core of the platform and DPOS is the most efficient and flexible consensus algorithm.  There are several parameters that must be tuned with DPOS such as block interval and the number of delegates.  Based upon experience with BitShares we know that a 10 second block time is possible with near 100% reliability and an average latency of just 0.1 seconds.   The primary consideration when considering block interval is network propagation delay.  Any delayed block will cause the following delegate to miss it.   The network must be able to "stream" blocks at a fluid rate even at scale and therefore the "block interval" doesn't matter beyond the ability of delegates to sync their clocks.    You could have a 1MB block every second or a 10MB block every 10 seconds, the resulting network activity would be about the same.  With this knowledge in hand, **I believe a 5 second block interval should be the target**.

### Benefits of 5 Second Blocks
  With an average confirmation time of just 2.5 seconds the network will be able to reach complete consensus (all delegates signing) every 8 minutes. The rate of random number generation will be 2x as fast which makes a significant difference in game play.   If a delegate does miss a block it doesn't result in a 20 second pause.  In other words, with 50% delegate participation the performance will feel the same as BitShares with 100% participation.

  The cons are a larger database of blocks that must be processed.  This can be largely mitigated by storing blocks sequentially in a flat file which can be easily streamed and avoid costly sorting of blocks by block hash.

### Dynamic Block Interval
  As time progresses experience will tell us if we need longer block intervals or shorter intervals.  A dynamic block interval would allow the delegates to "vote" on the desired interval and the network can adopt the median of the delegates.  This will allow the network to respond to changing demands and competition.

  A dynamic block interval would change the security definition from the "longest chain" to highest delegate participation since last change in the block interval where delegate participation is measured as blocks produced / expected blocks.

  To protect the network from abuse limits on the allowable range of block intervals should be hard coded.  I propose **1 second to 30 seconds to be the range**.  Below 1 second there is not enough time for a block to propagate around the world which takes 300 ms just to ping half way around the world.   Well connected, highly optimized delegates could probably do 1 second blocks.   There is also diminishing returns.

### Dynamic Delegate Count
  Fixing the number of delegates is inflexible and unresponsive to the needs of the shareholders and could potentially create a security issue.  The number of delegates should be dynamic such that the lowest approved delegate has at least 75% of the approval of the most approved delegate.   Under BitShares the most approved delegate has over 16% while the least approved delegate has about 8%, this situation shows the lowest approved delegate has 50% the approval of the most approved delegate.  Using the new rules BitShares would have 23 active delegates.

  The "long tail" of delegate approval opens the network up to a 51% attack with far less stake than the new proposed rule.

  There should probably be a minimum number of delegates (10?) regardless of approval.

## Double Spend Attack

Because transactions cannot migrate outside their valid window if an attacker knows there will be a short fork (just a few blocks) they can make a payment with a very short window.  This means that a single block confirmation is not fully secure and that you should wait for at least half a round (4 minutes).

## Object Graph Database

A unified database structure based around an in-memory object graph can provide fast, constant-time lookups of the data needed to process transactions.  This structure also lends itself to easy snapshots and restoring of database state.    This state should be significantly smaller than the complete transaction history of all objects.

Everything in the graph database is an object that is allocated a sequential ID by the consensus process.  Anyone can create a object that contains arbitrary data and every object has a owner who is the only person able to change the data.  This owner can be transferred to someone else.  The core protocol does not need to support specifying the data, it must only support allocating and transferring ownership of IDs.   Higher level interpretations of custom data operations can then utilize the IDs allocated by the protocol.

** Fees **

Every single operation must specify and pay its fees.  All fees are set by the delegates which publish a fee schedule with a different fee for each operation type.  Once per day the fees adjust to the median of the delegate schedules.  A fee may be paid in any asset provided there is BTS in the fee pool for that asset and the issuer has published a price for extracting fees from the pool.   Anyone may contribute BTS to the fee pool for an asset.   In the case of BitAssets the fee pool can go negative and the network automatically sells the BitAssets accumulated when someone places an order to buy the BitAsset for BTS.

** Should Objects have the ability to be listed for sale "on the blockchain"?  **

Given that objects are transferrable, they could be sold "off chain".  All that would be necessary is for someone to construct a transaction with two operations: 1 transfer payment, and 1 transfer object and then have both parties "sign" the transaction.  This would be atomic and keep features "off chain". On the other hand, this requires both parties to be online and available to sign the transaction at about the same time.  The cost of implementing it "on chain" is to add an optional "sale price" to an object and a single operation that will buy it.

## Privacy as Oracles

## Subscription Permission

