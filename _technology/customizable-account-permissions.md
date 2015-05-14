---
title: Corporate Accounts with Workflow Management
subtitle: Multi-signature transactions done right
priority: 3
summary: "
We present a flexible and user-friendly approach to managing platform account permissions.
This approach allows account permissions to be fully customized to require approval from arbitrary hierarchies of other accounts.
Such a user-centric design greatly enhances usability and security over the key-centric approaches taken by other blockchain technologies.
Individual account keys can be updated seamlessly, and transactions requiring multiple signatures can be approved with
no out-of-band communication.
"
---

## Background

The ability to require multiple digital signatures for sensitive operations on the blockchain is integral to the security of the platform.
While a single secret key may be compromised, multiple keys distributed over multiple locations add redundant protections which result in a far more secure experience.

Competing blockchain systems suffer from the following flaws:

- The N-of-M model cannot sufficiently reflect the management hierarchies of many real-life organizations
- Equal weighting of M keys is not sufficient to express asymmetric ownership over an account
- Coordination and signing must be done completely out-of-band
- Keys cannot be changed without coordinating with all other parties
- Signatures cannot be retracted while waiting on other parties

## Use Case

Multi-sig is all about permission management and permissions should be defined in terms of people or organizations rather than keys.
Consider an example company that is run by 3 individuals, Alice, Bob, and Carol.
Alice and Bob each own 40% of the company and Carol owns 20%.
This company requires 2 of the 3 principles to approve all expenses.
You could define the company in terms of keys assigned to Alice, Bob, and Carol, but what if Alice wants to protect her own identity with a multi-signature check?
Alice opts to use a service provider that performs 2-factor authentication on every action Alice makes.
This protects both Alice and the company and the company does not need to change its permission structure to accommodate Alice's choice of 2-factor authentication provider.

## Solution

We introduce a new approach to permissions based upon accounts which are assigned globally unique IDs.

Under this system it is possible to define an account that has no keys itself, but instead depends solely upon the approval of other accounts.
Those other accounts can in turn depend upon the approval of other accounts.
This process forms a *hierarchy* of accounts that must grant permission.
Each account can change its own permissions independently of any accounts above it in the hierarchy which is what makes the permissions *dynamic*.

Each account defines its permissions as a set of keys and/or other account IDs that are each assigned weights by the account holder.
If the combined weight of keys and/or accounts exceeds a defined threshold defined by the account then permission is granted.

The second solution is to include the partially signed transaction in the consensus state and allow accounts to publish transactions that add or remove their approval of the transaction.
This simplifies the signing coordination problem, enables people to change their mind before the threshold is reached and applies the transaction immediately upon receipt of the final approval.

The process for executing a transaction that requires multi-signature authority is as follows:

1. Someone proposes a transaction and approves it with their account.
2. Other account holders broadcast transactions adding their Yes or No to the proposal
3. When the proposed transaction has the approval of all accounts then it is confirmed.

## Owner and Active Keys

Every account is assigned *TWO* authorities: owner and active.

- An *authority* is a set of keys and/or accounts each of which is assigned a weight.
- Each *authority* has a weight threshold that must be crossed before an action requiring that *authority* may be performed.
- The *owner authority* is designed for cold-storage and its primary role is to update the *active authority* or to change the *owner authority*.
- The *active authority* is meant to be a hot key and can perform any action except changing the *owner authority*.
- The motivating use case is a 2-factor authentication provider being co-signer on the *active authority* but not on the *owner authority*.

With this approach a user can remain confident that their account will always be in their control and yet that control can be kept in cold storage where no one can hack it.
This means that a company account can require approval of its board of directors and each board member may in turn
require 2 factor authentication.

Anyone can rotate keys frequently without having to disturb the permissions on the accounts of its users.

## Gathering Signatures

One of the challenges that has made Multi Signature approaches difficult to use in the past is the act of gathering the required signatures was entirely manual or required specialized infrastructure.
Once you sign a transaction there is no ability to retract your signature and the last party to sign gains a slight advantage over the other parties.
Gathering signatures gets even more complex the deeper the hierarchy.

To simplify this process a block chain should manage the signature gathering process by tracking the state of partially approved proposed transactions.
Under this process each account can add (or remove) their permission to a transaction atomically without having to rely upon an outside system to circulate the transaction.
This becomes especially critical for hierarchies that could become arbitrarily deep.

In order to keep things computationally bounded, an individual transaction will only traverse down two layers in a hierarchy.
If more than two layers of hierarchy are present then an account will have to propose (create one transaction) to approve a proposal (the other transaction).
When the first proposal (transaction) is approved, permission will be added to the second proposal (transaction).

**insert cass diagram here**

Under this approach each individual pays a single transaction fee each time they approve an action and every action involves at most 1 signature verification by the network.

This process allows arbitrarily deep hierarchies to be formed without exposing the permission system to vulnerability of unbounded computation.

## Scalability

In theory accounts could form a hierarchy that is arbitrarily deep and evaluating that hierarchy could take an arbitrary amount of time.
In practice it is unlikely that a single transaction would have signatures more than 2 levels deep which keeps the computation bounded.
Anything that requires more than 2 levels is probably involving many people and wouldn't be signed all at once anyway, instead it would use the built in
proposed transaction infrastructure which tracks partially approved transactions

- With this approach a board member can propose that his company approve a transaction
- You could extend this logically to propose, and account propose, to approve a transaction
- This process would collect transaction fees as all of the layers in the hierarchy gradually add their permissions and at no time requires an unbounded calculation.

## Cycles

It is possible for two accounts to require each other to approve a transaction

Imagine account X is created that requires A and Y to approve.
Imagine account Y is created that requires B and X to approve.
The graph looks like this:

       A -> X <-> Y
       B -> Y <-> X

A proposes that X spend 1 BTS and waits  for approval from Y
B proposes that Y approve the proposal from A and waits for approval from X

There is no way to resolve this problem with a single approval from any party.
- Neither account can act without the other and thus nothing can be accomplished
- Cycles don't have to be direct as in this case, they can involve arbitrarily long sequences and thus be non-obvious.
- If users create an approval cycle in the *active authority* then the *owner authority* can be used to break the cycle; however, if they construct a
cycle in the *owner authority* and the *active authority* then the accounts involved in the cycle would be locked out
- In practice client software can detect cycles and prevent them from being formed.

## Conclusion

Dynamic hierarchical threshold multi-signature permissions enables people and organizations to have a more natural way to express ownership and control policies
This more natural approach will make the system easier to use and ultimately more secure than existing solutions.
