---
title: The Value Proposition of Bitshares – Part II (BitAssets)
author: bitshares
layout: post
permalink: /the-value-proposition-of-bitshares-part-ii-bitassets/
ABp_portfolio_client:
  - 
ABp_portfolio_skills:
  - 
ABp_portfolio_link:
  - 
ABp_portfolio_link_target:
  - 
ABp_portfolio_effect:
  - 
ABp_portfolio_show_related:
  - 0
slide_template:
  - default
pexeto_video:
  - 
categories:
  - Featured
  - General
---
In [Part I][1], we covered BitShares’s core technology. Today, I would like to introduce to you what BitShares offers beyond the basic yet genius idea Satoshi introduced with Bitcoin in 2009. We will take a look at one of the core feature of BitShares today, namely BitAssets.

[<img class=" size-full wp-image-11142 aligncenter" src="http://bitshares.org/blog/wp-content/uploads/2014/04/banner_reimagine_01-862x482.jpg" alt="banner_reimagine_01-862x482" width="862" height="482" />][2]

#### **What are BitAssets?**

BitAssets, also called market pegged assets, are crypto currencies that are tracked on the BitShares blockchain, like the bitcoin tokens are tracked on the Bitcoin blockchain. BitAssets have the same properties as all crypto currencies: they are traded without a middleman to facilitate the transaction, the user stays in full control of his assets (he/she holds the private keys necessary to transfer assets), there are no charge backs for merchants and transactions are fast, cheap and do not depend on business hours. But here is what makes BitAssets different from other crypto currencies: they are stable in price. More specifically, BitAssets are pegged to the value of a real world asset. BitUSD, for example, tracks the value of the US dollar and can be traded and exchanged at the value of the US dollar.

&nbsp;

BitAssets can be pegged to the value of anything that is measurable and has an exchange rate, like US dollars, gold, oil, stocks, etc.

&nbsp;

BitAssets pay interest to their holders. The interest comes from trading fees.

&nbsp;

#### **BitAssets offer value for two groups of people:**

&nbsp;

  1. Traders. Anyone who would benefit from a faster and lower cost solution when trading digital assets.
  2. Shoppers, merchants and savers. That is anyone who would profit from the convenience of crypto-currencies, price stability and above average earnings on savings.

&nbsp;

#### **How does it work?**

There is no central party that issues BitUSD so there is no counterparty risk where a centralized issuer could default on his promise to exchange the BitAsset for the real world asset. Instead a decentralized prediction market ensures that 1 BitUSD is always worth 1 USD.

&nbsp;

I will illustrate the mechanics of BitAssets with BitUSD as an example: Users can take two sides of a bet, comparable to a well known financial instrument called &#8220;contracts for difference&#8221;. If one predicts that the price of the USD compared to BTS will go up they buy BitUSD which can always be exchanged for 1 USD. If someone predicts that BTS will go up in price compared to the USD she can short sell BitUSD, meaning she lends BitUSD into existence by giving up collateral in BTS worth 2 times the value of the BitUSD that are lent into existence. The BitUSD short seller can make a profit (measured in USD) by buying back the BitUSD for less BTS in case BTS has risen in price, close her position and get her collateral back. The BitUSD buyer on the other side gets the price stability of the dollar. We can also look at it differently and measure the relative gains and losses of the BitUSD holder in BTS, then the BitUSD holder is making a loss (measured in BTS) if the price of BTS rises compared to the USD.

&nbsp;

The 300% collateralization (2x from the short seller plus 1x from the buyer of the BitUSD created by the short sell) guarantees that there is enough collateral even if the value of the collateral falls quickly. Margin calls are triggered if BTS (the collateral) falls by 33% meaning that the BitShares software automatically buys back BitUSD from the client&#8217;s internal market and closes the short position taking the bought back BitUSD out of circulation.

&nbsp;

BitUSD can only be shorted into existence at or above the exchange rate of USD to BTS which is fed into the system via a price feed1. The price feed is compiled from at least 51 different feeds provided by BitShares delegates (for more info on delegates see[ http://wiki.bitshares.org/index.php/DPOS\_or\_Delegated\_Proof\_of\_Stake#Role\_of_Delegates][3]). This guarantees that the value of BitUSD does not decrease in case there is a big demand for shorting BitUSD.

&nbsp;

Short sellers have to cover their position at or above the price feed at least every 30 days after opening a short position. This is effectively a guarantee to any BitUSD holder that they can sell bitUSD for the dollar equivalent of BTS within a 30 day period.

&nbsp;

For a more detailed explanation of how BitAssets work see [Link to Whitepaper on bitshares.org]

&nbsp;

#### **What is it good for?**

For one, traders are given the possibility to inexpensively and conveniently speculate on the value of anything that can be priced and can do so without any counterparty risk. Anything, including stocks, can be traded at lower costs and without relying on the enforcement of legal contracts with banks and exchanges.

&nbsp;

Farmers can hedge against a price decline in corn due to a rainy summer by shorting BitCorn (CBOT).

&nbsp;

If you want to trade currency pairs like EUR/USD and assume that the Euro will go up in price against the USD, then you would want to go long on BitEUR and go short on BitUSD.

&nbsp;

Savers and shoppers get a price stable crypto currency which pays interest. The interest paid to BitAsset holders comes from trading fees paid by those speculating on the price trend of the underlying BitAsset.

&nbsp;

If you think gold is the best money there is but encounter problems cutting out little pieces of your bullion and frequently get rejected by the cashier when you ask if he could verify and weigh your nugget then BitGLD might be your money of choice. BitGLD has the value of an ounce of gold and can be transferred to a merchant or a friend privately, instantly, divisibly and at a minimal cost.

&nbsp;

There is no need anymore for a merchant to use a payment processor to protect the merchant from the price volatility of a crypto currency.

&nbsp;

Another aspect might be that, having a stable and trust-less asset (no counterparty risk) could help real-world adoption of crypto currency in general because people are more incentivized to spend something that is stable in value rather than something that is hoarded in expectation of value appreciation.

&nbsp;

In economies without a stable currency, BitUSD can serve as a stable and portable medium of exchange today. There is no need to wait for adoption of a crypto currency to begin slowly and increase market capitalization and therefore reduce the volatility of crypto currencies over time.

&nbsp;

We can conclude that, BitAssets are market pegged derivatives with the transferability characteristics of Bitcoin. BitAssets are a powerful tool for trading as well as everyday applications like e-commerce. The world we live in today suffers from a fragile banking system based on fractional reserve banking and intransparency, both of which raise the barriers to entry and encourage corruption. BitShares offers a 300% reserve alternative with the privacy of public key cryptography and the transparency of a public ledger.

&nbsp;

*<a title="Get Started With BitShares" href="http://bitshares.org/get-started" target="_blank">Join our BitShares community</a>, which is open minded and aims to solve problems of centralization through decentralized cryptographic systems.*

 [1]: http://bitshares.org/blog/the-value-proposition-of-bitsharesx-part-i-core-technology/ "The value proposition of BitShares - Part 1"
 [2]: http://bitshares.org/blog/wp-content/uploads/2014/04/banner_reimagine_01-862x482.jpg
 [3]: http://wiki.bitshares.org/index.php/DPOS_or_Delegated_Proof_of_Stake#Role_of_Delegates