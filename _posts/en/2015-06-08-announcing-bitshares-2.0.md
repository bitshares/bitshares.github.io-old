---
title: Announcing BitShares 2.0
---

The BitShares development team is proud to make their biggest announcement since launching one year ago: the upgrade to
BitShares 2.0.

This is the next step in the evolution of BitShares, and incorporates all of the feedback and lessons learned from the
BitShares stakeholders, partners, developers, marketers, and other community leaders throughout this past year of
research and development.

<!--more-->

Up until now, the core development team has closely controlled the development and direction of BitShares. With
BitShares reaching maturity at version 2.0, the team is ready to remove the training wheels, and let the direction of
all future development be decided completely by stakeholder vote.

To ensure the long-term success of BitShares, as well ensure that all blockchain technology continues to advance and
proliferate, the BitShares core development team will be reorganizing into
[Cryptonomex Inc.](http://www.cryptonomex.com/), an independent blockchain development company. Using the new worker
contract voting system that will be included in BitShares 2.0, this company will continue to develop the BitShares
software, but only as approved by the BitShares stakeholders. With this new structure, BitShares will be more robust,
sustainable, and fair than ever.

## Overview
- A brand new BitShares codebase has been developed from scratch with the following features:
{% assign technologies = (site.technologies | where: 'lang', page.lang | sort: 'priority') %}
{% for technology in technologies  %}
  - [{{ technology.title }}]({{ technology.url }})
{% endfor %}

- This codebase has been designed to solve the largest technical and economic problems with BitShares today
- New competitive features have been added that will allow BitShares to grow and succeed as an industry-leader
- BitShares will be upgraded and **the stake distribution will *not* be changed**

--------

## Why does BitShares need an upgrade?

BitShares has been operating for a year, and the community has identified numerous problems which are currently holding
the system back from its full potential:

- Slow performance and high resource requirements result in poor user experience
- Protocol object model does not match real-world usage
- Achieving performance goals requires fundamental protocol changes
- Non-standard market matching algorithm discourages traders
- Insufficient incentives for new stakeholders to help grow the network
- Unpredictable cost structure unfeasible for business operations
- Conflation of consensus protocol and project funding results in mismatched incentives and voter apathy
- Lack of flexibility of system parameters results in an inability to adapt to changing market conditions
- Shortcomings and caveats in internal market rules and incentives results in low liquidity and adoption
- Many software bugs (some involving loss of funds) result in loss of faith by stakeholders
- A poor testing framework made it difficult to specify tests and detect regressions
- Lack of public development roadmap results in confusion and uncertainty for stakeholders
- Lack of sufficient documentation prevents integration of third-party services

## How will BitShares 2.0 solve the problems with BitShares today?

BitShares 2.0 was designed to address all of the above issues. By upgrading, the community will experience:

- A new high-performance protocol and engine, capable of handling over 100,000 transactions per second.
- A new user-friendly hosted wallet interface
- Brand new financial smart contract features
- A new set of tools for community feedback
- A new viral growth model
- Robust testing infrastructure designed to prevent bugs and regressions
- A new developer-friendly and extensible codebase
- **No changes to the stake allocation**

See our [Technology](/technology) page to learn more!

## What happens next?

As soon as the software is ready, it will enter a public testing period for gathering community feedback. This testing
period will last until the community is satisfied with the new system, after which an upgrade snapshot date will be
announced with at least 30 days notice.

At the snapshot, the current BitShares network will stop producing blocks and BitShares 2.0 will be launched within
hours. All accounts and balances will be fully migrated to BitShares 2.0.

See [Migrating to BitShares 2.0](/blog/2015/06/08/migrating-to-bitshares-2.0/) for more details.

## Where can I learn more?

Explore the links at the bottom of this page.

Also join the [discussion on the forums](https://bitsharestalk.org/index.php/board,5.0.html).

Developers can also explore [latest source code](https://github.com/cryptonomex/graphene).
