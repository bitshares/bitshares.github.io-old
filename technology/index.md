---
layout: default
title: Technology
---

# Technology

The world of commerce is moving faster than ever, but not all businesses can keep up.
Many modern financial tools can be too costly, clunky, or unreliable for today's businesses.
Poor tools lead to missed opportunities, and missed opportunities don't lead to progress.

**BitShares** is leveling the playing field. We are empowering businesses with financial tools reaching
new levels of efficiency, usability, and transparency.

Our platform puts the power of self-enforcing financial contracts into the hands of businesses and individuals, and it's ready today.

Self-enforcing contracts--commonly known as **smart contracts**--are computer protocols that help facilitate financial transactions just like normal
financial contracts, but with one important difference: they are automated!

*insert example here?*

Compared to the settlement of normal financial contracts, this type of automation provides the following benefits:

- freedom, accountability, security (identity theft)
- Smart contracts aim to provide security superior to traditional contract law and to reduce other transaction costs associated with contracting
- lowering costs
- level playing field
- predictability
- transparency
- reliability
- ease of use
- profitable new business models

The BitShares platform itself is run and maintained by the **BitShares community**--an open consortium of individuals and organizations committed to providing universal access to the power of smart contracts.

Working together, this community has designed and developed the BitShares platform to include numerous innovative features which are not found elsewhere within the smart contract industry:

{% assign technologies = (site.technology | sort: 'priority') %}
{% for technology in technologies  %}
### <a href="{{ technology.url }}">{{ technology.title }}</a> - {{ technology.subtitle }}
{{ technology.summary }}
{% endfor %}

--------------

### Learn More
See our roadmap for future plans or come join the discussions on our forum!
