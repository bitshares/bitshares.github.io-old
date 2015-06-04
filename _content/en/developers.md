---
permalink: /developers/
layout: default
title: Developers
redirect_from:
    - /resources/gateways/
---

# Developers
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis elit mauris, a vestibulum felis rutrum eget. Sed blandit diam id mi efficitur sollicitudin. In in fringilla lectus. Nulla facilisi. Cras scelerisque diam quam, id varius purus consectetur vel. Fusce et posuere ligula, in iaculis diam. Nullam eu mauris eros. Vestibulum at sapien felis.

## Getting started
* Source code
* JSON-RPC API
* Protocol
* Engine
* Examples
* Tutorials

## Gateways
This guide will provide a brief overview of the business opportunities available for those who wish
to become a BitShares Gateway.

A Gateway provides the service of bridging external assets such as fiat dollars, gold, silver, and
bitcoin into the BitShares network. This service is critical to the success of BitShares because the
vast majority of value must enter or exit the BitShares network through a Gateway, Bridge, or
Exchange.

A gateway is a trusted party that facilitates moving value into and out of the BitShares network. To
do this they issue redeemable IOUs as fungible divisible assets on the BitShares block chain. If the
issuer is trustworthy then those IOUs will trade at face value and therefore be useful in trade.
This service is effectively that of a trusted party that facilitates trade among 3rd parties who do
not know each other in much the same way that a bank issues cashiers checks so that 3rd parties can
accept payment without having to worry about a personal check bouncing. Unlike a cashiers check
issued by a bank, the digital IOUs issued by a gateway are far more flexible and therefore useful.

The BitShares network allows anyone to issue digital assets known as User Issued Assets (UIA). These
assets can be used to track shares in a company, deposits in a bank, and reward points among other
uses. Once an asset has been issued it can be freely traded against all of the other asset types on
the network including the fully collateralized market pegged assets known as BitAssets (BitUSD, BitBTC, etc.).

## Gateway vs. Exchange 

Most people who have been around the crypto-currency space for a while are familiar with exchanges.
Exchanges facilitate trade by accepting deposits in two asset classes and maintaining an order book
to enable trade among the assets using the deposited funds. A deposit at an exchange is just
an IOU that is tracked on an private database maintained by the exchange.      

A gateway performs only 1 out of the 3 functions performed by an exchange: accept deposits and issue
an IOU.  Gateways do not need to maintain an internal database tracking account balances nor do they
need to maintain an order book. This greatly simplifies the job of a gateway and minimizes risks
to all parties involved.  

Today when you want to trade bitcoin for US Dollars you must deposit both your dollars and your
bitcoin with a trusted third party.  If that third party happened to be Mt.Gox then you know what
can happen to your bitcoins held on deposit: they can be stolen, lost, embezzled, or seized.  If Mt.
Gox were simply a US Dollar gateway then only the dollar deposits would have been at risk because
all orders and bitshares would have remained on the block chain under the control of the user's
keys. 

As you can see from the Mt. Gox example, a gateway has less than 50% the liability of an Exchange
and users benefit from a global order book with no bitshare withdrawal limits.

<!--
(xeroc: This part has obviously been removed to make things more easy for "average Joe" :) )

Bridges are the future of crypto-currency exchanges for the average Joe.

A Bridge provides the service of converting between bitUSD & USD, bitBTC & BTC, or bitGOLD & gold
for a competitive fixed fee. After the exchange is complete there are no longer an liabilities
between the parties. Over time competition among bridges will move the fee toward 0 and may one day
even reach 0. The most popular BitShares bridge is currently MetaExchange.
//-->

## Generating Revenue as a Gateway 

The primary reason for becoming a gateway is to earn a profit by providing a valuable service to the
BitShares community.  Gateways have many ways of generating revenue.  The most straightforward
method is by charging transaction fees every time someone moves value through your service.   You
can also make money by charging users a fee every time they move one of your assets on the BitShares
network and from market fees on the BitShares network.   In addition to transaction fees of various
sorts, gateways also have an opportunity to generate revenue on the float they hold for their
customers.

## How It Works

Every single Bitcoin exchange is already performing a similar role to a gateway.  Users transfer
funds to the exchange, the exchange tracks how much it owes each user, and when a user asks for a
withdrawal the exchange sends the funds back. While the funds are on the exchange users can quickly
and safely perform trades with other users of the same exchange.

A BitShares gateway does the exact same process, the only difference is that the database that
tracks the users' deposits to the exchange is the BitShares block chain.   When a user transfers
fiat dollars or bitcoin to a gateway, the gateway responds by transferring an IOU asset issued by
the gateway back to the user. When the user returns the IOU to the gateway the gateway sends fiat
dollars or bitcoin back to the user.  

The IOU asset is tremendously useful to users in the BitShares ecosystem because it serves as a very
flexible multi-party escrow asset.   Users will use an IOU USD from a gateway to trade against
BitUSD and/or IOUs from other gateways.    Users will want to store value in BitUSD because it is
mostly free of counterparty risk, but when it comes time to convert BitUSD back to fiat USD they
will do so through a gateway.   

## Legal Compliance 

Any company that takes deposits from customers and facilitates transfers among customers is heavily
regulated in most countries.   These regulations include license requirements, bonds, insurance,
Know Your Customer (KYC) laws, and anti-money-laundering (AML) compliance among others.   The
BitShares block chain provides gateways with all of the tools necessary to comply with these
regulations.

If you are already in this business then you are maintaining a database tracking user deposits and
your database is probably logging every single transaction and balance change.    Your database
knows exactly who is owed what at any point in time.   You also have the power to seize or freeze
user balances at the demand of law enforcement.    BitShares provides you with all of these features
as well including:

  1) Ability to white-list public keys that may control a balance of your asset.
  2) Ability to freeze all funds and stop all trading of your assets.
  3) Ability to transfer any balance of your asset from any user to any other user. 
        
In other words, if you are operating a legally compliant crypto currency exchange, then you can
easily expand your business to becoming a BitShares gateway.  

## Security 

As a gateway you are likely very concerned about the safety of the funds you hold on behalf of your
customers.   Fortunately moving your database from a custom internal system to the BitShares network
provides your business with greatly improved security because you gain all of the benefits of a
block chain.   Every transaction is logged in a public ledger and every balance transfer is signed
and verified by 101 elected delegates distributed around the world.   The open source code is in use
by many different gateways and peer reviewed by the entire industry.  You can rest assured that no
funds will move without being properly signed by the private key of their owner.

As the creator of a User Issued Asset you have complete freedom to honor funds or to reverse
transactions as a result of theft by social engineering or a compromised user key.  No one can
withdraw real fiat USD without your own review of the transaction history.   Any bugs in the
BitShares code cannot result in your gateway losing money because you retain the authority over how
to honor your asset.  

Perhaps the greatest improvement of security you gain by becoming a gateway rather than an exchange
is that you only have to deal in a single asset.   Rather than having users deposit both dollars and
crypto assets to your exchange, you can only allow dollar deposits and issuer dollar IOUs.    The
BitShares block chain can then allow the user to trade directly with other users without having to
transfer the assets to you and thus creating an additional liability of your exchange.

Perhaps the single biggest security liability your exchange faces as a gateway is guarding access to
the private keys that control the user issued asset.   For this reason all User Issued Assets are
controlled by a N of M multi signature system with both cold and hot keys.  You can divide access
control among  many different individuals within your gateway to ensure that no single individual or
single compromised machine can compromise control over your User Issued Asset. This is comparable to
the need to safeguard the private keys of the crypto currencies an exchange holds for its
customers.    It is critical that you guard these keys carefully and keep them in cold storage.

Access to your User Issued Asset is divided between the owner keys which maintain absolute control
and should be kept in cold storage, and manager keys which can be kept on secure "hot" systems.
Every action of the Manager Keys can be undone by the Owner Keys.  This arrangement provides your
organization multiple levels of control and maximum flexibility.

## Unlimited Opportunity 

The BitShares ecosystem is young and growing quickly.  Each day hundreds of thousands of
dollars worth of BitShares are traded and soon that could grow to be millions of dollars.  The
early gateways that establish trust and provide reliable service will likely become the default
go-to gateways, providing them with the opportunity to maximize the volume of transactions on which
they can charge fees. Since BitShares users will likely trust and recognize these companies, they 
might find it easy to expand into other related BitShares servcices such as hosted wallets or even 
becoming a delegate.

## Become a Delegate 
<!--
(CryptoPrometheus: Market cap in following paragraph is incorrect)
//-->
The BitShares community elects 101 paid delegates to help maintain and support the network.  As a
gateway you are already maintaining a full node and keeping up with the latest network upgrades, so
there is almost no extra overhead to becoming a delegate.  Delegates earn over 50 BTS every 17
minutes or about $2500 per month at todays market cap of around $40M.  This delegate pay is already
enough to pay for a part time position necessary to integrate BitShares with your companies database
and website.   As the market cap grows it could potentially fund your business to expand the
services it provides to the BitShares ecosystem.