---
permalink: /技术/user-issued-assets/
title: User-Issued Assets
subtitle: Issue stocks, bonds, or other tokens while being compatible with KYC and AML regulations
image: ../images/frontpage/icon-asset-ident.svg
priority: 5
summary: >
---

BitShares allows individuals and companies to issue their own tokens for anything they can imagine.  Common use cases
are:

* TOC {:toc}

The potential use case for user issued assets is innumerable and the regulations that apply to each kind of token vary
widely and are often different in every jurisdiction.   BitShares provides the tools that allow you to remain compliant
with all of the regulations while issuing your assets.

Sometimes an example is the easiest way to explain a feature.

## Deposit Receipts

Banks are simply companies that maintain a database of customer account balances and facilitate the transfer of these
assets among their depositors.   Companies like Dwolla and Paypal are essentially issuing deposit receipts and then
offering cheaper transfers among their users than between banks.  With BitShares it is now possible to move these
internal databases onto the blockchain where the deposits can be used with other smart contracts such as the internal
markets, escrow, or bonds.

After talking to many different banks and exchanges we have learned a lot about what the law requires of those who wish
to issue deposit receipts.

### 1. Know Your Customer

First and foremost the issuer must know every single customer.  BitShares supports this by enabling both whitelists and
blacklists.  Rather than requiring every issuer to whitelist every customer separately, an issuer may specify a set of
identity verifiers that they trust to do this job.   This allows issuers to benefit from the network effect of validated
users without having to do any direct identity verification themselves.

When an asset enables whitelists no account may send or receive that asset without being on an authorized whitelist.  An
accounts funds can be frozen by removing them from the whitelist.

### 2. Asset Seizing

From time to time an issuer may be required to seize funds as a result of a court order.  While this may be unappealing
to those who are crypto-currency purists, when it comes to trust-based assets this is an unavoidable reality.  An issuer
can determine whether or not they wish to revoke this privilege, but it may be a requirement for some jurisdictions.

### 3. Market Restriction

An issuer who offers both USD and EUR deposits may need to restrict direct trading between their USD and EUR assets to
avoid being subject to foreign exchange regulations.  Crypto currency exchanges can allow trading between fiat and
cryptos but not allow trading between two fiat currencies.   Without this feature many exchanges would be unable to
issue their assets on the BitShares blockchain.

### 4. Transfer Restrictions

A transfer-restricted asset allows the holders of the asset to trade it in the markets but not transfer it from person
to person.   You may notice that few crypto-currency exchanges allow user-to-user transfer of funds outside the market.
This particular activity is often subject to a different set of money transmission regulations.

The deposit receipt example is probably one of the most important and yet most heavily regulated uses of user issued
assets.

## Company Shares

Corporate shares are heavily regulated by the SEC, but none of those regulations prevent them from being issued or
traded on an [alternative trading system](http://en.wikipedia.org/wiki/Alternative_trading_system).  The regulations in
many jurisdictions require all shares to be registered (aka held by known identities).   With BitShares your corporate
shares can be used as collateral for a bond or be used in any number of smart contracts.

## Event Tickets

Event tickets are a mostly unregulated use case for user issued assets.  Under this example tickets to a school play
could be issued as digital tokens that are auctioned off to the highest bidder who would then resell them.  This ensures
that the Drama department raises as much money as possible up front and transfers the risk of ticket sales on to
speculators.

On the day of the play the issuer can freeze all trading of the asset and then allow users to cryptographically check
in.

## Rewards Points

Merchants everywhere are offering their customers points for spending with them.  These points are often accumulated to
earn discounts on future purchases.  Often these systems are completely unregulated and are a prime example of how
companies can add value to their rewards program by making them available to smart contracts.

## Individual or Corporate Debt

Many businesses raise money by selling bonds.  With BitShares these bonds can be made tradeable and/or fungible which
makes them much more interesting to investors and may help your business to raise more money at lower rates.

## Crowd Funding

Whether being used as a transferable coupon for a pre-sale or doing an IPO on a small company, issuing an asset is one
of the most effective means of raising money from the masses.

## Digital Property

Software and music licenses can be made transferable by issuing them as a digital asset.  Every copy of a program can
check to make sure that the user has control of a token before running.  Software implementing such a licensing scheme
can remain functional even if the company that produced the license goes out of business.

Trading cards can be simulated by created many limited issue assets.   Online games can use these assets to represent
game items.

## Privatized BitAssets (Stable Crypto Currencies)

[Price-stable crypto-currencies](/technology/price-stable-cryptocurrencies.html) (aka BitAssets) were the inspiration
for BitShares.  Now users can create their own price stable assets with custom parameters designed to track the value of
any asset they can imagine.  The benefit of price-stable crypto-currencies are that they are fully collateralized and
the issuer only needs to be trusted to appoint an honest set of independent (non collusive) feed producers.   Unlike
deposit receipts, the value of a Privatized BitAsset is secured even if the issuer disappears.

There are many parameters that an issuer may tune.  In addition to white lists, market restrictions, transfer
restrictions, the issuer of a private bitasset has control over:

1. Collateral Type
2. Initial Collateral Rate
3. Maintenance Collateral Rate
4. Forced Settlement Fee, Delay, and Daily Volume
5. Price Feed Update Rate
6. Global Forced Settlement

With these tools it is possible to emulate a pure contract-for-difference with periodic global forced settlement (ie:
        monthly, yearly, etc), or to emulate BitShares 1.0 BitAssets by having a 30 day delay on forced settlement.
Arbitrary financial indexes can be used for the price feed to mimic all manner of exotic assets.

## Information/Prediction Markets

A [prediction market](http://en.wikipedia.org/wiki/Prediction_market) is a specialization of BitAssets where there is no
need for margin calls or forced settlement because all positions are fully collateralized at any price.   A prediction
market has a price between 0 and 1 and the issuer settles all positions after the event occurs and the final price is
known.   These prediction markets can be very secure if the issuer is a multi-sig account with may independent and
trustworthy parties involved.


## How to Profit by Issuing an Asset

There are many ways to profit from issuing an asset. As the issuer you have complete control over market fees and can
tune parameters such as the percent of each trade that is collected as a fee.  This percentage can be bounded by a
minimum and maximum fee.  The combination of these three parameters give issuers great flexibility in pricing.

### Fee Pools

As the issuer you may maintain a Fee Pool.  The Fee Pool is a pool of BTS and an exchange rate at which your issued
asset may be converted into BTS.   When a user wishes to pay a network fee with your asset, the fee pool will be used to
convert your asset into BTS at the rate you specify.  This means that you may charge a premium every time users opt to
use your asset to pay network fees rather than paying them directly with BTS.

The purpose of the fee pool is to provide a convenience to users that would like to use your asset without concerning
themselves with the details of acquiring BTS.  Anyone may fund the fee pool, but only the issuer may specify the
exchange rate.  This exchange rate is automatically set to the settlement price if the asset is collateralized by BTS.
