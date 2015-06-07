---
layout: post
lang: en
title:  "Nothing at Stake - Nothing to Fear" 
author: "Daniel Larimer"
categories: article
---

There are many arguments against Proof of Stake, but none of them is more persistent than the fear of the so-called “Nothing-at-Stake” attack.    Under this attack it is claimed that block producers can produce an arbitrarily long alternative chain at any time and then use this attack to “kill” the network.   All that is required is for people to buy up old private keys that at one point controlled a large amount of stake and now no longer do.  They have nothing at stake and thus will sell the keys cheaply.   This so-called attack is a real stretch compared to much more realistic attacks against Proof of Work.  It is high time this argument be let out to pasture.
<!--more-->

Block chains are all about public data and transparency.   Everyone who has been online and maintained connection with the real public chain has no reason to trust or even consider an alternative chain that challenges the public record.   It is indisputable which chain is the real chain and which is a secret impostor.   Clients would have a rolling checkpoint beyond which no alternative chain would be trusted.   The software can easily stay on the proper chain and it is unlikely the attacking chain could even propagate itself across the network. 

In the case of BitShares, every 101 blocks (17 minutes) represents a rolling checkpoint that has been approved by all delegates.   There is never any reason to consider alternative chains more than 17 minutes old.   In fact, the client is unable to resolve forks longer than about 4 hours without manual intervention.    

What this means is that the “Nothing at Stake” attack can only be carried out against a new client with no prior knowledge.   This is where the reality of consensus comes to play.  At the end of the day 99% of all users will be using light clients.   These light clients will be connecting to trusted servers that stay connected to the real network almost 100% of the time.  99% of all businesses accepting payments will be using full clients that keep in sync at all times. 

In other words, the hypothetical attack against a new user connecting to the network for the first time under a compromised Internet connection  and then accepting a large *fake* payment from an anonymous party is such an insignificant risk that it isn’t even worth discussing compared to the risk of forgetting your password or having your wallet hacked. 

Consensus is first and foremost a social phenomenon and technology is merely a tool that helps us unambiguously track and enforce a social convention.   Those that spout Nothing at Stake have merely adopted the naive social convention that “longest chain wins no matter what” rather than a more sensible social convention that “the public record is irreversible after everyone has signed off on it”.     

This leaves only one wild edge case: TEOTWAWKI where all power and internet connectivity is unexpectedly lost for a relatively long period of time.     I suspect that enough people will be able to form a consensus once the power comes back on to bootstrap a chain and continue.   

You have nothing to fear from the so called nothing at stake attack.  Lets talk about the numerous risks of centralizing mining pools that have already executed a double spend attack on Bitcoin.   Lets talk about economic sustainability.   Lets look at the plank in the eye of Proof of Work before considering the relative spec of proof of stake. 





