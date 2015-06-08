---
permalink: /technology/price-stable-cryptocurrencies/
title: Price-Stable Cryptocurrencies
subtitle: The freedom of cryptocurrency with the stability of the dollar.
image: ../images/frontpage/icon-price-stable.svg
priority: 2
summary: >
    A BitAsset is a cryptocurrency whose value is pegged to that of another asset, such as the US Dollar or gold.
    BitAssets always have 100% or more of their value backed by the BitShares core currency, BTS, to which they can be
    converted at any time at an exchange rate set by a trustworthy price feed.   In all but the most extreme market
    conditions, BitAssets are guaranteed to be worth <i>at least</i> their face value (and perhaps more, in some
            circumstances).  Like any other cryptocurrency, BitAssets are fungible, divisible, and free from any
    restrictions.
---

## Background
Cryptocurrencies are unique in that they are the only digital currency that is not someone else’s liability.  They are
fungible, decentralized, and as valuable as the network of users that support them.    Unfortunately, they suffer from
very high volatility, because their perception of value constantly changes as users enter and leave the ecosystem.

The traditional approach to creating a stable asset is to accept deposits and issue a digital token as a claim receipt.
Under this approach, the token is valued by the market as a dollar, discounted by any credit risk associated with the
issuer.   This can work well for transactions, but less well as a form of savings.   History has repeatedly proven that
issuers eventually go bankrupt due to fraud, incompetence, or government intervention.

More recent approaches have used a cryptocurrency as collateral in a [contract for
difference](http://www.investopedia.com/terms/c/contractfordifferences.asp){:target="_blank"}.
Under this approach, two parties take opposite sides of a trade, where one party is guaranteed price stability, and the
other party is granted leverage.    This approach works as long as sufficient collateral exists, and the contract can be
settled by an honest 3rd party with a price feed.  Unfortunately, a contract for difference is not fungible, and has an
explicit settlement date, which means it is not useful as a currency.

## Introducing BitAssets

BitAssets take the concept of a contract for difference, and make the long side fungible.  For the purpose of this
discussion, we will assume that the long side of the contract is BitUSD and that the backing collateral is BTS
(the BitShares core asset). To achieve this, BitAssets use the following set of market rules:

1. Anyone with BitUSD can settle their position within an hour at the feed price.
2. The least collateralized short positions are used to settle the position.
3. The price feed is the median of many sources that are updated at least once per hour.
4. Short positions never expire, except by hitting the maintenance collateral limit, or being force-settled as
   the least collateralized at the time of forced settlement (see point 2).
5. In the event that the least-collateralized short position lacks enough collateral to cover at the price feed, then all
   BitUSD positions are automatically force settled at the price of the least collateralized short.

A simple metric for testing the validity of our claim that 1.00 BitUSD is always worth *at least* $1.00 is to
demonstrate that, if you can find someone willing to sell 1.00 BitUSD for $1.00, that it would be the cheapest option for
buying BTS.   This means that 100% of the buying demand for BTS would be available to give liquidity to BitUSD holders
as a priority over BTS holders.   In the following sections I will attempt to prove that this condition is met.

While the rules are simple, the consequences are less obvious.   Let's analyze this from the perspective of the various
players.

## The Shorter
When deciding a price at which to enter a short order, a trader must consider the risk of forced settlement.   In this
case, no trader will attempt to short at or below the price feed, because they could be forced to settle at the price
feed.   In fact, a smart trader would allow enough of a spread to account for the risk of being forced to settle at a
feed price that was off by a small amount.    In practice, the risk posed by the feed error is balanced equally between
being in the favor of the short and in the favor of the long, leaving only the risk of being forced out of their position
at an inopportune time.

A short can minimize their exposure to the feed by providing enough collateral to keep far above the least
collateralized positions, and thus very unlikely to be forced to settle at the feed or at an inopportune time.

In practice, the only way new BitUSD enters circulation is if there is someone willing to pay enough of a premium to
convince a short to provide guaranteed liquidity at the price feed on demand, while also covering the cost of exchange
rate risk.  This premium will be higher for the backing cryptocurrency in a bear market, and will be lower in a bull market. 

Someone who is short has only one way to exit their position: by buying BitUSD off the market.  This means that a short must
also factor in the risk that the premium may change.  If a short position is entered in a bull market with a 0.1%
premium, it may be forced to exit during a bear market with a 5% premium.  In this event a short position is exposed to
both exchange rate of the dollar vs. BTS and the premium risk.   On the other hand, a short entered during a bear market
with a 5% premium may get to cover during a bull market with a .1% premium.

For all intents and purposes, the premium is expected to move in the same direction as the price, and thus speculators
who only care about relative price changes can ignore the premium.

## The Long (BitUSD holder)
The very first buyer of BitUSD will have to pay the lowest premium set by the shorters.  For the sake of discussion,
let's assume the first BitUSD was created in a bear market and cost $1.05 to create.   The holder of that BitUSD has two
options:  sell it on the market for $1.04, or request forced settlement for $1.00.   Clearly, the forced settlement option
would only be used in situations where there was a decrease in total demand for BitUSD and there were no offers to buy
it above $1.00.

As a trader only looking to trade back and forth between BitUSD and BTS, this premium doesn’t matter. Such as trader is exposed
to volatility in the premium, but that risk is limited to $0.05 in this example.  In practice, the premium is expected to
be relatively stable and predictable.

## The BTS Buyer
A buyer with dollars, looking to buy BTS, knows that 1 BitUSD can be used to buy $1 worth of BTS (plus the current
premium).  He also knows that this premium can never be negative, because of the option to force-settle at the
price feed.    In this situation, he can know with certainty that if he can convince someone with BitUSD to sell for
$1.00, he can buy more BTS than if he simply buys BTS with his dollars directly.    The higher the premium, the more
incentive exists to buy BitUSD for $1.00.

This means that, in a BTS bear market, the BitUSD price gives the highest premium of the BTS price, and BitUSD becomes
the easiest to sell.  In practice, the BitUSD:USD market will reflect the premium, and traders will usually be unable to
find anyone willing to sell for exactly $1.00.

If a buyer is looking to purchase a large quantity of BTS without moving the price, he can start by buying up BitUSD
with dollars.   This will slowly raise the BitUSD:USD price, which is a signal to other market participants. A careful
buyer might be able to avoid signaling the market.   Then, after acquiring the position in BitUSD, the buyer can request
forced-settlement all at once and get the price feed on the entire purchase.

Because all positions and trades are visible on the blockchain, all of this trading activity can be factored into the
price, minimizing any potential profits to be made by attempted manipulation.

## The Merchant

A merchant wants to be able to price merchandise in BitUSD, and obtain real USD in the bank account, in
a reasonable time, with minimal risk.   In this case, a merchant would place BitUSD on the market at
$1 per BitUSD.  As discussed, BTS buyers fight for the opportunity to buy BitUSD at
that price.

A smart merchant might recognize that 1 BitUSD can actually fetch $1 plus a variable premium, and start preferring
that customers pay them in BitUSD at face value.   An even smarter merchant might offer a discount to customers that pay
in BitUSD.

Any way you slice it, merchants have a financial incentive to advertise BitUSD as the preferred payment mechanism, because
they know that $1.00 is the lower bound on what BitUSD is worth.

## The Customer

A customer looking to buy goods and services with BitUSD finds himself paying a premium to acquire BitUSD from the
market.   This means that customers will prefer merchants that offer a discount equal to the premium paid.   On the
other hand, the premium is a wash for a customer that earned BitUSD at a nominal value of $1.00. In fact, the only
people to whom the premium matters are those who are looking to enter or exit the ecosystem.  Once a customer or
merchant is within the ecosystem, it is easy to simply trade BitUSD at parity, even if it is theoretically worth
slightly more outside the ecosystem.

Customers use BitUSD because it provides them the convenience and freedom of a cryptocurrency, and has the lowest
transfer fees of any other payment platform.

Merchants and customers are free to negotiate the best way to split the premium, and the free market will take care of
the rest.  In the mean time, all participants can rest assured that BitUSD is always worth at least $1, and can consider
the premium for entering the ecosystem as a one-time fee.

## Price Manipulation
There is always concern of price manipulation.  Someone with a large amount of money on both sides of a trade can use
their funds to manipulate the markets and thus the price feed.  If the amount of money they lose manipulating the
markets is less than the amount of money they can gain by manipulating the price feed, then it will be profitable to
manipulate the market at the expense of either the BitUSD longs or the shorts.   A low-collateralized short that sees a
large force-settlement order requested can attempt to manipulate the markets and thus the feed against the BitUSD
holder.

The risk of price manipulation is priced into the premium on BitUSD charged by the shorts, and thus should already be
priced into the market.  If price manipulation became a serious problem that caused very high premiums, then it could be
addressed by the price feed producers, who can adopt a moving average over wider time windows to increase the difficulty
of short-term manipulation.   A variety of algorithms could be used to estimate a “fair price” that keeps BitUSD valued
at least $1.00.

In practice, a feed producer can observe the BitUSD-to-USD market as an indicator on which way to adjust the feed.
Generally speaking, the strategy that the feed producers adopt for controlling the feed should be public knowledge,
          because the shorts will ultimately rely on it.  For the feed producers to change strategies in unpredictable
          ways could cause losses to both longs and shorts.

## Black Swans - Extreme Market Conditions

All guarantees of BitAssets are subject to the caveat that a BitAsset can never be worth more than the collateral
backing the least-collateralized short position.  In normal market conditions, the value of the collateral is always more
than sufficient, but, from time to time, markets can rapidly revalue the collateral.  If this revaluation happens faster
than the short positions can be forced to cover, then all BitAssets are liquidated at the exchange rate of the least
collateralized short position.  This is similar to an insolvent bank converting its deposits to equity.

## The Bond Market

Not every short seller will be happy with the rules offer by BitAssets.  Some may want to borrow for a fixed period of time,
with higher leverage, and with no risk of being force-settled.  BitShares offers these speculators the option to borrow
BitUSD on the [bond market](/technology/collateralized-bond-market){:target="_blank"} at interest.   The bond market
allows speculators to leverage any asset against any other, while lenders earn interest on collateralized loans.   A
Bond market is the perfect way for the market to establish a yield curve on BitAssets and free both sides of the market
from dependency on the price feed.

## Privatized BitAssets

BitShares offers entrepreneurs an opportunity to create their own BitAssets with custom parameters and price feeds.

User-issued BitAsset managers can experiment with different parameters such as collateral requirements, price feeds,
force settlement delays and forced settlement fees.  They also earn the trading fees from transactions the issued
asset is involved in, and therefore have a financial incentive to market and promote it on the network.   The
entrepreneur who can discover and market the best set of parameters can earn a significant profit.   The set of
parameters that can be tweaked by entrepreneurs is broad enough that BitAssets can be used to implement a fully
functional prediction market with a guaranteed global settlement at a fair price, and no forced settlement before
the resolution date.

Some entrepreneurs may want to experiment with BitAssets that always trade at exactly $1.00 rather than strictly more
than $1.00.   They can do this by manipulating the forced settlement fee continuously such that the average trading
price stays at about $1.00.   By default, BitShares prefers fees set by the market, and thus opts to let the price float
above $1.00, rather than fixing the price by directly manipulating the forced settlement fee.

## Conclusion

BitAssets are a powerful tool for everyone from speculators and savers, to traders and entrepreneurs. The BitShares
platform provides a toolset with which innovators can experiment to find optimal currency solutions using free market
discovery.
