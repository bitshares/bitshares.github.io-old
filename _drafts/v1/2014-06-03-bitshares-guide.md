---
title: BitShares Guide
author: bitshares
layout: post
permalink: /bitshares-guide/
slide_template:
  - default
pexeto_video:
  - 
categories:
  - Featured
  - General
---
BitShares is the first proposed Bitcoin-like cryptocurrency-based prediction market system that allows for the creation of new derivative products, which track real-world entities. In a nutshell, BitShares is a decentralized peer-to-peer crypto-currency like Bitcoin that allows you to trade other entities that can be anything, from Gold to Apple stock to Bitcoin. Confused? This guide will help demystify Bitshares for you.

[<img class="alignnone size-full wp-image-12660" src="http://bitshares.org/blog/wp-content/uploads/2014/06/blog-bts-guide1.jpg" alt="blog-bts-guide1" width="800" height="400" />][1]

## Introduction

&nbsp;

BitShares was introduced as a <a title="BitShares white paper" href="http://static.squarespace.com/static/51df1ba4e4b08840dcfce197/t/5212ca63e4b0348bfd2276c6/1376963171729/BitShares%20White%20Paper%20%282%29.pdf" target="_blank">White Paper</a> by Daniel Larimer, Charles Hoskinson and Stan Larimer. The paper was titled “A Peer-to-Peer Polymorphic Digital Asset Exchange”. Since then, the scope and details of the project have been modified. As of this time, the Bitshares hasn’t launched yet but should be ready some time in 2014 based on current estimates.

&nbsp;

The project is headed by Daniel Larimer after he got funding from Chinese venture capital fund <a title="Bitfund.PE" href="https://bitfund.pe/welcome" target="_blank">BitFund.PE</a> (that operates as a Private Equity). Charles Hoskinson, founder of the <a title="Bitcoin Education Project" href="http://btcedproject.org/" target="_blank">Bitcoin Education Project</a> was the co-founder of the original project but has since left the team.

&nbsp;

The BitShares project received a lot of attention in August 2013 when it was <a href="http://www.coindesk.com/bitshares-p2p-trading-platform-to-offer-dividends-on-bitcoins/" target="_blank">covered by CoinDesk</a> and subsequently announced to the the <a title="BitShares Bitcointalk " href="https://bitcointalk.org/index.php?topic=279771.0" target="_blank">Bitcointalk forums</a> on August 22nd 2013 as a project announcement. The project generated a good amount of buzz around the proposal, although the original scope and timelines have changed since.

&nbsp;

## So What Exactly is Bitshares?

&nbsp;

BitShares is a blockchain based crypto-currency, like Bitcoin, but with a major difference: bitshares can be used as a collateral against something called BitAssets. BitAssets are real-life entities, such as bitUSD, bitBTC, etc. These track the real-life price of the underlying. Therefore, bitUSD tracks the price of USD, BitBTC tracks the price of Bitcoin, etc. How does BitBTC track  the price of Bitcoin? Through market consensus (prediction markets), i.e., if the price rises too much, the market participants will have an incentive to short bitBTC and if the price falls too much, they’ll have an incentive to go long bitBTC.

&nbsp;

To simplify, bitshares can be used to buy or short BitAssets, which can be anything from bitGold to bitAAPL, which track their underlying. BitAssets are the derivative products, and you can involve in a number of trades using them. This is much more flexible than just the Bitcoin protocol. For instance, through BitAssets, you can short bitBTC and assuming the price of bitBTC tracks BTC, you’ve effectively shorted BTC.

&nbsp;

You can also create much more complex pairs. **For example, you can buy the ‘currency pair’ BTC/Gold through bitBTC/bitGold**. Or you can trade the ‘currency pair’ bitAAPL/bitOIL (trading the value of Apple Stock to Oil Price). This is therefore a blockchain based solution to trading real-life commodities and entities.

&nbsp;

The real challenge is going to be to make sure that the BitAsset actually tracks the value of the underlying, i.e., bitGold should be able to track the price of Gold, which is how bitBTC/bitGold will track the value of BTC/Gold, for example.

&nbsp;

To recap: ***BitAsset = Derivative on Asset, bitshares = Collateral against your BitAsset position, Asset = underlying real-life entity that BitAsset will track***

&nbsp;

The tracking is enabled using collateral obligations, margin calls and dividends. These are subject to change, so I discuss them below in the FAQ section.

&nbsp;

This can still be confusing, so I’ve created a FAQ section below. Hopefully this will answer a lot of questions that you have.

&nbsp;

## FAQ Section

&nbsp;

**Why should I own bitshares?**  
There are several things you can do with BitShares if you own them. Broadly, these are classified into ‘**Savers**‘ and ‘**Speculators**‘. The incentive for savers is that BitAssets pay dividends whereas real-life entities don’t. Put another way, if you hold bitGold for a year, then convert all of that back into physical gold, you’ll end up with more gold than you started with, assuming bitGold tracks Gold prices perfectly.

&nbsp;

From the CoinDesk article on the same topic,

&nbsp;

> *“If you own bitBTC you can earn dividends on your bitcoins,” said Larimer. “If you have a thousand bitcoins and you convert them to bitBTC, and then you hold it for six months, then you convert the bitBTC plus the dividends you received back to bitcoins, you’ll end up with more bitcoins than you started with.”*

&nbsp;

This comes from dividends paid. BitAssets pay dividends.

&nbsp;

Speculators are in the game because they want to make short-term profits, just like traders on Wall Street. If they see that the price of bitLTC is undervalued, they will go long bitLTC in anticipation that bitLTC will eventually find its true price of LTC in the real-world. The opposite happens when BitLTC is overvalued, i.e., the speculators will short bitLTC until it finds the real-world price of LTC.

&nbsp;

**So I have 1 oz of gold today. How do I get more than 1 oz of gold in a year?**  
Your conversion pathway would be this:

1 oz of Gold -> x bitshares -> 1 BitGold

After 1 year,

1 bitGold -> y bitshares -> (1+n) oz of Gold, where n is positive.

&nbsp;

You can do the exact same thing with Bitcoin or any other Asset that you like. This of course assumes that the price of bitGold tracks the price of 1 oz of Gold perfectly.

&nbsp;

Note that this is independent of the value of x and y above. Also, n cannot be determined beforehand because it depends on the network, the number of trades done, number of margin calls, etc.

&nbsp;

**Why should I go long bitBTC?**  
There are 3 main scenarios I can think of why you might want to go long bitBTC:

&nbsp;

1. You should go long bitBTC for the exact reason stated above – if you start with 1 BTC, convert that to bitshares and own bitBTC. Hold on for a year. Now exit your bitBTC long position and sell your Bitshares in the market for BTC. You will now own more than 1 BTC.

&nbsp;

2. You can also go long bitBTC if you are a speculator and if you think bitBTC is undervalued. In that case, you’ll wait for bitBTC to rise to equilibrium to track real BTC price, and then exit your long position soon thereafter.

&nbsp;

3. Also, if you are trading currency pairs, e.g. bitBTC/bitUSD, then you go long bitBTC.

&nbsp;

**Why should I short bitBTC?**  
There are 3 main scenarios I can think of why you might want to short bitBTC:

&nbsp;

1. Speculation: short term BTC price not tracking actual BTC price. In this case, you will short bitBTC and wait for the price to correct. When it does, you make money. The more the market participants and greater the depth of the market, the fewer such opportunities there will be.

&nbsp;

2. Bet on bitshares increasing against BTC: This is a unilateral short position in bitBTC against bitshares. If you think bitshares will increase in price against BTC, you might want to short bitBTC and go long bitshares instead. The reason you would not simply hold on to bitshares is because the short position in bitBTC can give you more leverage and therefore higher profits.

&nbsp;

3. Currency pair trading: If you want to trade, say, Gold/BTC, then you would want to go long bitGold and go short bitBTC. All currency pairs with <Asset>/BTC will need a short position in bitBTC.

&nbsp;

**There is no real Gold backing bitGold. How does it have any value at all then?**

&nbsp;

There are no real assets behind BitAssets, i.e., there is no gold in a vault backing bitGold. However, bitGold is backed by an equivalent value of bitshares, so it isn’t like it isn’t backed by anything. If you want bitGold, you need to put up collateral in the form of bitshares. Here’s a <a href="https://bitsharestalk.org/index.php?topic=1690.msg18783#msg18783" target="_blank">quote</a> from Daniel Larimer, the founder of Invictus Innovations &#8211;

&nbsp;

> bitGold is lent into existence like a Gold Bank Note from back in the day.  When you went to get a mortgage on your house you promised to pay the bank 100 oz of Gold and pledged your house as collateral.  In exchange the Bank promises to pay you 100 oz of Gold On Demand by either giving you bank notes or a balance in your checking account.  They never actually gave you the gold you supposedly borrowed from the bank and instead played a fancy game of IOU swapping.   An IOU from the bank is worth more than a personal IOU and therefore the bank charges you interest.   The bank also demands collateral because they need to have the ability to make good on their IOU or there will be a bank run.  Namely, if you don’t pay the bank is still solvent so long as the collateral can be seized and sold to cover the loan.
> 
> &nbsp;
> 
> bitGold is like a bank note backed by Stock in Bank of BitShares.   Someone had to borrow it and pledge Stock as collateral.  Just like with a real bank loan, you can only borrow up to 50% of the value of the collateral.  Just like a real bank loan, if the value of the collateral starts to fall the bank can foreclose or demand you put up extra money.   Unlike traditional bank loans, Stock in Bank of BitShares is far more fungible and liquid than title to a unique house.    In effect, a ‘bank run’ just means loans get called and a short squeeze begins, the short squeeze represents an opportunity to open a new short position and profit when the price settles down post-squeeze.
> 
> &nbsp;
> 
> In other words, bitGold is a promise to pay 1 oz of gold worth of bitshares.   From day to day the number of bitshares you receive for your BitGold will change, but those bitshares will always equal about the same value as 1 oz of gold.   The way the price tracks is very similar to how prediction markets can track the value of abstract ideas.

&nbsp;

**Will the price of bitBTC really track the price of Bitcoin?**  
The way the price of bitBTC is supposed to track the price of Bitcoins is through a prediction market system. The way BitShares is designed, if the price of bitBTC falls below the price of BTC, longs have an incentive to buy bitBTC and if bitBTC rises above the price of BTC, shorts have an incentive to short bitBTC. See the above sections on why you should go long/short on BitAssets. There are no centralized price feeds or anything of that nature (e.g. Mastercoin). Instead, the whole price tracking is supposed to take place through a free marketplace, with people bidding, buying and selling.

&nbsp;

There is a lot of research that has gone into prediction markets and how they work. For example, check out this in-depth overpriced book on <a title="Prediction markets" href="http://amzn.to/1hZs0hE" target="_blank">Prediction Markets</a>. The tracking will be more accurate as there are more participants in the system. Judging by the interest in the BitShares project, this doesn’t seem like a huge impediment. The project isn’t completed though, and honestly, it will be interesting to see how this whole thing pans out. There could be some nice opportunities in the beginning phase. In addition, there are some concerns about possible manipulation by parties that hold a significant number of bitshares. However, that may not be enough to undermine the concept. The marketplace can be very big.

&nbsp;

**Please explain bitshares vs. BitAssets again**

BitShares is just like Bitcoin – it is a blockchain based crypto-currency that does most things Bitcoin does. BitAsset is a virtual derivative product based on any Asset, e.g. bitBTC is a derivative that tracks the price of BTC, bitAAPL is a derivative that tracks the price of Apple stock, etc. The connection between BitShares and BitAssets is that BitShares is the only way to go long/short BitAssets. You will give up possession of bitshares to go long BitAssets or keep bitshares in collateral to go short BitAssets. The whole system is based on bitshares. In the original paper, this is described as ‘Polymorphic Digital Assets’ which means a bitshare can ‘morph’ into any asset really and track its price.

&nbsp;

**What’s the deal with dividends?**  
BitShares promises to be the first blockchain based crypto-currency that pays dividends. However, there are three different types of dividends paid here, so be aware of them all:

&nbsp;

1. Dividends through transaction fees: A part of transaction fees is paid out to all holders of bitshares (and the rest to the miners). This means, you could hold 100 bitshares today, forget about them, and come back a year later and you could have 105 bitshares. The actual value of course depends on many factors such as how many transactions go through the network, the average transaction fees, etc.

&nbsp;

2. Dividends through interest on shorts: The BitAssets that are shorted give up their rights to dividends and these are distributed to the holders to BitAssets; “(shorts) pay interest equal to the dividends they would have received on their collateral”. Note that you will not get this portion of the dividends if you simply hold BitShares, but you must hold BitAssets for this.

&nbsp;

3. Dividends on short squeeze: These dividends are paid to the holders of BitAssets whenever shorts are forced to cover their positions. Every short position needs a collateral 2x the original value. Again, this is only paid to holders of BitAssets, not bitshares.

&nbsp;

There is a fourth type of dividend proposed for all holders of BitShares and BitAssets called inactivity fees but I think this is easy to avoid (someone will just create a wallet that does one transaction automatically when time elapses).

&nbsp;

**What’s the deal with margin requirements?**  
Whenever you are going short on a BitAsset, you need to provide a margin requirement equal to 2x the market value of the BitAsset, in the form of bitshares.

&nbsp;

For example, if you want to short 1 bitBTC and the current market price of BTS/BTC is 0.1 (meaning 1 BTC is priced at 10 time BTS i.e., 10 bitshares) then you need to provide a margin of 2 x 10 = 20 bitshares on this short position. If the price moves unfavorably to the short, then there is a short squeeze wherein the protocol automatically sells these 20 bitshares to cover the short position. The proceeds are paid out as dividends to all the holders of bitBTC.

 [1]: http://bitshares.org/blog/wp-content/uploads/2014/06/blog-bts-guide1.jpg