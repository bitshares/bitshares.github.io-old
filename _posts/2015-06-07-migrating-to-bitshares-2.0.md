---
title: Migrating to BitShares 2.0
---

## Migration Path
Unfortunately, upgrading to BitShares 2.0 is not just a "hard fork", it is what we would like to call "pitch-fork".  On
an appointed date/time, a snapshot will be taken of all BitShares balances in all asset types.  The new chain will then
launch within an hour of the snapshot that discards all transaction history.

## User Interface Migration
The new BitShares UI will be an entirely hosted wallet with private keys maintained in the browser and hosted at
bitshares.org.  Initially the only full client wallet will be command line and geared toward exchanges and servers.
Eventually a downloadable GUI wallet will be produced.

## BitAsset / User Issued Asset Migration
Because the new chain is a simple migration and should retain all the same "perceived value", we can migrate all
BitAssets and short positions.  The snapshot date will be announced with 30 days notice so that any shorts that do not
like the new BitAsset system can voluntarily exit.    To ease your migration we recommend that everyone upgrade to
BitShares 0.9.1 prior to the snapshot date and transfer 100% of every asset balance to yourself.  This will consolidate
your balances under a single account.

## Account Name Migration
Under BitShares 2.0, accounts are transferrable and have different prices based upon the quality of the account name so that
they can double as DNS names.   All existing BTS account names will be migrated as "bts/${current_account_name}" to
clear the main namespace.  For the first month after launch the only person who will be able to register
${current_account_name} will be "bts/${current_account_name}", but they must pay the fee appropriate for their name.
The reason we did not simply migrate all account names is to prevent squatters from profiting by getting the account
names cheaply on BTS.

## Open Order Migration
All open orders will be canceled prior to the snapshot and their funds returned to their owners.

## Wallet Migration
The BitShares 2.0 wallet architecture is vastly different than BitShares.  In BitShares, each account consists of dozens or
even thousands of keys, each of which is controlling a small portion of your balance and for TITAN users, none of the
balances associated with your account use the same key as your account.  Under BitShares 2.0, all of these "balances" become
unique accounts rather than a single logical account.    The BitShares 2.0 wallet will have an "import" interface that will
allow you to specify a set of private keys and the name of an account that you would like to receive all of the funds
associated with those keys.   Then it will generate a transaction that will spend the full balances from all accounts
associated with those keys to your new unified BitShares 2.0 account.    The BitShares wallet will provide a utility to dump
all private keys associated with a given account to make the migration process easy.

## Transaction History Migration
All transaction history will be abandoned.  If you need your transaction history you will have to reference your
BitShares wallet.

## Delegate Migration
All delegates will be migrated to a pair of witness and workers and maintain votes for both.  There should be no change
in income unless your worker and/or delegate get voted out.

## Exchange Migration
All exchanges will have at least 30 days to prepare for the new API which is significantly different from BitShares.  We
will encourage all exchanges to migrate as a Gateway.

## End of Life of BitShares 1.0
One the appointed snapshot date, BitShares 1.0 will shut down and all delegates will stop producing blocks.  This is to
prevent anyone from attempting to sell assets on the BitShares 1.0 chain.

## migration
* Account names including dotted (.) child accounts
* Delegate employment contracts and unclaimed delegate pay
* Vesting, escrow, multisig balances
* User-issued assets
* BitAssets
* Justify any reallocations or other deviations from BitShares 1
* What is now deprecated?
