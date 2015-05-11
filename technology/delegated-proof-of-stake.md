---
layout: default
title: Delegated Proof-of-Stake - BitShares
---

# Delegated Proof-of-Stake (2.0)

## Abstract.
A consensus system is critical to the success of decentralized organizations. This paper introduces a new approach to Delegated Proof of Stake that extends the consensus process from block production to all system parameters while increasing the level of control individual stakeholders have.   This updated consensus system incorporates legal research presented in the SWARM Working Paper, “Distributed Networks and the Law”.

## Overview.

Distributed ledgers such as Bitcoin and BitShares are required to come to consensus about many things, including (but not limited to):

Who should produce the next block?
When the next block should be produced?
How big can the block be?
What transactions should be included in the block?
What fees should be charged on those transactions?
How much should the block producer be paid?
Who should be issued new tokens and under what conditions?
Should a new set of rules be adopted?
When should the new set of rules take effect?

Delegated Proof of Stake operates under the principle that all control should ultimately rest in the stakeholders.     This paper will discuss the general process for how these and other decisions can be made but will not discuss any particular implementation of the concept.

## DPOS 1.0 Review
Under DPOS 1.0 the stakeholders would select 101 delegates by approval voting.  These delegates would take turns producing blocks every 10 seconds. Each delegate would get to set their own pay rate as a percent of the maximum.  Decisions about which fees to charge and hard-forks to adopt rested in the hands of delegates which acted individually.

This system worked reasonably well but over time some serious issues became apparent. Some of these issues include:

Requiring stakeholders to select 101 delegates may be too much leading to most stakeholders voting for less than 101 or not carefully vetting the delegates they chose.
Forcing all “employees” to run servers to get paid significantly complicated the hiring of people without those skills.
There was no way to come to a consensus on what the fee structure should be.
With a total budget of $50,000 per month of new issuance, each individual delegate had a maximum budget of $500 per month which is not enough to get someone’s full time attention.   It was politically unpopular to give one individual multiple delegate positions for fear of centralization.
Delegates have too much control in a single position that opens them up to unnecessary legal liability.

## DPOS 2.0 Overview

Under DPOS 2.0 the roles of delegates have been divided into 3 categories:

Witness - produces blocks and is paid a percentage of transaction fees.
Worker - is paid a fixed number of tokens per day to perform a task
Delegate - co-signer on a dynamic multi-sig account with permissions to change blockchain parameters.

Each of these roles is filled by approval voting.  The number of Witnesses and Delegates is directly voted upon by the stakeholders.    Each stakeholder must vote for at least as many Witnesses and Delegates as they believe the system should have.   The number of witnesses/delegates is defined such that at least 50% of voting shareholders believe there is sufficient decentralization.  The number of workers is determined by how many workers the available daily budget will cover when paid out to workers from most approved to least approved.

## Delegates

The delegates have multi-sig control over a special account dubbed the “genesis account”.  This multi-sig account can do anything any other account can do with a 2 week delay.  If enough (TODO: what does this mean here?) delegates are voted out within two weeks of jointly approving a transaction then the transaction will fail to go through.

The “genesis account” has the unique privilege of changing critical parameters such as: Block Interval, Block Size, Witness Pay Rate, Burn Rate, and even the review period for their own transactions.

Delegates are not paid positions and are therefore honorary and held by individuals who have a vested interest negotiating changes to the network parameters.

Legally the delegates have no direct power other than to propose changes for the stakeholders to reject.   This means delegate positions are safe from regulation and power truly rests in the hands of the stakeholders.

Unlike DPOS 1.0 where each delegate operates independently, under DPOS 2.0 delegates are forced to reach consensus (TODO: may make sense to clarify exactly how they must go about reaching consensus... especially when using the word "forced", readers will likely want to know how this must be done.) directly before any change can be proposed.

## Witnesses

A witness is paid a percentage of transaction fees as defined by the delegates and approved by the stakeholders.   Their job is merely to include transactions and produce blocks and their pay is designed to be only enough to cover their time and materials cost.   The witness role is designed to be politically neutral with no power over fees or policy.   In effect they represent a group of notaries that are merely reporting what transactions they saw and in what order.

It is critical that the block producers are as separated as possible from any potentially regulated activity.   Without block producers the network cannot include the transactions necessary to reach consensus on the other roles such as delegates and workers.

It is critical that the block producers are not paid via dilution and ultimately have no control so they can easily operate without any licensing.  The regulatory frameworks have indicated that “miners” may fall under some regulations (TODO: this is the first time any mention of mining has been brought up in this paper. you should provide more context as to what mining (BTC) entails and how it compares to the action that witnesses perform.).  It is also for this reason that witnesses do not have any power over their own pay or other parameters lest they get classified (TODO: by regulators?) as administrators which is a potentially regulated position.

## Workers
A worker is an elected position that gets paid via dilution to fund new blockchain infrastructure.  Their employment “smart contract” specifies a start date, an end date, a daily pay rate, and a vesting period. (TODO: i would expand on this. how much do they get paid (% wise) each day vs. how much vests. if collecting early, what's the penalty. etc.)   They get paid each day between the start and end date that a worker is voted high enough in the approval queue to get funding.  Their pay vests linearly from the time they receive it until the end of the vesting period.

Each worker can receive positive and negative approval.    This means that to get funded a worker must have a lot of positive support and minimal negative approval.  It also means that they can get fired very quickly by having a vote switch from being for to being against.

## Delegated Voting

Voter apathy or laziness can be a significant vulnerability in a system that depends upon attentive voters to police delegates, workers, and witnesses.   Most people do not have the time to review the performance of more than a handful of people and even if they had the time they wouldn’t necessarily have the skills to evaluate it.

Under DPOS 2.0 each account can nominate someone else to vote their stake on their behalf. (TODO: can they rescind their nomination at any time? should add detail on how this works.)  This creates a web of trust that ultimately puts most votes under the control of attentive accounts and dramatically increases the security of the network.

## Maintenance Blocks
When producing blocks at speeds as fast as 1 block per second, the maximum time available to perform computationally intensive tasks is very small.  From time to time there are expensive operations that may take a few seconds or a few minutes to perform that cannot be efficiently or practically amortized over many blocks.   To accommodate periodic execution of more expensive operations, DPOS 2.0 introduces a Maintenance Block that has a longer interval between when it is produce and when the previous block was produced.

An example of an expensive operation would be tallying the votes of all stakeholders.  For this reason, DPOS 2.0 only updates vote tallies on maintenance blocks and recommends one maintenance block per day.   Under DPOS 1.0, the real-time calculation and updating of votes accounted for a significant computational load on every individual transaction.   Under DPOS 2.0, all modifications to balances are coalesced into one vote update per day which is significantly more efficient and less error prone.

Other tasks that can be performed on a Maintenance Block would be the updating and refreshing of database indexes, calculating new blockchain parameters, sanity checking of the total supply, etc.   The exact uses depend upon what kind of operations a blockchain is designed to support.

## Decentralization
DPOS 2.0 takes the stance that it is optimally decentralized because each stakeholder has influence directly proportional to their stake and it is flexible enough to accommodate as many delegates, workers, and witnesses as the stakeholders feel is appropriate and they are prepared to manage.

In many alternative proof of stake systems, small stakeholders are unable to exercise their influence because the cost of participating exceeds the value of the influence gained for anyone without a large amount of stake.

DPOS 2.0 addresses criticism that DPOS was too centralized with its 101 delegates because now there is no limit to the number of delegates.   In addition to decentralizing the number of delegates, we have also separated powers which provides an additional type of decentralization not found elsewhere.

## Hard Forks
When the core developers are ready with a new hard-fork, the witnesses must first approve of the code and update their nodes to be able to handle the hard fork.  Witnesses should be selected based upon their commitment to never adopt new code that would apply new rules without first obtaining stakeholder approval.   Therefore, when a witness upgrades they do not control when or if a hard-fork happens, instead the stakeholders must first vote to approve the change.

It is not technically possible to enforce this rule; however, it is extremely likely that any group of witnesses that attempt to adopt a hard-fork that does not depend upon stakeholder approval will get voted out.

The only exception would be emergency fixes to address security issues or bugs that violate the documented / intended behavior of a prior release.

## Conclusion
DPOS 2.0 takes stakeholder governance to a new level and provides a consensus protocol that has the ability to adapt to changing market conditions and technologies while minimizing the scope of political infighting.

# from elsewhere

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

