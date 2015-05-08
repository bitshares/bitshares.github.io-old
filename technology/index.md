---
layout: default
title: Technology - BitShares
---

# Technology

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
