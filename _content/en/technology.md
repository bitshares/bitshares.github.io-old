---
permalink: /technology/
layout: index_tech
title: Technology
redirect_from:
    - /how-it-works/
---

# Technology

The BitShares platform itself is run and maintained by the **BitShares community**--an open consortium of individuals
and organizations committed to providing universal access to the power of smart contracts.

Working together, this community has designed and developed the BitShares platform to include numerous innovative
features which are not found elsewhere within the smart contract industry:


{% assign technologies = (site.technologies | where: 'lang', page.lang | sort: 'priority') %}
{% for technology in technologies  %}
<div class="row tech-toc">
  <div class="col-xs-12 ">

    <h3 class="tech-title"><a href="{{ technology.url }}">{{ technology.title }}</a> - {{ technology.subtitle }}</h3>
</div>

  <div class="col-xs-12 col-md-2 ">
    <img class=" tech-toc" src="{{ BASE_PATH }}/{{ technology.image }}" />
  </div>
  <div class="col-xs-12 col-md-10 ">
    {{ technology.summary }}
  </div>
 
</div>
{% endfor %}

---

**<a href="/">Sign up</a> to the mailing list to be notified when BitShares 2.0 is ready!**
