---
title: Community Questions for the Development Team
---

Prior to the announcement, the BitShares community was asked to collect a set of their concerns that they would like
answered together with the announcement.

<!--more-->

1. **How fast is BitShares 2.0 really going to be (in TPS)?**

   BitShares 2.0 will be capable of handling over 100.000 (100k) transaction per second on commodity hardware with
   parallel architectural optimizations in mind. You can find more about how the performance improvement has been
   achieved in the corresponding [technology page](/technology/high-performance-and-scalability){:target="_blank"}. The measurement parameters and a discussion is given in a separate
   [blog post](/blog/2015/06/08/measuring-performance/){:target="_blank"}.

2. **Will we see approval voting for hard forks?**

   Yes. In BitShares 2.0, not even the core developers will be able to modify the protocol at will. Hard forks will only
   be accepted by the protocol with BTS holder approval.

3. **Will there be a referral system available at launch?**

   Yes. And you can earn up to $80 per user (per lifetime) referred.

4. **Are Turing complete scripts/applications on the roadmap?**

   We are considering Turing complete models which are economically viable.  There are several ideas about this around
   the office, and we plan to try some of them out in due course.

5. **Will the separated Worker/Delegate/Signer proposal be implemented in time?**

   Yes. In BitShares 2.0 we will see workers, who grow and development the ecosystem, block signers (called witnesses)
   to ensure block chain security, and delegates which define the variable settings of the
   block chain, such as block interval, price feeds, and more.  Any changes to the variable settings have an
   approval period, ensuring that BTS holders have the final say in the chain parameters.

6. **What has been done to stabilize the user interface and make it user friendly/more responsive?**

   A lot has been done to this regard. Mainly, the full client has been separated into a lightweight client which
   connects to a set of trusted servers, and an optional core client that handles the full block chain and P2P
   networking. Furthermore, the lightweight client has been rewritten to employ next generation web technologies
   (websockets, react.js,...) to ensure a highly responsive interface.

7. **Can we expect a fast, professional GUI experience within this year?**

   Absolutely! With the move to react.js and websockets, the user interface will be much more responsive, stable and
   professional looking.

8. **Will the new client be more resource efficient?**

   In BitShares 2.0, communications with the core client are handled with the websockets protocol. Thus the core client
   could be either run on a separated machine, or by some else entirely on a trust-less basis. The BitShares network
   will be entirely accessible via web browser, either hosted locally or by a third party service provider similar to
   blockchain.info (with private keys being stored locally only!). This also makes the access to the BitShares network
   TOR compatible if required.

9. **Have there been any ideas to increase voting participation (e.g. cold storage voting, simplified voting procedure)?**

   Besides cold storage voting which will be available in BitShares 2.0 too, the block chain supports transfer of voting
   power to someone else without risking funds. Furthermore, with BitShares 2.0 the BitShares funds do not need to be
   moved entirely to vote with your full stake, which simplifies the voting process to a single "Apply" button press.

10. **Will we see relative orders in the decentralized exchange?**

    There is no plan to add relative orders, as part of the effort to reduce dependence on the price feed long-term.

11. **Will I be able to use bitUSD as collateral to short a bitAssets?**

    Yes. BitShares 2.0 goes even further and offers a far better alternative: Collateralized Bonds. Collateralized Bonds
    enable arbitrary shorting between any two assets, guaranteed interest, and no risk of being force settled.   This
    system privatizes the yield to individual bonds and the terms and leverage available can be far more flexible.  In
    effect, BitUSD becomes cash and a Bond becomes a Certificate of Deposit.

12. **Will we be able to close short orders using the collateral?**

    Users will be able to adjust their margin call price to trigger an early margin call, which will close out your
    short position.

13. **How can KYC and AML be acknowledged in BitShares such that it does not affect BTS holders?**

    KYC/AML are supported for user-issued assets, but not BTS, thus it does not affect BTS holders, but only users who
    wish to hold a restricted token.  Businesses that run on top of BitShares and issue their own UIA (user issued asset),
    such as gateways and merchants, will have tools to help their UIA comply with their local KYC, AML and CTF regulations.
    These tools will only affect users who own such UIA's.

14. **What has been done to attract more 3rd party developers?**

    The API has been improved significantly to allow fast and reliable integration via websockets and push
    notifications! Furthermore, a lot of effort has been taken for proper documentation.

15. **What measures have been taken to ensure that newly written code does not introduce many bugs or reveal hidden design assumptions that are no longer valid?**

    While it's impossible to guarantee any code is bug-free, we have been writing unit tests, integration tests, and
    regression tests with every new feature implemented. Our tests currently exercise around 90% of the code, and we're
    going to be increasing that number before launch.
