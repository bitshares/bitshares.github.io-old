---
title: Migrating to BitShares 2.0
---

Upgrading to BitShares 2.0 will require some network downtime. On an appointed date/time, a snapshot will be taken of
all BitShares balances in all asset types.  The new chain will then launch within 24 hrs of the snapshot that discards
all transaction history.  This snapshot will not be announced until we are 100% confident that the migration can occur
in a timely manner.

<!--more-->

## User Interface Migration 

The new BitShares UI will be an entirely hosted wallet with private keys maintained in the
browser and hosted at bitshares.org.  Initially the only full client wallet will be command line and geared toward
exchanges and servers.  Eventually a downloadable GUI wallet will be produced.

## BitAsset / User Issued Asset Migration 

Because the new chain is a simple migration and should retain all the same
"perceived value", we can migrate all BitAssets and short positions.  The snapshot date will be announced with 30 days
notice so that any shorts that do not like the new BitAsset system can voluntarily exit.    To ease your migration we
recommend that everyone upgrade to BitShares 0.9.1 prior to the snapshot date and transfer 100% of every asset balance
to yourself.  This will consolidate your balances under a single account.

## Account Name Migration 

Under BitShares 2.0, accounts are transferable and have different prices based upon the
quality of the account name so that they can double as DNS names.  Starting immediately, all BitShares delegates will
only allow users to register non-premium names until BitShares 2.0 is released and can set the proper pricing.

## Open Order Migration 

All open orders will be canceled prior to the snapshot and their funds returned to their owners.

## Wallet Migration 

The BitShares 2.0 wallet architecture is vastly different than BitShares.  In BitShares, each
account consists of dozens or even thousands of keys, each of which is controlling a small portion of your balance and
for TITAN users, none of the balances associated with your account use the same key as your account.  Under BitShares
2.0, all of these "balances" become unique accounts rather than a single logical account.    The BitShares 2.0 wallet
will have an "import" interface that will allow you to specify a set of private keys and the name of an account that you
would like to receive all of the funds associated with those keys.   Then it will generate a transaction that will spend
the full balances from all accounts associated with those keys to your new unified BitShares 2.0 account.    The
BitShares 0.9.x wallet will provide a utility to dump all private keys associated with a given account to make the
migration process easy.

## Transaction History Migration 

All transaction history will be abandoned.  If you need your transaction history you
will have to reference your BitShares 0.9.x wallet.

## Delegate Migration 

All delegates will be migrated to a pair of witness and workers and maintain votes for both.
There should be no change in income unless your worker and/or delegate get voted out.  Initially all witnesses will be
assigned private keys that are a shared secret between Invictus and the current delegates.  At any time the delegates
can recover the private key that allows them to change their block signing key and take control of their witness.

## Exchange Migration 

All exchanges will have at least 30 days to prepare for the new API which is significantly
different from BitShares.  We will encourage all exchanges to migrate as a Gateway.

## End of Life of BitShares 0.9.x 

On the appointed snapshot date, BitShares 1.0 will shut down and all delegates will
stop producing blocks.  This is to prevent anyone from attempting to sell assets on the BitShares 1.0 chain.  It will be
up to the individual delegates whether or not to continue BitShares 0.9.x and for the stakeholders to vote in new
delegates to continue the chain.

## Other Details

* Vesting balances will migrate under the existing terms, if two or more vesting balances were partially claimed as part
of the same transaction prior to the snapshot the vesting balances may be merged into a single balance.

## Deprecated Features

* Wall Messages will not be migrated as the feature is now deprecated.
* Asset description information is no longer part of the block chain state.
* Account Public Data is deprecated and is no longer part of the block chain state.
* Asset Public Data is deprecated and is no longer part of the block chain state.
* BitShares URL scheme: bts://... will be deprecated due to migration to hosted wallets.
