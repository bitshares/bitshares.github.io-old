---
title: Collateralized Bond Market
subtitle: subtitle
image: ../images/frontpage/icon-bonds.svg
priority: 7
summary: >
    summary
---

--------

The BitShares protocol includes native support for secured interest-bearing loans of assets.
This support takes the form of a smart contract specifying the following terms:

1. Borrower account
2. Lender account
3. Principle asset amount
4. Collateral asset amount
5. Minimum loan period
6. Due date
5. Interest rate

When such a contract is activated, the borrower account receives the principle asset amount provided by the
lender account, and contract itself receives and locks up the collateral asset amount provided by the borrower.
The borrower's debt will increase over time as interest accrues. At any time after the minimum loan period,
the borrower can repay the debt (principle plus interest accrued) and reclaim the collateral. Partial repayment is allowed.
Interest accrues with a resolution of 24 hours and does not compound. At any time after the due date, if the contract is
still active, the lender can claim the collateral and close the contract.
