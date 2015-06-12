---
title: Intro to Delegated Proof of Stake
author: bitshares
layout: post
permalink: /intro-to-delegated-proof-of-stake/
slide_template:
  - default
pexeto_video:
  - 
categories:
  - General
---
<h6 style="text-align: left;">
  [Contributed by merockstar, June 25, 2014]
</h6>

<p style="text-align: left;">
  Gavin Andresen in an interview with Russ Roberts:
</p>

<p style="text-align: left;">
</p>

<p style="text-align: left;">
  Delegated Proof of Stake is a new method of securing a crypto-currency&#8217;s network that attempts to solve some of the problems of Bitcoin&#8217;s traditional Proof of Work system, and the Proof of Stake systems implemented by Peercoin and NXT, by implementing a layer of technological democracy to offset the negative effects of centralization.
</p>

* * *

<span style="color: #000000;">At the heart of the creation of DPOS is the subject of centralization. With Proof of Work, centralization just kind of crept it&#8217;s way in over time along with the advent of computers designed specifically for mining called ASICs. The production of specialized computers for this purpose is limited to a segment of the population with the resources to design and produce computer parts. The tremendous amount of hash power that could be produced by these machines dwarfed the GPU and FPGA mining rigs that had been previously securing the network, and the end result was that a small number of miners, who already had an economic advantage, ended up securing most of the network. If they were to collaborate into mining pools, this gives these mining pools the ability to combine resources and gain over fifty one percent of the network hash rate. Having that much of the hashrate gives these mining pools the ability to falsify a blockchain if they wanted to, meaning the greater community has to trust that they won&#8217;t do that.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">Centralization seems to be an inevitability in cryptocurrency. Even with Proof of Stake the cost of accumulating enough network resources to falsify the blockchain long enough to create a double spend is much higher, but not out of the realm of possibility. Instead of making blocks more computationally difficult to produce, proof of stake weighs the amount of coin being held by each individual in the network, and chooses who will sign blocks by who has the most to lose from the network being compromised.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">Delegated proof of stake doesn&#8217;t deny the fact that centralization is an inevitability, but instead mitigates the potential negative impacts of this by spreading out the job of signing blocks to 101 delegates who are voted on by everybody using the network with every transaction that gets made. This makes this inevitable bit of centralization more democratic in nature with a decentralized voting process. Instead of trying to reduce the need for trust all together, DPOS has safeguards in place that ensure that those trusted with signing blocks on behalf of the network are doing their job correctly. Additionally, each block that gets signed must have verification that the block before it got signed by a trusted node. This eliminates the need in other types of blockchains to have to wait until a certain number of untrusted nodes have verified it for confirmation.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">This reduced need for confirmation produces an increase in speed of transaction times, and this new system of intentionally placing trust with the most trustworthy of potential block signers, as decided by the network, has the added benefit that no artificial encumbrance need be imposed to slow down the block signing process. This allows for many more transactions to be included in a block than in traditional proof of work and proof of stake systems. This brings cryptocurrency to a level where it can compete with the centralized clearinghouses like Visa and Mastercard who administer the currently most popular forms of electronic payment systems in the world.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">Under DPOS each of the trusted delegates running nodes receive a certain amount of pay. Depending on the needs of the DAC, and the needs of the delegate, the amount received can be flexible. It can come from a certain percentage of transaction fees from each block that the delegate signs, or, if more funds are required, could also come from block rewards. At the delegate&#8217;s discretion this pay can be compensation, or can be used to further the DAC by means of marketing, development, or whatever else might be required. How much of these funds are drawn, and what they are spent on, can be used as campaign points for getting/staying elected.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">The compensatory part of this pay has the effect of making the job sought after, and incentivises elected delegates to keep the job by showing the rest of the network that they are doing it properly, using the standard software. To be able to disrupt the network in any way you would first have to secure the position of delegate by being elected by the network, then, once you&#8217;re in, the potential for profit from doing this job correctly outweighs the potential to profit from attempting to disrupt the network in anyway.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">If somebody were to attempt to do something harmful to the network, signing a bad block, failing to produce a block in a timely manner, or not including all the valid transactions that had been broadcast more than a minute before receiving the block, then the software automatically causes all the running clients to start voting against that delegate until they are forced out of the position. The system can automatically fire any delegate if somebody were to produce proof that the delegate either signed multiple blocks at the same time, or declared a transaction to be included in the chain when it actually wasn&#8217;t. In the event that something else of a major nature were to occur, individual clients also have the ability to go in and vote manually against any given delegate for a fee.</span><br style="color: #000000;" /><br style="color: #000000;" />

<span style="color: #000000;">In a delegated proof of stake system centralization still occurs, but it is controlled. Unlike with other methods of securing a cryptocurrency network, every client in a DPOS system gets the ability to decide who is trusted with this centralization instead of this trust naturally finding it&#8217;s way to those with the most resources. This allows the network to reap some of the major advantages of centralization, while still maintaining a decentralized nature to a certain calculated extent, enforced by a fair election process where anyone could potentially become a delegated representative of the majority of users.</span>