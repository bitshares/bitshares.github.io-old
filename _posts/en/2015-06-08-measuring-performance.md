---
title: Measuring Performance - Throughput and Latency
---

--------

Great claims require great evidence and the claim that BitShares is capable of 100,000 transactions per second has
probably raised a few eyebrows.   This post should help clarify how we measure performance.  It should be noted
that we are talking about the capability of an individual computer which is the ultimate bottleneck and *not* the 
current P2P network.  

When designing a system to scale it is critical to understand where the real bottlenecks are and to design around
maximizing the performance of those bottlenecks.  We have identified Single-Threaded processing power as the bottleneck. 
Blockchains are inherently sequential because every transaction has the potential to change the global state in a
way that might invalidate the next transaction.   This property is especially true of market transactions that interact 
with the global order book.   

When measuring performance we make the assumption that the network is capable of streaming all of the transaction data
and that disks are capable of recording this stream.   We make the assumption that signature verification has been done
in parallel using as many computers as necessary to minimize the latency.  All of these steps have been designed to be
embarrassingly parallel and to be independent of blockchain state.

The average size of a transaction is just 105 bytes which equates to about 10 Megabytes per second to stream 100,000
transactions per second.  This is well within the capacity of most data centers and therefore not considered part of
the bottleneck.

What remains is how quickly 100,000 transactions can be applied to the blockchain state consisting of
millions of accounts while validating all state-dependent pre-conditions.  This is the work that must be performed by 
*witnesses* in a timely manner so they can keep up with blocks in real time.  There is no trivial means of accelerating
this task and introducing multiple threads will result in synchronization points and other overhead that experience has
taught us ultimately slows down throughput.  

While people think in terms of transactions, BitShares thinks in terms of operations.  A transfer is a single operation
that transfers funds from one account to another.  Other operations include: create account, create limit order, issue asset,
create asset, etc.  A transaction consists of one or more operations that must execute together or not all.  Every operation
is able to stand alone in a transaction.   Therefore, for the purposes of our benchmarks we assume all transactions
contain exactly one operation and that measuring operations per second is equivalent to measuring transactions per second.

## The Benchmark

We setup a test blockchain where we created 200,000 accounts and then made 2 transfers and 1 asset issuance to each
account.  This is involved a total of 1 million operations.  After creating the blockchain we timed how long it took
to "reindex" or "replay" without signature verification.  On a two year old 3.4 Ghz Intel i5 CPU this could be performed at over
180,000 operations per second.  On newer hardware single threaded performance is 25% faster.  

Based upon these numbers we have concluded that claiming 100,000 transactions per second is well within the capability of the
software.

## Real-Time Performance

While we are convinced that the architecture is capable of 100,000 transactions per second, real world usage is unlikely
to require anywhere near that performance for quite some time.   Even the [NASDAQ only processes 35,000 messages (aka operations)
per second](http://www.nasdaq.com/services/homw.stm) and has only been tested to 60,000 TPS with eventual plans to upgrade to 100,000. 

We set up a benchmark to test real-time performance and found that we could easily process over 2000 transactions per second
with signature verification on a single machine.   On release, the transaction throughput will be artificially limited to just
1000 transactions-per-second.

## Unoptimized 

While we have spent a lot of time discussing the performance of the blockchain, very little has been done to optimize the
software at this point in time.  We believe that with the proper optimizations that performance could easily be doubled or tripled.

## Latency vs Throughput

The NASDAQ claims that orders are acknowledged in 1 ms and then executed in just 1 ms.  This claim has the built in assumption
that the machines doing the trading are on fiber optic connections to the exchange and located within 50 miles.  This is
due to the fact that light can only travel 186 miles in a millisecond in space and half of that speed on a fiber optic cable. The
time it takes for an order to travel 50 miles and back is a full millisecond even if the NASDAQ had no overhead of its own.  

If a user in China were to do trading on the NASDAQ then they would expect that order acknowledgement would be at least 0.3 seconds.  

If BitShares were configured with 1 second block intervals, then on average orders are acknowledged and/or executed within 0.5 seconds. 
In other words, the performance of BitShares is on par with a centralized exchange processing orders submitted from around the world. This
is the best that can be achieved with a decentralized exchange because it puts everyone on equal footing regardless of their geographical
location.     In theory, traders could locate their machines within 50 miles of the elected block producers and trade with millisecond
confirmations.   Unfortunately, block producers are randomly selected from locations all around the world which means that at least some
of the time a trader would have higher latency.   




