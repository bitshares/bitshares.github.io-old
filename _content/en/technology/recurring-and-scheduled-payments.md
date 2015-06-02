---
permalink: /technology/recurring-and-scheduled-payments/
title: Recurring & Scheduled Payments
subtitle: Give direct debit authority or limited withdraw permissions to anyone
image: ../images/frontpage/icon-rec-payments.svg
priority: 8
summary: >
    BitShares is the first smart contract platform with built in support for recurring payments and subscription payments.
    This feature allows users to authorize 3rd parties to make withdraws from their accounts within certain limits.  This is
    convenient for anyone who likes to “set it and forget it” when it comes to their monthly bills and subscriptions.
---

--------

## How it Works

Recurring Payments are implemented as a set of withdraw permissions.  Each account can grant any number of withdraw
permissions to other accounts.   A withdraw permission includes following properties:

1. Start Date
2. End Date
3. Withdraw Limit per Period
4. Period Length  (ie: 1 month)

Any asset type can be used in the withdraw limit.

After a user grants the withdraw permissions, the authorized account is allowed to make one transfer per period of an
amount up to the limit.   If there is insufficient funds then the withdraw will fail.  Withdraw permissions are designed
to be a convenience for merchants and users, they do not represent a commitment to pay.

It is up to each merchant to initiate the billing once per month.  BitShares does not automatically transfer funds.

## Daily Withdrawal Limits

For security purposes many banks place daily withdrawal limits on user accounts.  In the event the account is
compromised then the thief is still limited in the amount of damage that he can do.    Withdraw permissions enable users
to protect their BitShares funds in the same manner.  To do so a user creates two accounts: savings and checking.

The savings account has keys kept offline where they are unlikely to be compromised.   Before placing the keys in cold
storage, the savings account authorizes the checking account to make a daily withdrawal of up to $1000.

The checking account can then pull money out of savings at up to $1000 per day and then use those funds as necessary.
The checking account can keep its keys on their phone or computer with the knowledge that their losses are minimized if
their system is compromised.

## Scheduled Payments

As we stated above, the withdraw permission system does not automatically make payments; however, BitShares has another
feature which enables scheduled payments: proposed transactions.     At any time, a user can propose a transaction that
should execute at a specific date and time in the future.   If the transaction has sufficient authorization (i.e. is
properly signed by authorities) at the specified time then it will automatically be executed.

A merchant can use this feature combined with the withdraw permission feature to implement automatic payments after a
one-time setup fee.   In practice it will be cheaper for merchants to maintain their own scheduler to automate the
billing because the blockchain charges a fee to propose a transaction in addition to the transaction’s own fees.
