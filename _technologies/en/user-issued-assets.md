---
permalink: /technology/user-issued-assets/
title: User-Issued Assets
subtitle: Regulation-compatible cryptoasset issuance
image: ../images/frontpage/icon-asset-ident.svg
priority: 7
summary: >
    The BitShares platform provides a feature known as "user-issued assets" to help facilitate profitable business
    models for certain types of services. The term refers to a type of custom token registered on the platform, which
    users can hold and trade within certain restrictions. The creator of such an asset publically names, describes, and
    distributes its tokens, and can specify customized requirements, such as an approved whitelist of accounts permitted
    to hold the tokens, or the associated trading and transfer fees.
---
BitShares allows individuals and companies to issue their own tokens for anything they can imagine.  Common use cases
include:

* TOC
{:toc}

The potential use cases for user-issued assets are innumerable, and the regulations that apply to each kind of token vary
widely, and are often different in every jurisdiction.   BitShares provides the tools to allow issuers to remain compliant
with all applicable regulations when issuing assets.

Following are a few example use cases for user-issued assets.

## Deposit Receipts

Banks are simply companies that maintain a database of customer account balances and facilitate the transfer of these
assets among their depositors.   Companies like Dwolla and Paypal essentially issue deposit receipts, and then
offer cheaper transfers among their users than between banks.  With BitShares, it is now possible to move these
internal databases onto the blockchain where the deposits can be used with other smart contracts such as the internal
markets, escrow, or bonds.

In talking to many different banks and exchanges, we have learned a lot about what the law requires of those who wish
to issue deposit receipts.

### 1. Know Your Customer

First and foremost the issuer must know every single customer.  BitShares supports this by enabling both whitelists and
blacklists.  Rather than requiring every issuer to whitelist every customer separately, an issuer may specify a set of
identity verifiers that they trust to do this job.   This allows issuers to benefit from the network effect of validated
users without having to do any direct identity verification themselves.

When an asset enables whitelists, no account may send or receive that asset without being on an authorized whitelist.  An
accounts funds can be frozen by removing them from the whitelist.

### 2. Asset Seizing

From time to time, an issuer may be required to seize funds as a result of a court order.  While this may be unappealing
to cryptocurrency purists, it is an unavoidable reality of trust-based assets.  An issuer
can determine whether or not they wish to revoke this privilege, but it may be a requirement in some jurisdictions.

### 3. Market Restriction

An issuer who offers both USD and EUR deposits may need to restrict direct trading between their USD and EUR assets to
avoid being subject to foreign currency exchange regulations.  Some cryptocurrency exchanges allow trading between fiat and
cryptocurrencies, but not between two fiat currencies.   Without this feature, many exchanges would be unable to
issue their assets on the BitShares blockchain.

### 4. Transfer Restrictions

A transfer-restricted asset allows the holders of the asset to trade it in the markets but not transfer it from person
to person.   Only a few cryptocurrency exchanges allow user-to-user transfer of funds outside the market, because this
particular activity is often subject to a different set of money transmission regulations.

The deposit receipt example is probably one of the most important, and yet most heavily regulated, use cases of
user-issued assets.

## Company Shares

Corporate shares are heavily regulated by the SEC, but none of those regulations prevent them from being issued or
traded on an [alternative trading system](http://en.wikipedia.org/wiki/Alternative_trading_system){:target="_blank"}.
The regulations in many jurisdictions require all shares to be registered (aka held by known identities).   BitShares corporate
shares can be used as collateral for a bond or be used in any number of smart contracts.

## Event Tickets

Event tickets are a largely unregulated use case for user-issued assets.  Tickets to a school play
could be issued as digital tokens that are auctioned off to the highest bidder, who would then resell them.  This ensures
that the ticket issuer raises as much money as possible up front, while transferring the risk of ticket sales on to
speculators.

On the day of the event, the issuer can freeze all trading of the asset and then allow users to cryptographically check
in.

## Rewards Points

Merchants around the world offer rewards points for loyal customers.  These points are accumulated to
earn discounts on future purchases.  Rewards systems are a prime opportunity to add value by making them available to Bitshares smart contracts.

## Individual or Corporate Debt

Many businesses raise money by selling bonds.  With BitShares, these bonds can be made tradeable and/or fungible, which
makes them more compelling to investors.

## Crowd Funding

Whether being used as a transferable coupon for a pre-sale, or doing an IPO on a small company, issuing an asset is one
of the most effective means of raising money for a cause.

## Digital Property

Software and music licenses can be made transferable by issuing them as a digital asset.  Every copy of a program can
check to make sure that the user has control of a token before running.  Software implementing such a licensing scheme
can remain functional even if the company that produced the license goes out of business.

Trading cards can be simulated by creating many limited issue assets.   Online games can use these assets to represent
game items.

## Privatized SmartCoins (Stable Cryptocurrencies)

[Price-stable cryptocurrencies](/technology/price-stable-cryptocurrencies){:target="_blank"} (aka SmartCoins) were the inspiration
for BitShares.  Now, users can create their own price-stable assets with custom parameters designed to track the value of
any asset they can imagine.  The benefit of price-stable cryptocurrencies is that they are fully collateralized, and
the issuer only needs to be trusted to appoint an honest set of independent (non-collusive) feed producers.   Unlike
deposit receipts, the value of a Privatized SmartCoin is secured even if the issuer disappears.

Bitshares provides many parameters that an issuer may tune.  In addition to account whitelists, market restrictions, and transfer
restrictions, the issuer of a private SmartCoin has control over:

1. Collateral Type
2. Initial Collateral Rate
3. Maintenance Collateral Rate
4. Forced Settlement Fee, Delay, and Daily Volume
5. Price Feed Update Rate
6. Global Forced Settlement

With these tools it is possible to emulate a pure contract for difference with periodic global forced settlement (ie:
monthly, yearly, etc), or to emulate BitShares 1.0 BitAssets by having a 30 day delay on forced settlement.

Arbitrary financial indexes can be used for the price feed to mimic all manner of exotic assets.

## Information/Prediction Markets

A [prediction market](http://en.wikipedia.org/wiki/Prediction_market){:target="_blank"} is a specialization of SmartCoins where there is no
need for margin calls or forced settlement because all positions are fully collateralized at any price.   A prediction
market has a price between 0 and 1 and the issuer settles all positions after the event occurs and the final price is
known.   These prediction markets can be very secure if the issuer is a multi-sig account with many independent and
trustworthy parties involved.

## How to Profit by Issuing an Asset

There are many ways to profit from issuing an asset. As the issuer you have complete control over market fees and can
tune parameters such as the percent of each trade that is collected as a fee.  This percentage can be bounded by a
minimum and maximum fee.  The combination of these three parameters give issuers great flexibility in pricing.

### Fee Pools

Issuers may optionally maintain a Fee Pool.  The Fee Pool is a pool of BTS and an exchange rate at which the issued
asset may be converted into BTS.   When a user wishes to pay a network fee with the asset, the fee pool will step in to
convert the asset into BTS at the rate that the issuer has specified.  This means that issuers may charge a premium
every time users opt to use their asset to pay network fees rather than paying them directly with BTS.

The purpose of the fee pool is to provide a convenience to users that would like to use an asset without concerning
themselves with the details of acquiring BTS.  Anyone may fund the fee pool, but only the issuer may specify the
exchange rate.  This exchange rate is automatically set to the settlement price if the asset is collateralized by BTS.
