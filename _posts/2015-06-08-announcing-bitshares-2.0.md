---
title: Announcing BitShares 2.0
---

--------

Today, we are proud to make the biggest BitShares announcement since launching one year ago: the upgrade to BitShares 2.0.
This upgrade represents a new focus and direction for BitShares, and incorporates all the
feedback and lessons learned from the BitShares stakeholders, partners, developers, marketers, and community leaders,
After more than a year of research and development, this upgrade aims to ensure BitShares' success as a leader in
the smart contract industry.

## Overview
- A brand new BitShares codebase has been developed from scratch featuring:

  <ul class="laundry-list">
    {% assign technologies = (site.technology | sort: 'priority') %}
    {% for technology in technologies  %}
    <li><a href="{{ technology.url }}">{{ technology.title }}</a></li>
    {% endfor %}
  </ul>

- This codebase has been designed to solve the largest technical and economic problems with BitShares today
- New competitive features have been added that will allow BitShares to grow and succeed as an industry-leader
- BitShares will be upgraded and **the stake distribution will *not* be changed**

--------

## Why does BitShares need an upgrade?

BitShares has been operating for a year, and the community has identified numerous problems which are currently holding
the system back from its full potential:

- Slow performance and high resource requirements result in poor user experience
- Protocol object model does not match real-world usage
- Achieving performance goals requires fundamental protocal changes
- Non-Standard market matching algorithm discouraged traders
- Insufficient incentives for new stakeholders to help grow the network
- Unpredictable cost structure unfeasible for business operations
- Conflation of consensus protocol and project funding result in mismatched incentives and voter apathy
- Lack of flexibility of system parameters result in an inability to adapt to changing market conditions
- Shortcomings and caveats in internal market rules and incentives result low liquidity and adoption
- Many software bugs (some involving loss of funds) result in loss of faith by stakeholders
- A poor testing framework made it difficult to specify tests and detect regressions 
- Lack of public development roadmap results in confusing and uncertainty for stakeholders
- Lack of third-party documentation prevents integration of services

We aim to address all of these issues all at once with BitShares 2.0. See [Lessons Learned]({% post_url 2015-06-07-lessons-learned-from-bitshares-1.0 %}) for more details.

## How will BitShares 2.0 solve the problems with BitShares today?

BitShares 2.0 was designed to address all of the above lessons. By upgrading, the community will experience:

- A new high-performance protocol and engine, capable of handling over 100,000 transactions per second.
- A new user-friendly hosted wallet interface
- Brand new features
- A new set of tools for community feedback
- A new growth model
- Robust testing infrastuture with over 120 tests covering 95% of the code. 
- A new developer-friendly and extensible codebase
- **No changes to the stake allocation**

See our [technology](/technology) page to learn more!

## What happens next?

We will soon start a public beta testing period to gather community feedback on upgrading the platform.
This will last until the community is satisfied with the new experience, after which an upgrade snapshot date will be
announced with at least 30 days notice.

See our public roadmap for the full timeline!

At the snapshot, the current BitShares network will be shut down and BitShares 2.0 will be launched within hours.
In general, all assets and accounts will be fully migrated to BitShares 2.0.

See the <a href="/migration/">migration</a> page for more details.

## Where can I learn more?

Join the discussion on the forums.

Also explore the links at the top of this page.
