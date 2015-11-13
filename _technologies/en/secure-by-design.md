---
permalink: /technology/secure-by-design/
title: Secure by Design
subtitle: Significantly reduce the likelihood of security breaches.
image: ../images/frontpage/icon-bonds.svg
priority: 1
summary: >
   Web security vulnerabilities cost companies millions of dollars every single year and leave lasting damage to corporate reputations. 
   Build your next website on a blockchain and significantly reduce the likelihood of security breaches.
---

## How a Blockchain Dramatically Improves Security

A blockchain architecture changes several fundamental characteristics of your web application that eliminate many of the [traditional attack vectors](/technology/traditional-website-security-vulnerabilities/). The most fundamental change is that the security of the application no longer depends entirely upon the security of server hosting it. It is so radical that the server doesn’t even need to authenticate the connection between the user and the server. A user’s password never leaves their computer and their session cannot be hijacked<sup>1</sup>. 

This is made possible because every request made by the user is signed by the user’s private key. These signed requests become self-authenticating messages. The server receives these self authenticating messages, groups them into blocks and has the blocks replicated and signed off on by several independent servers before anything else happens. Every block references a previous blocks forming what is known as a blockchain.

The result is an immutable, append-only log of self-authenticating messages. This log can be audited and its integrity verified by anyone at any time. Unless every copy of the log is lost the database’s integrity is maintained and unless the majority of the co-signing server keys are compromised it is impossible to create a forged log.

A web application doesn’t even get to process a request until it is irreversibly captured by this secure log. Then the web application is developed as a state machine that processes these self-authenticating messages in a deterministic order and populates a traditional SQL or NoSQL database. The content of the SQL database becomes a calculated by-product of an incorruptible log. 

The result is a software architecture that is free from data race conditions because all modifications are coming from a single source and a processed in order. Furthermore, the system is even secure against bugs in the software because the user requests can be reprocessed after fixing bugs to derive the proper state.

### Decentralized Authentication

Where as traditional databases centralize authentication to an unaccountable server. Blockchains decentralize authentication by logging cryptographic evidence that can be verified by any auditor at any time.  Where traditional databases capture the *result* of user actions, a blockchain captures and logs the *intent* of user actions.  It is decentralized authentication that enables public blockchains to be secure without any centralized (*authoritative*) servers. 

By decentralizing authentication attackers no longer have a single target that would grant them universal access with a single compromise. Instead hackers must target every individual user’s machine and password. When a user's account is compromised, hackers only gain access to that one account. This compartmentalizes security breaches in a way that changes the economics hacking for profit. 

By designing applications to require multi-user (or *multi-device*) authority for critical actions the application can achieve unparalleled security against cryptographic identity theft.

### Limits of Blockchain Security

A blockchain provides tremendous benefits and data integrity guarantees, but it is not a cure-all.  Here are some security considerations that application developers should keep in mind.

**Unauthorized Read Access**

A blockchain is designed to protect against unauthorized database modifications, but is unable to defend against unauthorized read access. This means that a server vulnerability could still expose confidential data unless further steps are taken at the application layer to keep data encrypted. 

**Compromised SQL Databases**

While it is practically impossible for an attacker to compromise the blockchain log, there are still servers and SQL databases in use which could compromise the application “read-only” state. This means that an attacker can still deface a website temporarily. These kinds of attacks may be embarrassing, but now they can be automatically detected and corrected which minimizes the period of time where users were given inaccurate information.

With proper replication of the application to multiple servers that independently derive the read-only SQL database it becomes possible have a user’s browser poll multiple independent sources. A compromise of any individual source would be immediately detected and the user would be able to take the necessary precautions. 

**Compromised Javascript** 

Ultimately all websites are still hosted by servers, and servers can still be compromised. A compromised server could server malicious Javascript designed to steal a user's password and private keys. If this happens any user that logs into their account after downloading the malicious Javascript would have their account compromised. There are many solutions to address this including browser plugins and downloadable web applications. 

### User Controlled Security 

At the end of the day there will always be a trade off between ease of use and security. One of the primary advantages of web applications over downloaded native applications is that users get automatic updates and can access their account from any device. In exchange for these usability enhancing features, users give up some security. With blockchain technology it is now possible for users to take responsibility for their security by taking complete control over their private keys. Users who need paranoid security opt-in to any level of security over their cryptographic identity that they can manage.

## Conclusion 

Blockchains don’t solve all security issues, but they do add an unprecedented level of integrity and audit-ability while being completely transparent to the end user. 


*footnotes*:
<sup>1</sup> Sessions still exist for the purpose of securing read access. An attacker would not be able to use a hijacked session to impersonate you, but they could potentially trick the server into revealing information.
