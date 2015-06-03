---
permalink: /zh/technology/
layout: index_tech
title: Technology
---

# Technology

The BitShares platform itself is run and maintained by the **BitShares community**--an open consortium of individuals and organizations committed to providing universal access to the power of smart contracts.

Working together, this community has designed and developed the BitShares platform to include numerous innovative features which are not found elsewhere within the smart contract industry:



{% assign technologies = (site.technologies | where: 'lang', page.lang | sort: 'priority') %}
{% for technology in technologies  %}

### <a href="{{ technology.url }}">{{ technology.title }}</a> - {{ technology.subtitle }}
{{ technology.summary }}
{% endfor %}
