---
permalink: /technology/recurring-and-scheduled-payments/
title: Recurring & Scheduled Payments
subtitle: Managed debit authority and withdraw permissions for anyone
image: ../images/frontpage/icon-rec-payments.svg
priority: 8
summary: >
    BitShares is the first smart contract platform with built-in support for recurring payments and subscription payments.
    This feature allows users to authorize third parties to make withdrawals from their accounts within certain limits.  This is a convenient way to “set it and forget it” for monthly bills and subscriptions.
---

## How it Works

Recurring Payments are implemented as a set of withdrawal permissions.  Each account can grant any number of withdrawal
permissions to other accounts.   A withdrawal permission includes following properties:

1. Start Date
2. End Date
3. Withdrawal Limit per Period
4. Period Length  (ie: 1 month)

Any asset type can be used in the withdrawal limit.

After a user grants the withdrawal permissions, the authorized account is allowed to make one transfer per period of an
amount up to the limit.   If there is insufficient funds then the withdrawal will fail.  Withdrawal permissions are designed
to be a convenience for merchants and users, as they do not represent a commitment to pay.

It is up to each merchant to initiate each withdrawal.  The BitShares system does not automatically transfer funds.

## Daily Withdrawal Limits

For security purposes, many banks place daily withdrawal limits on user accounts.  In the event that an account is
compromised, a thief is limited in the amount of damage that they can do.    Withdrawal permissions enable users
to protect their BitShares funds in the same manner.  To do so, a user creates two accounts: savings and checking.

The savings account has keys kept offline where they are unlikely to be compromised.   Before placing the keys in cold
storage, the savings account authorizes the checking account to make a daily withdrawal of up to $1000, for example.

The checking account can then pull money out of savings at up to this limit, per day, and then use those funds as needed. This gives the user confidence that their losses would be limited if their account is compromised.

## Scheduled Payments

As stated above, the withdrawal permission system does not automatically make payments. However, BitShares has another
feature which enables scheduled payments: proposed transactions. At any time, a user can propose a transaction to execute at a specific date and time in the future.   If the transaction has sufficient authorization (i.e. is
properly signed by authorities) at the specified time, then it will automatically be executed.

A merchant can use this feature, combined with withdrawal permissions, to implement automatic payments after a
one-time setup fee.   In practice, it may be cheaper for merchants to maintain their own scheduler to automate
billing, since the blockchain charges a fee to propose a transaction separately from the transaction’s own fees.
