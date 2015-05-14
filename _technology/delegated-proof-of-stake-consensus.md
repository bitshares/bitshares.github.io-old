---
layout: technology
title: Delegated Proof-of-Stake Consensus
subtitle: A robust and flexible consensus protocol
priority: 7
summary: "
summary
"
---

(whitepaper coming soon)

Financial smart contracts require the strongest of guarantees ensuring their security and integrity.
The BitShares platform achieves these guarantees by executing all contracts on a public blockchain.
The blockchain implements a replicated deterministic state machine which at all times
unambiguously defines the current state of all contracts and the rules for their execution.
Contract ownership is secured using digital signatures and new inputs to the state machine
are disseminated using a peer-to-peer mesh network.

Replicas of the state machine are kept consistent using the Delegated Proof-of-Stake (DPOS) distributed consensus protocol.
Developed over the course of more than a year of research and development,
the DPOS protocol is at the center of the BitShares platform, and it provides the following benefits:

- Transparent and auditable contract execution
- Continuous platform uptime and availability
- High-speed contract execution
- Predictable fee schedules
- Contracts have access to a random number generator
- Stakeholders must approve all platform configuration changes
- Valid contracts cannot be censored
- Low platform infrastructure costs

## Overview

DPOS defines two special types of accounts which are responsible for maintaining consensus:

- **Delegates** are responsible for configuring special parameters of both the consensus protocol as well as contract execution
- **Witnesses** are responsible for choosing a canonical ordering of transactions by extending the blockchain

Delegates and witnesses are elected by the BitShares stakeholders. A BitShares stakeholder is anyone who owns
a unit of the BitShares core token--known as BTS.

one token is one vote

 Because stake is limited, attacking a proof of stake system would require buying up a large stake in the network at great expense. 

Each of these roles is filled by approval voting.
The number of Witnesses and Delegates is directly voted upon by the stakeholders.
Each stakeholder must vote for at least as many Witnesses and Delegates as they believe the system should have.
The number of witnesses/delegates is defined such that at least 50% of voting shareholders believe there is sufficient decentralization.

  Fixing the number of delegates is inflexible and unresponsive to the needs of the shareholders and could potentially create a security issue
  .  The number of delegates should be dynamic such that the lowest approved delegate has at least 75% of the approval of the most approved delegate
  .   Under BitShares the most approved delegate has over 16% while the least approved delegate has about 8%, this situation shows the lowest approved delegate has
  50% the approval of the most approved delegate.  Using the new rules BitShares would have 23 active delegates.

  The "long tail" of delegate approval opens the network up to a 51% attack with far less stake than the new proposed rule.

  There should probably be a minimum number of delegates (10?) regardless of approval.

Under DPOS 2.0 each account can nominate someone else to vote their stake on their behalf.
(TODO: can they rescind their nomination at any time? should add detail on how this works.)
    This creates a web of trust that ultimately puts most votes under the control of attentive accounts and dramatically increases the security of the network.

DPOS 2.0 takes the stance that it is optimally decentralized because each stakeholder has influence directly proportional to their stake and it is
flexible enough to accommodate as many delegates, workers, and witnesses as the stakeholders feel is appropriate and they are prepared to manage.

In many alternative proof of stake systems, small stakeholders are unable to exercise their influence because the
cost of participating exceeds the value of the influence gained for anyone without a large amount of stake.

## Delegates

The delegates configure special blockchain parameters such as the maximum block size and the block interval.
They also configure special contract execution parameters such as the contract fee schedule.
Making these parameters explicitly configurable ensures that the platform can remain robust and adaptable in the face of
changing market conditions.

All parameter reconfigurations must first be jointly approved by a quorum of delegates,
and then pass through a stakeholder review period. During the review period, stakeholders can elect
a new set of delegates if they disagree with the proposed changes. If, at the end of the review period, a quorum of delegates
still approves of the proposed changes, then they will take effect as the new rules of the platform.

Note that the duration of the proposal review period is itself a configurable parameter.

## Witnesses

The witnesses order new transactions by bundling them into blocks which extend the blockchain.

Their job is merely to include transactions and produce blocks and their pay is designed to be only enough to cover their time and materials cost.
A witness is paid a percentage of transaction fees as defined by the delegates and approved by the stakeholders.

A witness is simply a block producer and is paid a small percentage of transaction fees.

Without block producers the network cannot include the transactions necessary to reach consensus on the other roles such as delegates and workers.

round shuffling
NTP

  A dynamic block interval would change the security definition from the "longest chain" to highest delegate participation since last change in the block interval where delegate participation is measured as blocks produced / expected blocks.
  To protect the network from abuse limits on the allowable range of block intervals should be hard coded
  .  I propose **1 second to 30 seconds to be the range**
  .  Below 1 second there is not enough time for a block to propagate around the world which takes 300 ms just to ping half way around the world
  .   Well connected, highly optimized delegates could probably do 1 second blocks
  .   There is also diminishing returns.

The primary consideration when considering block interval is network propagation delay
.  Any delayed block will cause the following delegate to miss it
.   The network must be able to "stream" blocks at a fluid rate even at scale and therefore the "block interval" doesn't matter beyond the ability of delegates to sync their clocks
.    You could have a 1MB block every second or a 10MB block every 10 seconds, the resulting network activity would be about the same
.  With this knowledge in hand, **I believe a 5 second block interval should be the target**.

## Hard Forks
When the core developers are ready with a new hard-fork, the witnesses must first approve of the code and update their nodes to be able to handle the hard fork.
Witnesses should be selected based upon their commitment to never adopt new code that would apply new rules without first obtaining stakeholder approval.
Therefore, when a witness upgrades they do not control when or if a hard-fork happens, instead the stakeholders must first vote to approve the change.

It is not technically possible to enforce this rule; however, it is extremely likely that any group of witnesses that attempt to adopt a hard-fork that does not depend upon stakeholder approval will get voted out.

The only exception would be emergency fixes to address security issues or bugs that violate the documented / intended behavior of a prior release.

## Double Spend Attack

A double spend can occur anytime a blockchain reorganization excludes a transaction previously included.
This means that the witnesses had a communication break down caused by disruptions in the infrastructure of the Internet.
With DPOS the probability of a communication break down enabling a double spend attack is very low.

The network is able to monitor its own health and can immediately detect any loss in communication which shows up as witnesses failing to produce blocks on schedule.
When this occurs it may be necessary to wait until half of the witnesses have confirmed your transaction which could be a minute or two.

## Transactions as Proof of Stake
Every transaction must include 4 bytes from a recent block hash that uniquely identifies the assumed state of the blockchain at the time the transaction was signed
.  Transactions cannot be included in any chain that does not contain that block
.  This means that every single transaction contributes to irreversibly confirming the public record
.  Witnesses provide short-term ordering of transactions while every single user participates in confirming the long-term history.

## Random Number Generation
