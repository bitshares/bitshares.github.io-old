---
permalink: /technology/architecture/
title: Blockchain Application Architecture
subtitle: An Elegant Architecture for a more Civilized Age
priority: 1
summary: >
  Robust, scalable, and maintainable websites depend upon a solid architecture. By building your web application on a blockchain, you automatically benefit by enforcing a design that follows industry best practices.  

---

In exchange for taking the time to adopt a blockchain architecture, a website gains many architecture benefits, the least of which is the [best possible security](/technology/secure-by-design/). This page will go into greater detail about these benefits.  

### Flux Architecture

Popularized by [Facebook](https://facebook.com), a [flux architecture](https://facebook.github.io/flux/docs/overview.html) utilizes a *unidirectional* data flow that greatly simplifies development and improves maintainability and supports large development teams. The action dispatcher used by Facebook can be replaced with a blockchain. The benefits of the Flux design pattern are well documented and are rapidly being adopted by developers for a reason.

<center>
<img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png" width="75%" />
</center>

### Abstracted Interface

A blockchain logs the self-authenticating actions of every user. These actions are like high-level API calls that are completely independent of any underlying implementation.  This means that the user interface and implementation are decoupled through a well defined, self-describing set of messages. User actions are signed messages rather than calls to [REST endpoints](https://github.com/Mach-II/Mach-II-Framework/wiki/Introduction-to-REST-Endpoints). Business logic becomes a state machine responding to signed messages and populating a database ([SQL](https://en.wikipedia.org/wiki/SQL) or [NoSQL](http://nosql-database.org/)). This business logic is completely independent of web server architecture and language.

### Scalability

A blockchain distributes self-authenticating actions to many computers which can apply the same state machine to generate a fully replicated database (e.g. Flux Store). Browsers can connect to any database and get a 100% consistent state. New servers can be spun up quickly to handle growing demand.

### Interoperability via Proof of Action

Users of your application can generate cryptographic receipts proving their actions on your application. These cryptographic receipts are the foundation of interoperability with other systems. Without a cryptographic receipt integration with third party applications required active participation of three parties. A developer wishing to integrate their application with a user's Facebook account would require the use of [OAuth](http://oauth.net/). Facebook servers must be available to confirm or deny information about a user's Facebook account. If Facebook used signed actions, then a user could prove to a 3rd party that they "*liked*" a particular post or that they were friends with another user. 

### Extensibility & Integration

Applications can be built that incorporate the combined state of multiple public and private blockchains. This integration can happen seamlessly without the need for systems like OAuth or OpenID which have many security vulnerabilities. Easy integration of new features was one of the prime motivators for Facebook developing the Flux architecture.   

A Cryptonomex blockchain takes care of all of the complexity involved in maintaining a blockchain and allows developers to focus on what matters most, their application business logic.  Applications can be developed in any language, with any database, and any web framework. 

Cryptonomex provides all of the browser-side tools required to transparently manage private keys, action creation, and user authentication and allows web application developers to develop applications as seamlessly as they do with any other Flux library.



