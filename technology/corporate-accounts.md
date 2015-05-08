---
layout: default
title: Corporate Accounts - BitShares
---

# Corporate Accounts

Dynamic Hierarchical Threshold Multi-Signature Accounts

## Abstract.
Managing permissions on a block chain has historically been based upon either a single private key, or an explicit set of private keys through what is known as N-of-M multi-sig.  This paper introduces a new, more-flexible approach to managing blockchain permissions that is user-centric rather than key-centric.    Under this approach permissions are less fragile, easier to manage, and better reflect how people think about who has permission.

## Background
Bitcoin first introduced the concept of N-of-M multi-signature accounts.  Under this scheme, a user wishing to spend funds must produce a transaction signed by N keys belonging to a set of M keys.   The process of gathering these signatures occurs prior to broadcasting the transaction to the blockchain.  Under this system each key in theory represents a different person, but often it is used where one person is given two keys and another person is given one key.  One of the two keys is kept off line where it cannot be compromised by attackers, and the other two keys are used by each person to approve transactions.   In this nominal use case all of the funds are owned by one person and multi-signature permissions defined by the account holder are merely used to implement 2-factor authentication.

Early Ripple design proposals introduced the concept of Threshold Multi-Signature where each of the keys within the set of M keys is assigned a different weight and a threshold weight as defined by the account holder.  Once the combined weight of all signing keys crosses the threshold weight then permission to approve the transaction is granted.  Under this model it is possible to represent the voting rights over jointly owned funds without having to allocate multiple keys per person to simulate weights.   As far as I know this proposal was never adopted.

Bitcoin and other platforms have scriptable permissions.  Using scripts it is possible to represent permissions using arbitrary boolean logic over a set of keys.   In theory this allows these networks to represent any kind of permission structure.

The challenge with all existing permission models is that they are *static*.   The set of keys that is used to define the permission is fixed which means that if any party to the account has their key compromised and wishes to update it, all other parties must be asked to participate in updating the permissions. (TODO: so these new multi-sig accounts would allow our "clusters" to add and remove members without re-issuance of keys to all members Dan?)    This process can be very fragile and does not scale well.

## Dynamic Hierarchical Threshold Multi-Signature Accounts
We introduce a new approach to permissions based upon accounts which are assigned globally unique IDs.    Each account defines its permissions as a set of keys and/or other account IDs that are each assigned weights by the account holder.  If the combined weight of keys and/or accounts exceeds a defined threshold defined by the account then permission is granted.

Under this system it is possible to define an account that has no keys itself, but instead depends solely upon the approval of other accounts.   Those other accounts can in turn depend upon the approval of other accounts.  This process forms a *hierarchy* of accounts that must grant permission.   Each account can change its own permissions independently of any accounts above it in the hierarchy which is what makes the permissions *dynamic*.

With the proper hierarchy and weights it is possible to implement arbitrary boolean logic on the permissions granted to a certain account.

## Motivating Example

Imagine a company, ExampleCo, that has an account on the block chain.   This company wants to make sure that no single executive can embezzle funds and so it nominates 3 people, Alice, Bob, and Sam to have joint control over the funds.   Alice, Bob and Sam want to use 2 factor authentication through a provider of their choice.   This protects both executives and the company.

In the event that Alice believes her key may have been compromised she can change her key at any time without having to notify Bob and Sam.   If Bob’s 2-factor authentication provider wants to update their own keys, they can do so without having to notify either Bob or the company Bob works for.

If ExampleCo wants to transfer funds to SampleCo via escrow then a new account can be created that has ExampleCo, SampleCo, and EscrowCo as the approving authorities.    Each of these companies will likely have their own hierarchy of approval.

In reality a company probably wouldn’t define permissions based upon Alice, Bob, and Sam.  Instead a company would define positions such as CEO, CFO, and Secretary.  These positions could be assigned to Alice, Bob, and Sam only for the duration they are with the company.    If Alice leaves, then the ExampleCo only needs to update the CEO account to belong to the new CEO and all other permissions would remain in tact.

## Gathering Signatures
One of the challenges that has made Multi Signature approaches difficult to use in the past is the act of gathering the required signatures was entirely manual or required specialized infrastructure.  Once you sign a transaction there is no ability to retract your signature and the last party to sign gains a slight advantage over the other parties.   Gathering signatures gets even more complex the deeper the hierarchy.

To simplify this process a block chain should manage the signature gathering process by tracking the state of partially approved proposed transactions.   Under this process each account can add (or remove) their permission to a transaction atomically without having to rely upon an outside system to circulate the transaction.   This becomes especially critical for hierarchies that could become arbitrarily deep.

In order to keep things computationally bounded, an individual transaction will only traverse down two layers in a hierarchy.  If more than two layers of hierarchy are present then an account will have to propose (create one transaction) to approve a proposal (the other transaction).  When the first proposal (transaction) is approved, permission will be added to the second proposal (transaction).
(TODO: This part isn't very clear)
(TODO: Yes. I believe a diagram might help displaying two layers of hierarchy and how approval of first proposal percolates granted permission to second proposal.)
(TODO:  agree with SVK here. i would suggest revising how this is written and provide a simple diagram that includes 3 layers and 2 proposals so that it is clear which layers/accounts are exposed to and must approve of which transactions)

This process allows arbitrarily deep hierarchies to be formed without exposing the permission system to vulnerability of unbounded computation.

## Owner vs Active Permissions
Dividing account permissions into two different roles can help add security and facilitate offline storage of private keys.   Owner permissions allow the user to change the active permissions, whereas active permissions may not change the owner.

In addition to offline storage of owner keys, the owner role can be used by the Board of Directors of ExampleCo to retain control over the CEO, COO, and Secretary accounts in the event that the outgoing CEO refuses to hand over control to the new incoming CEO.

## Permission Cycles
In the event that two accounts configure their permissions to refer to each other, then neither account can do anything.   Cycles can either be formed directly or indirectly.  In general, a cycle can be detected in advance and warn users prior to submitting a transaction that would create a cycle.  In the unlikely event that a cycle is accidentally created the owner account can be used to break any cycles created by the active accounts.   Users should be very careful to avoid cycles in the owner permissions.

## Conclusion

Dynamic hierarchical threshold multi-signature permissions enables people and organizations to have a more natural way to express ownership and control policies.   This more natural approach will make the system easier to use and ultimately more secure than existing solutions.

