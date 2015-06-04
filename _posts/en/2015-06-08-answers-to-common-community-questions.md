---
title: Answers to Common Community Questions
---

--------

Prior to the announcement, the BitShares community was asked to collect a set of their concerns that they would like 
answered together with the announcement. Here are the answers:

1. How fast is BitShares 2.0 "really" (in TPS)?

   BitShares 2.0 will be capable of handling over 100.000 (100k) transaction per second on commodity hardware with
   parallel architectural optimizations in mind.  

2. Will we see 'voted' hard forks?

   Yes. In BitShares 2.0, not even the Core Developers will be able to modify the protocol at will. Hard forks will only
   be accepted by the protocol with shareholder approval.

3. Will there be a referral system available at launch?

   Yes. And you can earn up to $80 per user (per lifetime) referred.

4. Are Turing complete scripts/applications on the roadmap?

   We are considering turing complete models which are economically viable.  There are several ideas about this around
   the office, and we plan to try some of them out in due course. 

5. Will the separated Worker/Delegate/Signer proposal be implemented in time?

   Yes. In BitShares 2.0 we will see workers, who grow and development the ecosystem, block signers (called witnesses)
   to ensure blockchain security, and delegates which define (after shareholder proposal) the variable settings of the
   blockchain, such as block interval, price feeds, and more.

---

6. What has been done to stabilize the user interface and make it user friendly/more responsive?

   A lot has been done to this regard. Mainly, the full client has been separated into a lightweight client which
   connects to a set of trusted servers, and an optional core client that handles the full blockchain and P2P
   networking. Furthermore, the lightweight client has been rewritten to employ next generation web technologies
   (websockets, react.js,...) to ensure a highly responsive interface.

7. Can we expect a fast, professional GUI experience within this year?

   Absolutely! With the move to react.js, websockets, and google material the user interface will be much more
   responsive, stable and professional looking.

8. Will the new client be more resource efficient?

   In BitShares 2.0, communications with the core client are handled with the websockets protocol. Thus the core client
   could be either run on a separated machine, or by some else entirely on a trust-less basis. The BitShares network
   will be entirely accessible via web browser, either hosted locally or by a third party service provider similar to
   blockchain.info (with private keys being stored locally only!). This also makes the access to the BitShares network
   TOR compatible if required.

9. Have there been any ideas to increase voting participation (e.g. cold storage voting, simplified voting procedure)?

   Besides cold storage voting which will be available in BitShares 2.0 too, the blockchain supports transfer of voting
   power to someone else without risking funds. Furthermore, with BitShares 2.0 the BitShares funds do not need to be
   moved entirely to vote with your full stake, which simplifies the voting process to a single "Apply" button press.

10. What can be done to against whales dominating the voting process?

    Practically, BitShares in general is a company and not a democracy. The more BTS stake you own, the more shares of
    the company you own, and the more weights your vote has. This is similar to most traditional business and a
    desirable feature. If an investor asks for more power in the voting process, the only way to get it is to buy
    shares or convince other people to hand over their voting power. However, because the shares are well distributed among
    thousands of network participants and early adopters, such undertaking is very difficult.

---

11. Will we see relative orders in the decentralized exchange?

    There is no plan to add relative orders, as part of the effort to reduce dependence on the price feed long-term.

<!--
(CryptoPrometheus: The following question has been removed, because there is no answer given)
12. Assuming there will not be two different bitUSD, what will the switch from bitasset 1.0 to bitasset 2.0 look like?
//-->

12. Will I be able to use bitUSD as collateral to short a bitAssets?

    Yes. BitShares 2.0 goes even further and offers a far better alternative: Collateralized Bonds. Collateralized Bonds
    enable arbitrary shorting between any two assets, guaranteed interest, and no risk of being force settled.   This system
    privatizes the yield to individual bonds and the terms and leverage available can be far more flexible.  In effect,
    BitUSD becomes cash and a Bond becomes a Certificate of Deposit.

13. Will we be able to close short orders using the collateral?

    Users will be able to adjust their margin call price to trigger an early margin call, which will close out your
    short position.

14. How can KYC and AML be acknowledged in BitShares such that it does not affect BTS holders?

    KYC/AML are supported for user-issued assets, but not BTS, thus it does not affect BTS holders, but only users who
    wish to hold a restricted token. Hence, regular businesses that run on top of BitShares, such as gateways and
    merchants, will be required to comply with their local KYC, AML and CTF regulations.

---

15. What has been done to attract more 3rd party developers?

    The API has been improved significantly to allow fast and reliable integration via websockets and push
    notifications! Furthermore, a lot of effort has been taken for proper documentation.

16. What measures have been taken to ensure that newly written code does not introduce many bugs or reveal hidden
    design assumptions that are no longer valid?

    While it's impossible to guarantee any code is bug-free, we have been writing unit tests, integration tests, and
    regression tests with every new feature implemented. Our tests currently exercise around 90% of the code, and we're
    going to be increasing that number before launch.
