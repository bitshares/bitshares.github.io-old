---
title: Migrating to BitShares 2.0
author: Cryptonomex
---

Upgrading to BitShares 2.0 will require some network downtime. On an appointed date/time, a snapshot will be taken of
all BitShares balances in all asset types.  The new chain will then launch within 24 hrs of the snapshot that discards
all transaction history.  This snapshot will not be announced until we are 100% confident that the migration can occur
in a timely manner.

<!--more-->

## User Interface Migration

The new BitShares UI will be an entirely browser-based wallet, with private keys maintained in the browser.  Initially
the only full client wallet will be command line and geared toward exchanges and servers.  Eventually a downloadable GUI
wallet will be produced.

## BitAsset / User Issued Asset Migration

Because the new chain is a simple migration and should retain all the same
"perceived value", we can migrate all BitAssets and short positions.  The snapshot date will be announced with 30 days
notice so that any shorts that do not like the new BitAsset system can voluntarily exit.    To ease your migration we
recommend that everyone upgrade to BitShares 0.9.1 prior to the snapshot date and transfer 100% of every asset balance
to yourself.  This will consolidate your balances under a single account.

## Account Name Migration

Under BitShares 2.0, accounts are transferable and have different prices based upon the "quality" of the account name.
Any "premium" names registered on or after 2015-06-08 (US Eastern time) will be given the prefix "bts-" or similar
after the migration.

**Update: All account names registered on or after 2015-06-18 (US Eastern time) will be migrated if and only if they
were registered using the [BitShares Faucet](https://faucet.bitshares.org/).**

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

All delegates will be migrated to a pair of witness and workers and maintain votes for both.  There should be no change
in income unless your worker and/or delegate get voted out.  To bootstrap the new network, initially all witnesses will
be assigned block signing keys that are controlled by the dev team.  At any time the witnesses can recover the private
key that allows them to change their block signing key and take control of their witness.

## Exchange Migration

All exchanges will have at least 30 days to prepare for the new API which is significantly
different from BitShares.  We will encourage all exchanges to migrate as a Gateway.

## End of Life of BitShares 0.9.x

On the appointed snapshot date, BitShares 0.9.x will halt and all delegates will
stop producing blocks.

## Other Details

* Vesting balances will migrate under the existing terms, if two or more vesting balances were partially claimed as part
of the same transaction prior to the snapshot the vesting balances may be merged into a single balance.

## Deprecated Features

* Wall Messages will not be migrated as the feature is now deprecated
* Asset name/description information is no longer part of the blockchain state
* Account public data is deprecated and is no longer part of the blockchain state
* BitShares URL scheme: bts://... will be deprecated due to migration to hosted wallets
