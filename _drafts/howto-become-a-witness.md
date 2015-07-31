---
title: Howto become an active witness in BitShares 2.0
author: Fabian <xeroc> Schuh
layout: post
---

## Preparations in BitShares 0.9 network
To create a new account, you will need to start with an existing account with
some of the BTS asset that will pay the transaction fee registering your new
witness. Get your `<wif>` key from BitShares 0.9 via

    BitShares0.9: >>> wallet_dump_account_key <accountname> "owner_key"
    "5....."

This keys only gives access to the registered name. Hence, none of the accounts
in the genesis block have balances in them.  In the first BitShares network,
accounts were less tightly coupled to balances. Balances were associated with
public keys, and an account could have hundreds of public keys with balances
(or, conversely, public keys with balances could exist without any account
associated with them). We can extract the required private keys that hold funds
this way:

    BitShares0.9: >>> wallet_account_balance_ids <accountname>
    [[
	"xeroc",[
	  "BTSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
	  "BTSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          ...
	]
      ]
    ]

Each of these balances can be investigated via:

    BitShares0.9: >>> blockchain_get_balance BTSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    ....
	"asset_id": 0,                                     <- asset_id (0: BTS)
	"data": {
	  "owner": "BTSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWNER", <- address
          ...
      "balance": 0,                                        <- balance
      ...

Pick one or more address for BTS balances and dump the corresponding private key(s) with:

    BitShares0.9: >>> wallet_dump_private_key BTSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWNER
    "5......."

## Graphene Testnet 
We now have everything prepared to

* import an existing account into the testnet
* redeem funds to register a witness in the testnet

and we will now continue with the following steps:

* create a wallet for the testnet
* import an account and funds
* upgrade our account to a lifetime member
* register a new witness
* upvote the witness with our funds
* sign blocks

### Creating a wallet
    new >>> set_password <password>
    null
    locked >>> unlock <password>
    null
    unlocked >>>

### Basic Account Management
From this point on, we will no longer require interaction with BitShares 0.9.

We can import the account name and the (balance containing) key into BitShares 2.0:

    unlocked >>> import_key <accountname> <wif>
    true
    unlocked >>> import_balance <accountname> [5........] true
    [a transaction in json format]
    unlocked >>> list_my_accounts
    [{
	"id": "1.2.15",
	...
	"name": <accountname>,
	...
    ]
    unlocked >>> list_account_balances <accountname>
    XXXXXXX BTS

Only lifetime members can become witnesses, so you must first upgrade to a
lifetime member.  Upgrade and create our witness object.

    unlocked >>> upgrade_account <accountname> true
    [a transaction in json format]

### Becoming a Witness
To become a witness and be able to produce blocks, you first need to create a
witness object that can be voted in.

Note: If you want to experiment with things that require voting, be aware that
votes are only tallied once per day at the maintenance interval.
`get_dynamic_global_properties` tells us when that will be in
`next_maintenance_time`. Once the next maintenance interval passes, run
`get_global_properties` again and you should see that your new witness has been
voted in.  

Before we get started, we can see the current list of witnesses voted in, which
will simply be the ten default witnesses:

    unlocked >>> get_global_properties
    ...
      "active_witnesses": [
	"1.6.0",
	"1.6.1",
	"1.6.2",
	"1.6.3",
	"1.6.4",
	"1.6.5",
	"1.6.6",
	"1.6.7",
	"1.6.8",
	"1.6.9"
      ],
    ...

    unlocked >>> create_witness <accountname> "url-to-proposal" true
    {
      "ref_block_num": 139,
      "ref_block_prefix": 3692461913,
      "relative_expiration": 3,
      "operations": [[
	  21,{
	    "fee": {
	      "amount": 0,
	      "asset_id": "1.3.0"
	    },
	    "witness_account": "1.2.16",
	    "url": "url-to-proposal",
	    "block_signing_key": "PUBLIC KEY",
	    "initial_secret": "00000000000000000000000000000000000000000000000000000000"
	  }
	]
      ],
      "signatures": [
	  "1f2ad5597af2ac4bf7a50f1eef2db49c9c0f7616718776624c2c09a2dd72a0c53a26e8c2bc928f783624c4632924330fc03f08345c8f40b9790efa2e4157184a37"
      ]
    }

Our witness is registered, but it can't produce blocks because nobody has voted
it in.  You can see the current list of active witnesses with
`get_global_properties`:

    unlocked >>> get_global_properties
    {
      "active_witnesses": [
	"1.6.0",
	"1.6.1",
	"1.6.2",
	"1.6.3",
	"1.6.4",
	"1.6.5",
	"1.6.7",
	"1.6.8",
	"1.6.9"
      ],
      ...

Now, we should vote our witness in.  Vote all of the shares in both
`<accountname>` and `nathan` in favor of your new witness.

    unlocked >>> vote_for_witness <accountname> <accountname> true true
    [a transaction in json format]

Now we wait until the next maintenance interval.

Get the witness object using `get_witness` and take note of two things. The
`id` is displayed in `get_global_properties` when the witness is voted in, and
we will need it on the `witness_node` command line to produce blocks.  We'll
also need the public `signing_key` so we can look up the correspoinding private
key.

Once we have that, run `dump_private_keys` which lists the public-key 
private-key pairs to find the private key.

Warning: `dump_private_keys` will display your keys unencrypted on the
terminal, don't do this with someone looking over your shoulder.

    unlocked >>> get_witness <accountname>
    {
      "id": "1.6.10",
      "witness_account": "1.2.16",
      "signing_key": "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
    }
    unlocked >>> dump_private_keys
    [[
      ...
      ],[
	"GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
	"5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"
      ]
    ]

Now we need to start the witness, so shut down the wallet (ctrl-d),  and
shut down the witness (ctrl-c).  Re-launch the witness, now mentioning the new
witness 1.6.10 and its keypair:

    ./witness_node --rpc-endpoint=0.0.0.0:8090 --enable-stale-production --witness-id "1.6.10" --private-key "['GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8', '5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ']"

Alternatively, you may add this line into yout config.ini:

    private-key = ["GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8","5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]

Note: Make sure to use YOUR public/private keys instead of the once given above!

If you monitor the output of the `witness_node`, you should see it generate 
blocks signed by your witness:

    Witness 1.6.10 production slot has arrived; generating a block now...
    Generated block #367 with timestamp 2015-07-05T20:46:30 at time 2015-07-05T20:46:30
