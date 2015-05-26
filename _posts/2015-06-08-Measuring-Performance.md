---
title: Measuring Performance
---

Great claims require great evidence and the claim that BitShares is capable of 100,000 transactions per second has
probably raised a few eyebrows.   This post should help clarify how we measure the performance.  It should be noted
that we are talking about the capability of an individual computer which is the ultimate bottleneck and *not* the 
current P2P network.  

When designing a system to scale it is critical to understand where the real bottlenecks are and to design around
maximizing the performance of that bottleneck.  We have identified Single-Threaded processing power as the bottleneck. 
Blockchains are inherently sequential because every transaction has the potential to change the global state in a
way that might invalidate the next transaction.   This property is especially true of market transactions that interact 
with the global order book.   

When measuring performance we make the assumption that the network is capable of streaming all of the transaction data
and that disks are capable of recording this stream.   We make the assumption that signature verification has been done
in parallel using as many computers as necessary to minimize the latency.  All of these steps have been designed to be
embarrassingly parallel and to be independent of blockchain state.

What remains is how quickly a block containing 100,000 transactions can be applied to the blockchain state consisting of
millions of accounts while validating all state-dependent pre-conditions.  This is the work that must be performed by 
*witnesses* in a timely manner so they can keep up with blocks in real time.  There is no trivial means of accelerating
this task and introducing multiple threads will result in synchronization points and other overhead that experience has
taught us ultimately slows down throughput.  

## The Benchmark

We setup a benchmark that allocates 1 million accounts each of which has an equal balance.  We then constructed a block
that contains 100,000 random transfers among the accounts and timed how long it took to apply the block to the global
state.  We performed this test 10 times and took the median time.





