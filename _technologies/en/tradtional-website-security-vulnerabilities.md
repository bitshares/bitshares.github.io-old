---
permalink: /technology/traditional-website-security-vulnerabilities/
title: Traditional Website Security Vulnerabilities
subtitle: Significantly reduce the likelihood of security breaches.
image: ../images/frontpage/icon-bonds.svg
priority: 1
summary: >
  Traditional websites are insecure at a structural level that cannot be fixed without fundamental architectural changes.
---

Traditional websites are known to suffer from many kinds of vulnerabilities that are difficult to defend against because they depend upon developers being diligent at all times. There are so many different attack vectors that no one is able to be aware of and defend against them all. Web development, and server security are two different areas of expertise and few people have mastered one, let alone both. 

Website security is like trying to secure a castle with 1000 entrances and many secret passages with only a handful of security guards. Throw in a team of construction workers tearing down walls, adding new entrances and wings to the castle around the clock and you can see how difficult it would be to make sure no one leaves a window open or door unlocked. 
Most of these vulnerabilities can actually be traced back to poor software and security architecture. It doesn’t matter how much lipstick you put on the pig, you cannot fix a poorly designed security architecture with a patchwork of best practices, defensive programming, and an army of testers. By adopting a [blockchain architecture](/technology/secure-by-design/) applications can be built on a solid foundation makes it difficult or impossible to introduce certain security vulnerabilities. 

To better understand tremendous benefits realized by using a blockchain, let's review how a typical website application is structured. First a user logs into a server by providing a username and password. The server checks the password and then marks the session as “authenticated”. At this point in the process there are already two structural vulnerabilities that are the source of many attacks.  

1. By revealing the password to the server, the user is giving the server access to their secret which may be used with other services. Most users reuse passwords despite heroic efforts taken to discourage it. If a server is compromised or someone manages a man-in-the-middle or phishing attack then a user’s password would be compromised for many different sites.

2. After the password has been authenticated, the authentication is saved in a way that could be compromised without an extremely careful implementation.  Session hijacking is one of the most common website vulnerabilities. The complexity and nuances involved in doing this right mean the only practical solution is to use a framework. But even frameworks can have bugs and failure to keep them up to date can leave a website vulnerable.
### Authorization, Validation, and Implementation Bugs
Assuming login and authentication are complete, the user then submits a request that requires their permission. This request gets processed by a script on the server which must validate the request and then modify the database.  At this point there are three new vulnerabilities that are introduced. The first is ensuring that the user is authorized to perform the action, and the second involves making the proper updates to the database. It is easy to overlook an authorization check and even easier to let unfiltered user input result in a SQL injection attack. Using proper frameworks can help minimize these attacks, but even the best framework cannot protect against the third vulnerability, programer error. A bug in the database update logic could result in the wrong records being modified, data being deleted, or changes being skipped all together. These kinds of bugs can end up corrupting your database in a way that is difficult or impossible to detect and/or correct after the fact.

### Simultaneous Read / Write Access Bugs

Even if you have the best programmers on the market who deliver a web application free from SQL injections, session hijacks, and logic bugs the website is still vulnerable. Software that works perfectly for a single user accessing the database can break when multiple users are accessing the site at the same time. In the time between read, calculate, and write requests the database could have been changed by another user (or even the same user). Those changes in turn could invalidate the change. 

For example a website attempting to implement financial accounting could end up corrupted if the script that processes and validates a transfer request is executed at the same time.  If two requests come in at the same time attempting to transfer from Alice to Sam and Bob then the application could easily end up in an inconsistent state if both scripts read Alice’s balance of $100, verify that it is greater than the transfer amounts of $75 and $65, and then increment Sam and Bob’s account by $75 and $65 respectively.  After processing both transfers it is possible for Alice to have $25 or $35 dollars and for an extra $65 to end up in either Sam or Bob’s account. 

Smart developers design systems with atomic transactions and other techniques to mitigate these issues in financial applications. It requires diligent developers with attention to detail to get this right. In most cases applications start out simple and are dealing with use cases that are not as closely scrutinized as an accounting system (such as tracking up/down votes on a forum). As the application grows and more developers start interfacing with the database from more places it becomes practically impossible to ensure that all data remains consistent. 

These race conditions become the foundation for security vulnerabilities. 

### Server Vulnerabilities 

Even if the web application is free from all software bugs, the website is still not secure. A misconfigured web server, an open port, a poor administrator password, a bug in 3rd party software, or a corrupt employee can result in the database being modified, deleted, or otherwise corrupted without any trace or ability to automatically detect and recover.

In a forum application, the attacker can steal any user’s identity by impersonating them on the forum. This type of attack can cause people to lose money or otherwise be defrauded. In a financial application it means balances can be changed. In a legal application, it means evidence can be doctored or deleted without a trace. 

These are perhaps the worst vulnerabilities because there is no foolproof solution. It isn’t possible to defend against an “inside job”. It becomes near impossible to detect a problem and even if the problem is detected it may not be possible to correct it. There are so many different pieces of software running on every machine that new zero-day exploits are being found every week. Even the best server administrator cannot keep their software free of these exploits.

