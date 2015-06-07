---
layout: post
title:  "How to Measure the Decentralization of Bitcoin"
author: "Daniel Larimer"
categories: article 
---

The crypto currency community is full of people making wild claims about the relative centralization of various projects.   Calling something centralized is like calling someone racist; it starts to lose all meaning unless you are extremely careful in how you define it.  Decentralization has become a kind of religion, when in reality it is merely a tactic to deal with certain kinds of corruption and attacks.   Today I would like to document how I measure decentralization of various crypto projects. 
<!--more-->

## Decentralization is Relative 

A simple metric of decentralization would use a linear scale.  The more nodes you have on a network the more decentralized a network becomes.    While technically true, the marginal utility of each additional node decreases.  For all practical purposes a network with 1 million nodes is just as decentralized as a network with 1 billion nodes.   If we are going to measure decentralization then it should be done on a logarithmic scale.   A logarithmic scale is a nonlinear scale used when there is a large range of quantities.  

Under a logarithmic scale a network with 1 node is maximally centralized.  To get to the next meaningful level of decentralization you have to double the number of nodes to 2.  Each additional level of decentralization requires another doubling.   A network with 128 nodes would be at level 7, where as a network with 1024 nodes would be level 10.    [A network with about 6000 to 7000 full nodes, such as Bitcoin](https://getaddr.bitnodes.io/), would be about 12.5 on the decentralization scale if you only count full nodes.    

We can assume that all crypto currency networks will end up with a similar number of full nodes, what matters is the number of block producing nodes.  

## Numbers are not Everything, Distribution Matters 

Lets take an example from outside the crypto currency space.  If you have a planet with 6 billion people you could claim that it is extremely decentralized based upon a count of the number of people (nodes).   However, if all of those individual people live in a single city then a single atomic bomb or volcano could take them all out at once.   To protect the human race it is best if the 6 billion people are evenly dispersed across the entire world.   

Now lets apply this rule to crypto-currency block production.  Block producers control the fate of the network in the short term.  They have the power to create alternative chains and to filter transactions.   The entire user base of a crypto currency depends upon block producers to reach consensus and include transactions in a timely matter.

In this case it isn’t enough to have 1000 people participating if 1 person is producing 51% of the blocks.  All that matters is how many people it takes to reach 51% production and to some extent what is the largest percentage of block production held by a single individual.  

## What if Bitcoin were Proof of Stake 
Debates about Proof of Stake (POS) often get side tracked based upon artifacts of the startup scale of certain coins.   For a more realistic approach we should assume a distribution similar to a large scale currency such as Bitcoin.

If we look at the Bitcoin wealth distribution as an example, you will find that the top 1% of BTC holders own around 78% of all BTC.   Based upon estimates of the number of users this means less than 2800 people control 78% of the stake.   The wealth distribution of these 2800 people is not even.  Just 47 individuals control 28.9% of bitcoin, another 880 individuals control 21.5% for a total of 51% of Bitcoin controlled by about 1028 individuals.

<img src="/images/bitcoindistribution.png"/>

If these top 1000 individuals were participating on a Proof of Stake system and all had the same stake, then we could give the network a decentralization ranking of 10.  However, if you were to take a moving average of the number of unique people participating in a moving window of 1000 blocks, then 47 individuals would count for 57% of the block production leaving 43% of the block production to a subset of 880 individuals.   This means that in any given window of 1000 blocks, less than 475 individuals would be participating.   This gives us a decentralization ranking of 9.   What is worse, is that only 10% of the participants matter because they collectively account for more than 51% of every 1000 blocks which gives us a decentralization rating of just 6.

## Decentralization of Delegated Proof of Stake 

Now lets assume Bitcoin were to use Delegated Proof of Stake (DPOS).

Under the DPOS system, all users can contribute to the selection of 101 delegates.  This means that even if 47 people owned 28.9% of the stake, they would not have unilateral control over the selection of 101 delegates.   It would require the combined approval of the top 1000 stake holders to have complete control over the delegate selection.  This gives us a decentralization measurement of 10 if you consider the influence of stakeholders prior to delegation.   After delegation, trust is concentrated down to just 101 delegates each of which is producing less than 1% of all blocks in a moving window of 101 blocks.   This would yield a decentralization level of 7.  In theory 51 delegates could collude giving it a decentralization level of 6; however, the trust model is different in that since the delegates are not "self selected" they can be removed and thus it is unlikely to see 51% collusion.  

## Decentralization of Bitcoin 
 
Now lets look at Bitcoin hash power.  9 organizations control 75% of the hashing power yielding a decentralization level of 3. Only 4 of these organizations are required to perform a 51% attack giving an effective ranking of 2.  Bitcoin uses what I call Delegated Proof of Waste when you consider mining pools.  This is kind of similar to how Delegated Proof of Stake requires 1000 stake holders pre-delegation, but a mere 101 people are responsible post-delegation.   In the case of Bitcoin people often like to point out that there are 1000’s of miners and they can switch pools at any time.   If we want to compare apples to apples then we must consider that the free market has evolved to support just 10 pools due to the advantages of centralization.   Regardless of how many miners you have, the market has spoken and you will never see 101 pools each with 1% of the hashing power.   The pool owners may change, but their number will not change by much.
<img  src="/images/hashdistribution.png"/>

## Conclusion 

We can conclude from the above analysis that Bitcoin with a decentralization measure of 2 is three times as centralized as traditional proof of stake (Nxt, Peercoin) which have a decentralization level of 6.  The winner is BitShares with Delegated Proof of Stake which has a decentralization measure of at least 6, and arguably 7.  This is 16% more decentralized than other Proof of Stake systems given the same distribution of stake.  

If you are interested in an economic analysis of decentralization you may want to check out my articles [Nothing at Stake]({% post_url en/2015-01-08-Nothing-at-Stake-Nothing-to-Fear %}) and [The most Decentralized Proof of Stake system]({% post_url en/2015-01-07-The-Most-Decentralized-Proof-of-Stake-System %}).





   


