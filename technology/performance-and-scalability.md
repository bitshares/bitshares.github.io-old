---
layout: default
title: Performance and Scalability - BitShares
---

# Performance and Scalability

Smart Chains - Scalable Blockchain Technology

## Abstract.
High performance blockchain technology is necessary for crypto-currencies and smart contract platforms to provide a viable alternative to existing financial platforms on a global scale.  This paper presents an approach that can potentially achieve millions of transactions per second using commodity hardware.  This is a level that can meet the needs of current payment networks like VISA.

## Background

A blockchain is a global ledger that orders transactions that deterministically modify a shared global state.   The order in which transactions are processed can change the validity of other transactions.   For example, you cannot withdraw money from your bank account until after your paycheck deposit has cleared.  It becomes impossible to know whether or not a transaction is valid until after all prior transactions that impact a particular account have been processed.

In theory transactions for two unrelated accounts could be processed at the same time provided they do not share any common dependency.  In practice, the cost of identifying which transactions are truly independent of each other on a ledger empowered by smart contracts with arbitrary conditions is intractable.   The only way to be sure that two transactions are truly independent is by maintaining completely separate ledgers and then periodically transferring value between them.   An analogy could be made to the performance trade offs in the design of Non-Uniform Memory Access (NUMA) vs Uniform Memory Access.

In practice Uniform Memory Access is much easier for developers to design for and has lower costs.  NUMA architectures are usually adopted as a last resort when building supercomputers or giant clusters.

The computer industry has grown to realize that scaling performance through parallelism is nowhere near as easy as the early days when all that was necessary was to increase the clock speed of the CPU.   It is for this reason that CPU designers pushed the single-threaded performance to the limits before attempting to  adopt a multi-threaded approach to increase performance.  When multi-threading is not enough then, and only then, is cluster computing considered an option.

Many in the crypto-currency industry have attempted to solve the scalability issue by immediately moving to a “cluster” solution without fully exploring what is technologically possible on a single core of a single computer.

## LMAX Disruptor
The LMAX Disruptor provides a case study on what is possible to achieve in a single thread. LMAX is a retail trading platform that aims to be the fastest exchange in the world.  They have been generous enough to share what they have learned publicly.

Here is a brief overview of their architecture:



The Business Logic Processor is where all of the sequential transactions and order matching is processed.  It is a single thread that is able to process millions of orders per second.  This architecture is readily ported to the realm of crypto-currencies and blockchain designs.

The role of the Input Disruptor is to gather orders from users from many different sources and assign them a deterministic order.  After assigning them an order they are replicated, logged, and broadcast to many redundant business logic processors.   The tasks of the Input Disruptor are embarrassingly parallel and easily farmed out to a cluster of computers.

After the Business Logic Processor has processed the inputs, an Output Disruptor takes care of notifying anyone who cares about the results.  This is also an embarrassingly parallel task.

Ultimately LMAX was able to process 6 million transactions per second through the Business Logic Processor using a single core of a commodity CPU using the Java virtual machine.   If LMAX can achieve 6 million transactions per second, then certainly there is no need for crypto-currency and smart-contract platforms to reach for clustered solutions when they are not even processing 10 transactions per second.

## High Performance Blockchains

To build a high performance blockchain requires that we adopt the same techniques used by LMAX.   There are several key ingredients that must be met:

Keep Everything in Memory
Avoid Synchronization Primitives (locks, atomic operations)
Minimize Unnecessary Computation in the Business Logic Processor

Memory is becoming cheaper every day because it is embarrassingly parallel in its design.   The amount of information that is required to track the account balance and permissions of every person on the Internet less than 1 Terabyte of RAM which can be purchased for less than $15,000 and installed on commodity (high-end) server motherboards.   Long before 3 billion people adopt the system this kind of hardware will be in the average desktop.

The real bottleneck is not the memory requirements, but the bandwidth requirements.  At 1 million transactions per second and 256 bytes per transaction the network would require 256 megabytes per second (1 Gbit/sec).  This kind of bandwidth is not widely available to the average desktop; however, this level of bandwidth is a fraction of the 100 Gbit/s that Internet 2 (TODO: what is "internet 2"?) furnishes to more than 210 U.S. educational institutions, 70 corporations and 45 non-profit and government agencies.

In other words, blockchain technology can easily keep everything in RAM and scale to handle millions of transactions per second if it is designed properly.

## Avoid Hashes, Assign IDs Instead

In a single threaded system CPU cycles are a scarce resource that need to be conserved.  Traditional blockchain designs use cryptographic hashes to generate globally unique IDs that are statistically guaranteed to never have a collision.     The problem with these hashes is that they require significantly more memory and more CPU cycles to manipulate.   It takes significantly more CPU time to lookup an account record by hash compared with a direct array index.  For example, 64 bit integers are easier to compare and manipulate than 160+bit IDs. Larger hash IDs means there is less room in the CPU cache and that more memory is required.   On modern operating systems infrequently accessed RAM is compressed, but hash identifiers are random data that is not compressible.

Fortunately blockchains give us a means to globally assign unique IDs that do not conflict with one another and thus it is possible to completely remove the need to use hash-based identifiers (Bitcoin addresses) to refer to an account, balance, or permission.

## Remove Signature Verification from Business Logic Processor

All transactions on crypto-currency networks depend upon cryptographic signatures to validate permissions.  In the general case, the permissions required can change as a result of other transactions.  This means that permissions need to be defined in terms that require no cryptographic calculations within the Business Logic Processor.

To do this every public key needs to be assigned a unique and immutable ID.  After an ID has been assigned the Input Disruptor(s) can verify that the signature provided matches the ID specified.   By the time the transaction makes it to the Business Logic Processor all that is necessary is to check the IDs.

This same technique can be used to remove pre-condition checking on any immutable object with a static ID.

## Design Transactions for Static Validation

There are many properties to transactions that can be checked statically, without the need to reference the current global state.  These checks include range checking of parameters, de-duplication of inputs, sort order of arrays, etc.  Generally speaking there are many checks which can be performed if the transaction includes the data it “assumes” about the global state.    After these checks are performed all that is necessary for the Business Logic Processor to do is make sure the “assumptions” are still true which can usually be boiled down to checking a modification timestamp on objects referenced relative to the time the transaction was signed.

## Smart Contracts

Many blockchains are adopting a general purpose scripting language to define all operations. These designs end up defining the “Business Logic Processor” as a virtual machine and all transactions are defined as scripts to be run by the virtual machine.   This approach takes the single-threaded limitations of a real CPU and compounds them by forcing everything through a virtual CPU.    A virtual CPU, even with Just-In-Time compilation, will always be slower than a real CPU, but pure speed of calculation isn’t the only issue with the “everything is a script” approach.

When transactions are defined at such a low level it means that most of the static checks and cryptographic operations get sucked back into the Business Logic Processing and the overall throughput falls.    A scripting engine should never require a cryptographic signature check to be performed even if it is done through a native call.

Based upon the lessons we learn from LMAX we know that a virtual machine for a blockchain should be designed with single-threaded performance in mind.  This means it should be optimized for Just-In-Time compilation from the beginning and that the most frequently used smart contracts should be supported natively by the blockchain leaving only the rarely used custom contracts to run in a virtual machine.  These custom contracts should be designed around performance which means the Virtual Machine should limit the addressable memory to something that will fit within the CPU cache.

## Conclusion

Designing high-performance blockchains isn’t rocket-science and doesn’t require complex, hard-to-understand protocols nor does it require dividing the processing among all the nodes on the network.  Instead all that is necessary to build a high-performance blockchain is to remove all calculations that are not part of the critical, order-dependent, evaluation from the core business logic and to design a protocol that facilitates these kinds of optimizations.

# from elsewhere

## Object Graph Database

A unified database structure based around an in-memory object graph can provide fast, constant-time lookups of the data needed to process transactions.  This structure also lends itself to easy snapshots and restoring of database state.    This state should be significantly smaller than the complete transaction history of all objects.

Everything in the graph database is an object that is allocated a sequential ID by the consensus process.  Anyone can create a object that contains arbitrary data and every object has a owner who is the only person able to change the data.  This owner can be transferred to someone else.  The core protocol does not need to support specifying the data, it must only support allocating and transferring ownership of IDs.   Higher level interpretations of custom data operations can then utilize the IDs allocated by the protocol.

** Fees **

Every single operation must specify and pay its fees.  All fees are set by the delegates which publish a fee schedule with a different fee for each operation type.  Once per day the fees adjust to the median of the delegate schedules.  A fee may be paid in any asset provided there is BTS in the fee pool for that asset and the issuer has published a price for extracting fees from the pool.   Anyone may contribute BTS to the fee pool for an asset.   In the case of BitAssets the fee pool can go negative and the network automatically sells the BitAssets accumulated when someone places an order to buy the BitAsset for BTS.

** Should Objects have the ability to be listed for sale "on the blockchain"?  **

Given that objects are transferrable, they could be sold "off chain".  All that would be necessary is for someone to construct a transaction with two operations: 1 transfer payment, and 1 transfer object and then have both parties "sign" the transaction.  This would be atomic and keep features "off chain". On the other hand, this requires both parties to be online and available to sign the transaction at about the same time.  The cost of implementing it "on chain" is to add an optional "sale price" to an object and a single operation that will buy it.

## Maintenance Blocks
When producing blocks at speeds as fast as 1 block per second, the maximum time available to perform computationally intensive tasks is very small.
From time to time there are expensive operations that may take a few seconds or a few minutes to perform that cannot be efficiently or practically amortized over many blocks.
To accommodate periodic execution of more expensive operations, DPOS 2.0 introduces a Maintenance Block that has a longer interval between when it is produce and when the previous block was produced.

An example of an expensive operation would be tallying the votes of all stakeholders.
For this reason, DPOS 2.0 only updates vote tallies on maintenance blocks and recommends one maintenance block per day.
Under DPOS 1.0, the real-time calculation and updating of votes accounted for a significant computational load on every individual transaction.
Under DPOS 2.0, all modifications to balances are coalesced into one vote update per day which is significantly more efficient and less error prone.

Other tasks that can be performed on a Maintenance Block would be the updating and refreshing of database indexes, calculating new blockchain parameters, sanity checking of the total supply, etc.
The exact uses depend upon what kind of operations a blockchain is designed to support.

