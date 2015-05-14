---
layout: technology
title: Corporate Accounts
subtitle: Fully customizable account permission management
priority: 3
summary: "
A user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain technologies.
This means that a company account can require approval of its board of directors and each board member may in turn
require 2 factor authentication.
The result is a new concept which we call hierarchical threshold multi-sig.
With corporate accounts board members can change their personal keys without having to change the
permissions associated with the company.
Permissions can be nested arbitrarily deep with funds being jointly managed by several companies each of which is
managed by their own board each member of which utilizes 2 factor authentication while all accounts have a cold-storage backup key.
Managing permissions on a block chain has historically been based upon either a single private key, or an explicit set of private keys through what is known as N-of-M multi-sig.  This paper introduces a new, more-flexible approach to managing blockchain permissions that is user-centric rather than key-centric.    Under this approach permissions are less fragile, easier to manage, and better reflect how people think about who has permission.
"
---

## Dynamic Hierarchical Threshold Multi-Signature Accounts

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

# imported from blog post

Multi Signature accounts are essential to secure every day transactions without fear of losing your account.  Traditional approaches to Multi Signature balances as used by Bitcoin are fragile and hard to use.  This page documents an approach to Multi Signature accounts that is far more robust, flexible, and easy to use.  For reference we should carefully consider what Ripple has proposed here: [Ripple Multi-Sign](https://wiki.ripple.com/Multisign)

The fundamental flaw with Bitcoin style multi-signature authority is that the permissions are specified in terms of keys.  Keys are rigid and fail to capture the true intent of multi signature transactions:  approval of multiple unique parties.

For the purpose of describing the motivating principle behind multi-signature accounts I will use the example of a company run by 3 individuals, Alice, Bob, and Carol.   This company requires 2 of the 3 principles to approve all expenses.   You could define the company in terms of keys assigned to Alice, Bob, and Carol, but what if Alice wants to protect her own identity with a multi-signature check?   Alice opts to use a service provider that performs 2-factor authentication on every action Alice makes.   This protects both Alice and the company.

In Bitcoin a multi-signature transaction must be signed by all parties prior to being broadcast.  Aside from the complex coordination problem this presents, the parties have no way to remove a signature after they have signed but before it reaches consensus.  Unless a complex signing protocol is used the last party to sign has a transaction that they can choose to broadcast or not which leaves the other parties hanging.

# Solutions

The first solution to this problem is to define all multi-sig definitions as N of M accounts rather than N of M keys.  This allows each account to define their own security and to change their keys if they are potentially compromised without having to change every single multi-sig account.

The second solution is to include the partially signed transaction in the consensus state and allow accounts to publish transactions that add or remove their approval of the transaction.  This simplifies the signing coordination problem, enables people to change their mind before the threshold is reached and applies the transaction immediately upon receipt of the final approval.

The process for executing a transaction that requires multi-signature authority is as follows:

1. Someone proposes a transaction and approves it with their account.
2. Other account holders broadcast transactions adding their Yes or No to the proposal
3. When the proposed transaction has the approval of all accounts then it is confirmed.

The challenge comes when evaluating approval of recursive and/or cyclic authorities.  If implemented by brute force this could create unbounded computation and memory requirements. Fortunately, all transactions can be bounded to fixed cost operations even if the potential number of transactions required becomes unbounded.

If we assume a partnership P of companies A, B, and C and we assume that A, B, and C are have management teams requiring approval of 2 of 3 of their managers to approve any action of the company, then we have 9 possible signatures and a huge number of possibilities.  If we assume that each manager also has 2-factor authentication with a service provider then there are now 18 possible signatures.

Fortunately we never have to approve a transaction from partnership P in a single step.  In fact, each step should involve a single key.    Lets assume partnership P wishes to make a purchase, that desire must start with some individual and all individuals have a key.   That individual must be one of the managers of one of the companies.  Lets assume manager M1 of company A wants partnership P to make a purchase.  Manager M1 will construct a proposal that company A construct a proposal that partnership P make a purchase.  If either manager M2 or M3 from company A sign the proposal then a new proposal will be immediately created for P to spend that is already approved by company A.

At this point the management of companies B and C would have to create proposals that propose that B or C approve the spending proposal created by company A. If each company gets the necessary approvals then company B or C would add their approval to the proposal which would ratify the proposal and immediately execute the spend from the partnership P.

Under this approach each individual pays a single transaction fee each time they approve an action and every action involves at most 1 signature verification by the network.

Under paradigm a proposal is nothing but another transaction.

Under this paradigm an account is *either* a key or N of M accounts.  This means that if you view the authority graph the leaf nodes are all individual keys that have the power to act unilaterally.

# Cycles

Imagine account X is created that requires A and Y to approve.  Imagine account Y is created that requires B and X to approve.   The graph looks like this:

       A -> X <-> Y
       B -> Y <-> X

A proposes that X spend 1 BTS and waits  for approval from Y
B proposes that Y approve the proposal from A and waits for approval from X

There is no way to resolve this problem with a single approval from any party.  Cycles don't have to be direct as in this case, they can involve arbitrarily long sequences and thus be non-obvious.   Detecting cycles in directed graphs can be done with a depth first search looking for back edges.

The question of whether or not to enforce a lack of cycles on the block chain or to leave it to clients is a matter of debate.  The creation of a cycle is the moral equivalent of losing the private key to one of the multi-sig sets.

# imported from other document

# Hierarchical Threshold MultiSig

The ability to require more than one signature to approve an action on the blockchain is critical to network security. While a single secret key may be compromised, multiple keys distributed over multiple locations are far more secure.  We have identified the following problems with traditional multi-sig designs as found in Bitcoin and similar systems:

1. Coordinating the *signing* of a transaction is *difficult* and *manual*.
2. If one key needs to be changed, then N of M must approve.
3. After signing a transaction you cannot retract the signature while waiting on other parties.
4. 1 vote per key is inflexible and unable to represent ownership stake in an account.
5. N of M is designed for computers and does not reflect the reality of human interactions.

At the end of the day, multi-sig is all about permission management and permissions should be defined in terms of people or organizations rather than keys.

For the purpose of describing the motivating principle behind multi-signature accounts I will use the example of a company run by 3 individuals, Alice, Bob, and Carol. Alice and Bob each own 40% of the company and Carol owns 20%.  This company requires 2 of the 3 principles to approve all expenses. You could define the company in terms of keys assigned to Alice, Bob, and Carol, but what if Alice wants to protect her own identity with a multi-signature check? Alice opts to use a service provider that performs 2-factor authentication on every action Alice makes. This protects both Alice and the company and the company does not need to change its permission structure to accommodate Alice's choice of 2-factor authentication provider.

## Graphene's Solution

Every account is assigned *TWO* authorities: owner and active.  An *authority* is a set of keys and/or accounts each of which is assigned a weight.  Each *authority* has a weight threshold that must be crossed before an action requiring that *authority* may be performed.    The *owner authority* is designed for cold-storage and its primary role is to update the *active authority* or to change the *owner authority*.  The *active authority* is meant to be a hot key and can perform any action except changing the *owner authority*.    The motivating use case is a 2-factor authentication provider being co-signer on the *active authority* but not on the *owner authority*.    With this approach a user can remain confident that their account will always be in their control and yet that control can be kept in cold storage where no one can hack it.

A company wishing to provide 2-factor authentication can itself use multiple computers with multiple keys that must sign off on the second factor.  It can rotate keys frequently without having to disturb the permissions on the accounts of its users.

## Scalability

In theory accounts could form a hierarchy that is arbitrarily deep and evaluating that hierarchy could take an arbitrary amount of time.  In practice it is unlikely that a single transaction would have signatures more than 2 levels deep which keeps the computation bounded.   Anything that requires more than 2 levels is probably involving many people and wouldn't be signed all at once anyway, instead it would use the built in proposed transaction infrastructure which tracks partially approved transactions.   With this approach a board member can propose that his company approve a transaction.  You could extend this logically to propose, and account propose, to approve a transaction.  This process would collect transaction fees as all of the layers in the hierarchy gradually add their permissions and at no time requires an unbounded calculation.

## Cycles

It is possible for two accounts to require each other to approve a transaction.  Neither account can act without the other and thus nothing can be accomplished.  If users create an approval cycle in the *active authority* then the *owner authority* can be used to break the cycle; however, if they construct a cycle in the *owner authority* and the *active authority* then the accounts involved in the cycle would be locked out.   In practice client software can detect cycles and prevent them from being formed.



If Bob believes his computer has been compromised, then he can use his cold-storage key to change his active key.

