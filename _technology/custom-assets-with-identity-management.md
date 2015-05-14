---
layout: technology
title: Custom Assets with Identity Management
subtitle: subtitle
priority: 5
summary: "
The New York Stock exchange is a company that maintains a ledger to track ownership of stock and debt issued by other companies.
It earns money from transaction fees and has its own stock as well.
Like the New York Stock exchange, BitShares allows people to issue their stock or debt to be tracked and traded
on its distributed ledger. BitShares accounts can be tagged by other accounts to indicate who knows who.
This web of trust can be used by asset issuers to remain compliant with relevant regulations by
restricting their securities to authorized individuals
"
---

The BitShares platform provides a feature known as "user-issued assets", designed to help facilitate profitable business models for certain types of services that integrate with the platform.
The term user-issued asset refers to a type of custom token registered on the platform, and which users can hold and trade while obeying certain specified restrictions.
The creator--known as the issuer--of such an asset gets to publically name, describe, and distribute its tokens as desired. In addition, the issuer can specify
certain custom requirements for the asset: such as allowing only an approved whitelist of user accounts to hold the tokens, or requiring users to pay certain fees when transferring or trading the tokens.

For example, consider a currency exchange business that wants to use the BitShares trading engine--another feature of the platform--to build their trading service.
Such a business could accept deposits of real cash from verified customers
in exchange for user-issued asset tokens deposited to the customers' whitelisted BitShares accounts. The customers could then use the BitShares trading engine to trade these IOUs, while the issuer collects
a percentage of each trade as fees. When the customer is done trading and wants to cash out, the issuer pays them back real cash in exchange for the IOUs. In the end, the customer got the
trading service they wanted and the business collected trading fees, and leveraging the BitShares platform helped everyone keep things as efficient and profitable as possible.

Gateway assets be issued by established crypto-currency exchanges and money transmitters who want to become gateways into and out of BitShares. Read more on the Intro for Gateways.

Companies can issue company stock directly onto the bitshares blockchain, and BitShares UIA can be programmed to fully comply with existing regulatory and legal guidelines. Read the blog post on crypto-stocks.

Other uses for UIA may include rewards vouchers, coupons, third party currencies, credits, product receipts, crowdfunding tokens, warranty vouchers, and many more.

All assets on bitshares come with a variety of tools to help facilitate free commerce like escrow transactions, multisig, stealth addresses, and more. Delegates are effectively first-class oracles, meaning technologies like Codius or Hyperledger could be added relatively painlessly as demand for even more flexibility arises.
Delegated Proof of Stake (DPOS)
A more elegant consensus algorithm for a more civilized age.
