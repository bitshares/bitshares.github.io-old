---
layout: post
title:  "The most Decentralized Proof of Stake (POS) system."
author: "Daniel Larimer"
categories: article
---

All too often I see people making the claim that Delegated Proof of Stake is too centralized, but centralization is all relative.  Today I would like to explore the meaning of decentralization as it relates to Proof of Stake systems and compare the top 3 approaches: BitShares, Nxt, and Peercoin.  My aim is to be as objective as possible.

<!--more-->

## What is Proof of Stake? 

Proof of stake is any system that is secured by the owners of the shares, coins, or tokens.  The idea is that those with a stake in the system have a financial interest in securing the system against attack.   Because stake is limited, attacking a proof of stake system would require buying up a large stake in the network at great expense.  

There are many ways that stake can be used and how it is used will ultimately determine the level of decentralization that will result.   Peercoin uses stake like a virtual mining machine, the more stake you have the easier it is for your computer to mine.   Nxt uses a deterministic algorithm for deciding who will produce the next block that randomly selects among users proportional to their stake.  Recently Nxt added leased forging which allows one user to delegate their forging power to another user.   

Delegated proof of stake used by BitShares elects 101 delegates with approval voting of the shareholders.  These delegates are randomly shuffled every 101 blocks and then take turns producing blocks every 10 seconds. 

## Decentralization Isn’t Free 

For the sake of this article, I am going to define decentralization as the total number of unique individuals participating in the validation process such that no one individual is responsible for a disproportionate amount of blocks. 

I am going to present some example numbers below, but do not take the numbers too seriously because they exist to demonstrate the extreme cases for the sake of contrast. 

Nothing in life is free.  If you want to have a million users participate in the consensus process then you will require a million computers all connected to the internet and consuming bandwidth.   Assuming an impossibly low cost per computer of $1 per month, you are looking at a total cost of $12,000,000 per year just to break even.  

Costs don’t start adding up until you attempt to scale these systems to the size of VISA or Master Card.  If you assume everyone is running a dedicated machine processing 1000 transactions per second at 512 kb per transaction, then each machine will require  64 Megabit upload and download internet connection that can easily sustain that data rate, a hard drive growing at over 2 TB per week, and over 256 GB of RAM and a high end CPU.   The cost of such a system and Internet connection is easily $1000 per month or more.   


At scale you are talking about a total cost of $12 billion dollars per year to maintain decentralization of 1 million validators.   This would assume a minimum transaction fee of $3.60 per transaction just to cover network infrastructure.   

If you were to reduce the number of validators from a million to just a single fully centralized node, then the total cost of validating the transactions would fall to just $12,000 per year and transactions would be essentially free.  

## Marginal Utility of Decentralization 

The law of marginal utility states that as a person increases consumption of a product there is a decline in the marginal utility that person derives from consuming each additional unit of that product.  Each additional validator provides less and less value to the network despite costing the network the same.   How much value is there going from 1,000,000 validators to 1,000,001?

From this we can conclude that there exists an ideal number of validators such that the marginal utility of adding the last validator equals the operational costs.   The only question that remains to be decided is what is the value of each additional validator.  This is a value judgement that will differ with every person in the market. 

## What the Market will Bear

To cover operating expenses a crypto currency network must charge transaction fees.  The higher the fees, the lower the adoption and the fewer transactions.   Assuming a desire to maximize profits, a network would aim to balance fees, transaction volume, and operating costs while competing against competitors attempting to offer better service for lower fees with higher margins.

Ultimately all costs flow on to the customer and the customer picks the service that provides what they need.    Most customers want the lowest cost service that reliably gets the job done.  For example, most people would buy a cheaper car with standard glass over an otherwise identical car with bullet proof glass that cost 10 times as much.   So those of us designing crypto-currency systems must attempt to gauge how much the market is willing to pay for additional decentralization.   Too much or too little decentralization could kill a crypto currency.

## Decentralization of Nxt and Peercoin 

Some users of these early proof of stake systems claim that they have greater decentralization than BitShares.  In other words, they claim that there are more than 101 unique validators none of which are responsible for more than 1% of the block production.   For this to hold true, these networks would need to pay the minimal hosting costs for 102 full time validators entirely from transaction fees.  I will assume a minimal VPS system costs $30 per month for the purpose of this discussion.   This means Peercoin and Nxt would need to generate about $36,000 in transaction fees per year or about 1 transaction per second at a minimum.   Obviously these currencies are not generating enough transaction fees to cover 102 unique individuals on a break-even basis.      

Unfortunately, an individual could only break even at 1 transaction per second if all coins were held equally by exactly 102 individuals.  This is not a realistic scenario.  Instead what you have is a wealth distribution that follows a bell curve.   Because transaction fees are distributed proportional to balance, we can assume that anyone with less than 1% of the stake will not be able to produce profitably and thereby be excluded from the consensus process.   If there is even a single person with more than 1%, then we can conclude that there must be someone with less than 1%.   Hence, both Nxt and Peercoin are unable to support 101 validators even if their transaction fees and volume were high enough because the rich validators are steeling profits at the expense of the poor validators.  

If you look closely you will discover that the more distributed the currency becomes, the more centralized the validation becomes.  In fact, if you had a million users each with an equal share of Nxt and Peercoin then no one could validate profitably.   To resolve this only 1 out of 10,000 users could participate in validating the network so that the fees would be concentrated enough to cover their costs.   This would result in just 1% of all stake actively securing the network, the other 99% would have to volunteer to sit out.  This means that an attacker can take over the network with a mere 1.1% of the stake.  Nxt has some ability to use leased forging which would help a little bit in this scenario.  

The obvious argument that will be made is that many validators use their home PC and internet connection and thus the true cost of being a validator is much less than $30 per month.  This is only true while the network is small.  If the network were to gain any serious traction then few people would want to bog down their home internet connection and run their CPU a full speed around the clock.   We should not rely upon an assumption of ‘free’ resources when attempting to compare networks.   

## Delegated Proof of Stake

For the sake of comparison I am going to assume Nxt, Peercoin, and BitShares all have equal revenue from transaction fees that is sufficient to fund 101 unique, full time validators.

With delegated proof of stake the network can remain secure even if the currency was evenly distributed among 1 million users.   These million users would delegate to the top 101 which in theory could all have 100% approval and thus require someone to buy up 51% of the stake in order to take over the network.    

Only delegated proof of stake has the power to leverage the stake of millions of individual users to secure the network.  Nxt, Peercoin, and likely Ethereum all depend upon a wealthy elite with enough stake to profitably validate the network.  

## Profits Don’t Matter 
 
Some people will claim that profits don’t matter and that the costs are so low that people will validate at a loss.  All these networks need to do is find 102 volunteers who don’t care about profits to partake in the process.    Unfortunately, even if a small stakeholder with just .01% of the stake wanted to participate at a loss, they would be selected so infrequently that it wouldn’t even matter.  Those with larger stakes would be the only ones effectively participating in the consensus process and they could easily ignore the one block per month produced by the combined efforts of 1000 small volunteer shareholders operating at a loss.     

If you have 1 validator producing 99% of the blocks and 1000 validators producing the other 1% then have you really achieved decentralization?    What we really care about is the ratio of validators to blocks produced.   Under DPOS we have the ideal ratio, 101 validators each producing about 1% of the blocks.    Nxt and Peercoin systems are more likely to have 10% of the validators producing 90% of the blocks.   Under such a system you would require over 900 validators to equal  the same level of decentralization that BitShares can get with just 101.  In other words Nxt and Peercoin must charge 9x the transaction fees to maintain the same level of decentralization as BitShares assuming the 90/10 ratio in wealth distribution.  This has the side effect of causing the poorest validator to break even while the richest validator rakes in 900% margins.

## Conclusion 

Based upon the analysis in this post, it is clear that only Delegated Proof of Stake can be secure with an evenly distributed currency among a large user base at any scale.   It is also clear that the uneven wealth distribution that is natural in all economic systems forces traditional Proof of Stake systems to fund several times more validators just to keep the largest stake holders from producing more than 1% of the blocks. 

At the end of the day the numbers and economics do not lie.   BitShares with Delegated Proof of Stake is the most decentralized network by far.   

<hr/>
Update:  Research into [Nxt has shown they have about 250 unique forgers at any time](https://nxtforum.org/general/network-analysis/).  Unfortunately no information was available about the distribution of blocks among those 250 due to wealth disparities nor about the profitability of those forgers.   If the forgers are not profitable then it is not sustainable.   


