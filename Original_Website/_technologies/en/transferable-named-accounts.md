---
permalink: /technology/transferable-named-accounts/
title: Transferable Named Accounts
subtitle: Easy and secure transactions
image: ../images/frontpage/icon-trans-acc.svg
priority: 9
summary: >
   Named accounts enable users to easily remember and communicate their account information.  We don't use IP addresses
   to browse the internet or numbers to identify our email, so why shouldn't we have human-friendly account names for
   our financial transactions?
---

Every BitShares account is assigned a globally unique name that can be selected by its creator.  There are many
potential uses for account names beyond simply being an alias to a set of
[dynamic account permissions](/technology/dynamic-account-permissions){:target="_blank"}.
They can be used as user logins or mapped to domain names.
These names are transferable, which means that they are valuable in their own right.

The BitShares blockchain defines a simple algorithm to determine the fee it charges to reserve a new account name.
Names that contain a number, are longer than 8 characters, or contain no vowels are essentially free.  Otherwise the
name is priced according to its length.[Delegates](/technology/delegated-proof-of-stake-consensus){:target="_blank"}
can propose a different fee for each length which gives BitShares the power to adapt to market demands.

## Transferring Names

Accounts can be transferred by updating the permissions used to control the account. However, the semantics of
transferring an account are slightly different in the context of a web-of-trust.  Users need a means to update their
keys for security purposes while maintaining their standing in the web-of-trust.  In other words, users must be given a
way to explicitly transfer an account name to a new user while breaking any liability for how the account is used in the
future.

When users transfer an account name to another user, they use a special transaction that clears all of the links in the
web-of-trust.   Both the buyer and the seller are protected by this fact, because simply updating the key that controls
a named account does not signify a legal change in ownership.
