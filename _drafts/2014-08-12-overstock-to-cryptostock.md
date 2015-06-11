---
title: Overstock to CryptoStock
author: bitshares
layout: post
permalink: /overstock-to-cryptostock/
slide_template:
  - default
pexeto_video:
  - 
categories:
  - News
---
The crypto-currency industry has been abuzz ever since Wired published an article entitled “Overstock’s Radical Plan to Reinvent the Stock Market With Bitcoin.” Patrick Byrne, CEO of Overstock.com, has seen firsthand how Wall Street has been corrupted to the core, and he’s eager to do something to fix it.  He has identified two primary sources of corruption: centralized clearing (exchanges) and fractional reserve banking. These systems enable unscrupulous insiders to sell shares in companies that don’t exist while allowing investors to exploit loopholes in stock settlement, such as naked short sales, harming public companies and the economy as a whole.

[<img class="alignnone size-full wp-image-12075" src="http://bitshares.org/blog/wp-content/uploads/2014/05/bts-banking-header-4-1184x662.jpg" alt="bts-banking-header-4-1184x662" width="1184" height="662" />][1]

The primary question Byrne has been concerned with is, “How might a public company go about issuing a crypto-security?” Earlier this year, he and others at Overstock held discussions on this very subject with developers of Bitshares and Counterparty, platforms that aim to extend Bitcoin technology to enable securities issuance and trading without the need for third-party brokers or centralized exchanges. To foster discussion on what might be involved in issuing a cryptosecurity, Overstock recently launched a web page editable by anyone. The new webpage has sparked a wiki-war over the merits and drawbacks of a dozen or so “Bitcoin 2.0” crypto-security platforms either on the market or close to launch. In my opinion, two systems, NXT and Bitshares, appear to have emerged as the leading contenders in the Overstock wiki arms race. Both of these systems provide built-in, decentralized exchanges that allow users to issue their own assets (though the SEC may call the assets “securities”, depending on whether issuers make any promises with respect to the assets).

Do any of the existing technologies offer a ready-to-go solution with which a public company could list a new crypto-security? At the current time, none of the existing systems seems to meet all of the regulatory and business requirements for a successful crypto-security issuance. Even if a satisfactory platform did exist, a crypto-security issuer would no doubt need to work closely with developers to customize their blockchain to fit their particular circumstances and goals.

In my opinion, the primary difficulty with existing platforms is that, in most jurisdictions around the world, it is illegal for a public company to issue shares that function effectively as bearer shares. The essence of bearer shares is that they are freely transferable securities that are “owned” by whomever holds them, and by possession alone they demonstrate participation in a company. By contrast, with registered or conventional shares, the name of the owner is included with a share and will also be entered in the registry of company shareholders. Changing the ownership of conventional shares requires a change in the share endorsement and registry.

With bearer shares, since no name is included, any person who holds them in their possession is recognized as the owner. If an owner of bearer shares wishes to transfer them to a third party, it suffices to just hand over the relevant certificates. There is no need for any paperwork or changes to the registry of the company (except for anti money-laundering measures in certain jurisdictions) because only the amount of bearer shares that were issued to create the company and their numeration are shown, without making any reference to their owners. Thus, transference of bearer shares is similar to the operation of a cashier’s check, whereby any person presenting it can collect the amount contained therein.

The legal and regulatory measures many countries and organizations have been enacting against money laundering and tax fraud have created a significant stigma around bearer shares. Pressure on the governments of widely-used tax havens has forced most offshore jurisdictions to restrict the use of bearer shares. Normally, these constraints take the form of rules that serve to immobilize securities. That is, bearer shares are required to be in the custody of banks, trust firms, or a registered company agents who usually must maintain a record of the owners. The objective of such measures is to keep track of any change in ownership of the company and to be able to determine at all times who holds the legal ownership. With such restrictions, not only is the raison-d’etre of bearer shares lost, but they are often not in the hands of their rightful owners, making their transmission more complicated.

### **How to Legally Issue a Crypto Security**

The solution to Byrne’s problem lies in finding a crypto-system that supports the issuance of registered or conventional shares for which the owners’ names are included and tracked in the register of company shareholders. In effect, the crypto-system’s blockchain itself would serve as the register of shareholders.

While some crypto platforms, such as BitShares with its TITAN technology, already enable users to transfer shares to other users by account name rather than account number, no system currently in use supports the restriction of share ownership to certified identities. The BitShares system aims to be the first to provide the market with a practical, easy-to-use solution to this critical problem.

The solution implemented in the BitShares system would be very simple. An Identity Authority would be required to sign a BitShares account with a certification that the owner has provided the necessary Know Your Customer documentation. Then, the BitShares account would need to digitally sign the shareholders agreement and release the shareholder’s identity information to Overstock. After these signatures were place, then&#8211;and only then&#8211;would the blockchain allow a particular account to buy, sell, send, or receive the relevant securities. Such a system might not seem ideal from a crypto-anarchist’s point of view, but from the perspective of a company like Overstock it would help them achieve a primary goal: the creation of an honest and transparent securities market, one that would be provably free of fractional reserves, naked short sales, and high-frequency trading.

&nbsp;

### **Better Market Algorithms**

> “Byrne says that one of the things he’s trying to eliminate is high-speed trading that serves no real purpose”

In today’s world of computerized trading on Wall Street, the markets move at nearly the speed of light, with trades executed in milliseconds. This type of speed is not possible in a decentralized system because, even moving at the speed of light, information would need 200 milliseconds or so to circumnavigate the globe.

The speed barrier faced by decentralized systems is no problem for Byrne’s vision; indeed, it is consistent with his goal of eliminating high-frequency trading. In fact, trading speed is not the real issue facing decentralized trading systems. The critical issue instead is how to remedy a fundamental flaw in the order-matching algorithm that traditional stock exchanges use. What is a market price, really? It is fundamentally a collective judgment about the value of a company. As such, it should only change when new information becomes available and can be processed by the shareholders themselves. Human judgement cannot possibly operate at 200 milliseconds, and it is challenged to operate on the shortest time intervals (10 seconds) currently supported by BitShares or other decentralized blockchain systems.

High-speed trading is the result of Wall Street insiders attempting to “front-run” orders placed by people who have access to real information. When someone learns some news that causes them to want to buy, a high-frequency trader can quickly see the buy orders within milliseconds, enabling them to place automated trades to scoop up any asks lower than the buyer’s bid and then sell to the buyer with almost no risk. This is just one of the many games that high-frequency traders may engage in.

BitShares confronts this problem by implementing a new matching system that effectively eliminates front running by insiders. All executed orders always receive the price that was requested&#8211;nothing more and nothing less. There is no opportunity for high-frequency traders or front-runners to squeeze risk-free profit out of market participants by executing orders that steal some of the overlap between the bid and ask.  Traditional order-matching algorithms that promise to give a trader the best price below his bid are an illusion because anyone else located physically closer to the exchange can capture much of the gains with little or no risk, leaving the buyer with little more than he asked for.

In essence, the blockchain becomes the ultimate insider. What this market algorithm does is take all of the surplus that could have been earned by front running (the overlap between bid and ask) and collect it as fees for the network. This algorithm ensures that market participants place orders at exactly the prices they are willing to pay based upon their opinion of fair value. As a result, market participants now face less price risk in the execution of their orders. By removing the profit potential from front-running, BitShares is the only system to date that is less likely to be vulnerable to attacks by high-frequency traders attempting to squeeze risk-free profits out of bid/ask overlap.

A beneficial side effect of the BitShares matching algorithm is that traders attempting to manipulate the market by “walking the book” in a single trade will face a much higher cost than traders who walk the book at a slower pace. Thus, once again, the trading algorithm implemented by BitShares punishes “fast traders” and rewards “value traders”.

&nbsp;

### **Eliminating Fractional Reserves**

There is one other aspect that companies looking to list their shares on a decentralized exchange must consider: what will the newly-listed shares be traded against? In the case of all existing crypto-security systems (except for the soon-to-be introduced BitAssets in BitShares X), the only thing that new company shares can be traded against is shares in the system (e.g, units of NXT) or shares in other assets listed on the system. This means that

if Overstock wanted newly-issued shares in a crypto platform to trade against USD, then someone would have to issue bearer bonds denominated in USD on the platform. These bearer bonds would be a promise to pay $1 on demand and thus would no doubt be a second highly-regulated security.

In this scenario, Overstock would likely have to issue its own Overstock USD bond to trade on the system against the own shares. This once again opens up an enormous regulatory challenge centered around Know Your Customer laws. If Overstock USDs are not part of the solution, then the only alternative would seem to be USDs issued by some exchange that is subject to regulations and potential fractional reserve issuance.

Fractional-reserve issuance is one of the primary issues Patrick Byrne has identified that needs to be resolved. It is counterproductive to rely on crypto-IOUs for users to trade in a newly-issued crypto-stock. After all, using a blockchain for order matching would seem to be of little advantage if management of IOUs still requires relying on third parties. Furthermore, absent crypto-dollar IOUs, the only assets left for Crypto-Overstock shares to trade against would be other crypto-assets that would have market capitalizations equaling only a small fraction of Overstock’s.

Eliminating the need for cyrpto-IOUs is where BitShares X, with its internal BitUSD asset collateralized by shares in BitShares X itself, provides a unique advantage over all other crypto systems on the market or in public development. BitUSDs are not an IOU issued by a central party. Rather, they are a crypto-asset that has no counterparty, is not a security, and confers no legal obligation to any party. They are created by free market forces, and by design each unit of BitUSD is collateralized, i.e., backed by 1.5 to 2 dollars worth of BTSX and fully backed by the Bitshares network.

With BitShares X, companies like Overstock can allow their shares to trade against trust-free assets pegged to the dollar, gold, silver, or other national currencies.  This provides a significant advantage over all other systems known at this time.

&nbsp;

### **Conclusion **

In the near future, the BitShares X system, with its certified accounts and collateralized assets such as BitUSD, will be able to meet the regulatory, philosophical, and business requirements outlined by Mr. Byrne. BitShares X will resolve the problems arising from fractional reserve banking, naked shorting, and high-frequency trading manipulation. An equally important advantage of BitShares is that its developers are not simply faceless identities hiding behind anonymity on the internet; the leaders within the BitShares ecosystem are real people who will be able to draw upon their expertise to help customize solutions to suit the needs of Overstock and other public companies.

As exciting as it would be to see Overstock or another company issue a crypto-stock in the next few months, I think it would do far more harm than good. Forging blindly ahead with issuance of a crypto-security before taking the time to make sure regulatory and business objectives are met could create confusion and distorted public perceptions, thus substantially delaying the day that crypto-securities are widely accepted among market participants. Careful evaluation of the various issues and risks from regulatory and business perspectives can help ensure that the amazing potential benefits of being able to issue shares on a crypto-ledger are realized.

 [1]: http://bitshares.org/blog/wp-content/uploads/2014/05/bts-banking-header-4-1184x662.jpg