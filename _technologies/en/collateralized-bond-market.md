---
permalink: /technology/collateralized-bond-market/
title: Collateralized Bond Market
subtitle: Integrated peer-to-peer lending.
image: ../images/frontpage/icon-bonds.svg
priority: 7
summary: >
    The BitShares bond market is an investment marketplace accessible to anyone with an internet connection. In the
    bond market, you can earn interest with any asset, or take a short position using any other asset as collateral.
---

The BitShares bond market allows for an interest rate market between any combination of assets
tradeable on the BitShares blockchain.  The bond is a *smart contract* between a borrower and a
lender.  The borrower borrows a certain amount of a specified asset from the lender and secures the
loan with collateral denominated in a different asset type.  Bonds are non-fungible and each can be
considered a separate contract between the two participating parties.  The borrower may use the
contract to profit from an expected change in the relative value of the two assets, while the lender
enjoys a predictable return.

## Avoiding Margin Calls

To avoid the need for margin calls, the bond market assumes that the collateral is always sufficient
for paying off the loan, even if its value has fallen below the value of the loan.   In other words,
every bond is the combination of a loan and an option to buy the collateral at the payoff price.
The lender is responsible for ensuring that the interest rate and collateral is sufficient to cover
the cost of providing the implied option contract.

## Proposing and Creating a Bond

A bond offer can be proposed by either a borrower or lender, and all open offers can be easily searched.
A borrower must commit the required collateral to a bond offer, whereas a lender must
commit borrowable assets.  Bond offers are not matched automatically with a market engine; instead,
the other side of any bond contract may be claimed via a transaction that accepts the bond offer.

## Bond Parameters

A BitShares bond offer defines the **amount and type of collateral** and the **type of borrowed
asset**.  A **ratio** of borrowed asset to collateral is specified.  A bond offer can be partially
filled at this ratio as long as it is above a specified minimum.  Bonds have a defined **loan period**,
**minimum loan period**, and **interest rate**.

## Closing a Bond

After a bond offer has been accepted, the loan period determines the due date of the bond.  If the
borrower has not paid the bond by this due date, the lender may claim the posted collateral.  The
bond may not be paid before the minimum loan period has expired.  The amount that must be paid by
the borrower to fulfill the bond and claim the collateral is determined by the interest rate and the
time the bond has remained outstanding.  Interest accrues on a daily basis and does not compound.  A
bond may also be partially paid any time after the minimum loan period; this will return collateral
to the borrower based on the collateral ratio of the bond.

## Conclusion

The Bitshares bond market allows investors who wish to gain leverage in a particular asset to offer
competitive interest rates to those willing to commit capital for a specified time.  The
implementation of a bond market on a blockchain consensus system efficiently reduces the overhead and
counterparty risk typically associated with such contracts.
