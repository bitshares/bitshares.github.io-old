---
title: The Value Proposition of BitShares – Part I (core technology)
author: bitshares
layout: post
permalink: /the-value-proposition-of-bitsharesx-part-i-core-technology/
slide_template:
  - default
ABp_portfolio_client:
  - 
ABp_portfolio_skills:
  - 
ABp_portfolio_link:
  - 
ABp_portfolio_link_target:
  - 
ABp_portfolio_effect:
  - 
ABp_portfolio_show_related:
  - 0
pexeto_video:
  - 
categories:
  - Featured
  - General
---
[<img class="alignnone size-large wp-image-12740" src="http://bitshares.org/blog/wp-content/uploads/2014/11/02-1024x683.jpg" alt="02" width="1024" height="683" />][1]

<span lang="en-US">The first thing to understand is why something like </span><span lang="en-US"><b>Bitcoin has value</b></span><span lang="en-US"> at all. Because bitcoins are limited in supply and because people use the Bitcoin transfer network since it is useful (cheap, fast, anonymous, and easy to use) and because bitcoins are temporarily locked up during the transfer process, bitcoins are scarce (non zero demand under conditions of limited supply) and therefore have value.</span>

&nbsp;

<span lang="en-US">Marc Andreessen has put it <a title="Why Bitcoin Matters" href="http://dealbook.nytimes.com/2014/01/21/why-bitcoin-matters/" target="_blank">this way</a>:</span>

> <span lang="en-US">&#8220;It’s not as much that the Bitcoin currency has some arbitrary value and then people are trading with it; it’s more that people can trade with Bitcoin (anywhere, everywhere, with no fraud and no or very low fees) and as a result it has value.&#8221;</span>

&nbsp;

<span lang="en-US"><b>The applications of Bitcoin</b></span>* *<span lang="en-US">are: remittance, micro payments (e.g. buying a 10-cent newspaper article online), and e-commerce.</span>  
<span lang="en-US">Value-transfer networks like Bitcoin have </span><span lang="en-US"><b>great potential</b></span><span lang="en-US"> in a decentralized (global) economy driven by machine-to machine communication (think of Google Car taxis that want to get paid), micro services and micropayment, reputation systems, e-commerce, and more. Bitcoin has brought great new opportunities to emerging industries and hope to a lot of people. But is it made to satisfy the needs of these markets and serve as </span><span lang="en-US"><b>a global payment network?</b></span>  
<span lang="en-US">While always seeking to improve on the status quo, the BitShares project honors the values of Bitcoin and the change in perspective Bitcoin has sparked in mainstream perception about our financial system. </span><span lang="en-US">The BitShares project, like the Bitcoin project, aims at making the world a better place that is </span><span lang="en-US"><b>less prone to corruption</b></span><span lang="en-US">.</span>  
<span lang="en-US">As great as Bitcoin is, there are some issues with Bitcoin that have prevented further growth and adoption. With this in mind&#8230;</span>

&nbsp;

### <span lang="en-US"><b>Let&#8217;s take a closer look at what can be improved about Bitcoin:</b></span>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">(1) </span><span lang="en-US"><b>Cost and efficiency</b></span><span lang="en-US">. </span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">The recommended transaction fee for Bitcoin is 10 cents, which is not too bad, but it is still not really suited for micro payments. </span><span lang="en-US">Also, these 10 cents are only a fraction of the overall cost of the Bitcoin network. The other 99.6 % of what it costs to guarantee irreversibility of transactions is paid by diluting the value of existing bitcoins by 10% per year. This dilution, which incentivizes users not to hold onto the asset (bitcoin), will continue for another ten years until it gets fairly low. If all security costs of the Bitcoin network were paid through transaction fees, one Bitcoin transaction would cost around $30 to provide the same level of security as today</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">(2) </span><span lang="en-US"><b>Security</b></span><span lang="en-US">. </span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">Bitcoin uses Proof of Work, which means that those who secure the network are paid relative to the amount of computational power they control. In order to prove that one is in control of a certain amount of computational power, random puzzles are solved, which consumes millions of dollars in electricity costs every day. These electricity costs are paid by diluting the value of existing bitcoins. Currently around 10% more bitcoins are created every year and paid to cover the electricity cost of miners.</span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">The degree of security in a Proof of Work network depends on the amount of computational power that is available to the system, combined with the distribution of that computational power among transaction validators. Therefore, security would suffer dramatically if there was no dilution based pay for providing computational power while offering fairly low transaction fees or if the computational power were concentrated in a few hands.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">(3) </span><span lang="en-US"><b>Transaction speed and scalability</b></span><span lang="en-US">. </span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">With Bitcoin, as with BitShares, the certainty that a received transaction cannot be reversed increases (exponentially) with the time that has passed since the transaction was broadcasted . With Bitcoin, it takes 10 minutes for one confirmation. This is better than a wire transfer, but still too slow for a lot of real-world uses.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">Aside form confirmation speed, a transaction-processing network needs to be able to handle many transactions per second. Bitcoin is limited to 7 transactions per second at the moment, which is insufficient compared to VISA&#8217;s ability to process thousands of transactions per second.</span>
</p>

&nbsp;

### <span lang="en-US"><b>BitShares solves these interrelated core issues:</b></span>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US"><b>Speed and scalability</b></span><span lang="en-US">.</span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">BitShares is designed to handle thousands of transactions per second. BitShares reduces Bitcoin&#8217;s 10-minute </span><span lang="en-US"><b>confirmation time to 10 seconds</b></span><span lang="en-US"> and users can be 100% sure that a transaction is finally settled after 51 delegates have produced a block. BitShares is more secure after 1 block (10 seconds) than Bitcoin is after 6 blocks (1 hour).</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US"><b>Efficiency</b></span><span lang="en-US">.</span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">Instead of $30 or $10 cents, depending on whether dilution is included in the cost calculation or not, BitShares allows users to transfer funds at </span><span lang="en-US"><b>1 cent per transaction</b></span><span lang="en-US">.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US"><b>Security</b></span><span lang="en-US">. </span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">These significant improvements are made possible due to BitShares&#8217; security algorithm, which is called “delegated proof of stake” (</span><span lang="en-US"><b>DPOS</b></span><span lang="en-US">). It provides an advanced level of security at a fraction of the cost. While with “Proof of Work,” those who process transactions (miners) have to prove they control a certain amount of computational power, which is energy intensive, those who process transactions for a DPOS network (delegates) have to proof to have the support of BTS-holders,</span><a class="sdfootnoteanc" href="#sdfootnote1sym" name="sdfootnote1anc"><sup>1</sup></a><span lang="en-US"> who vote for delegates. This takes the costly energy consumption out of the equation.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">At the same time, DPOS provides enhanced security because delegates can be voted out if they do not perform well. In contrast, Bitcoin: If a malicious miner has control over the majority of the computational power for a specific Proof of Work algorithm, this specific Proof of Work is worthless for providing security, and nothing can be done about it.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">With BitShares, an attacker would have to buy more than half of all BTS in order control the network, which would be magnitudes more costly than buying and/or renting 50% of the computational power in a Proof of Work network.</span>
</p>

&nbsp;

### **<span lang="en-US">Beyond these core challenges, BitShares is dedicated to providing more.</span>**

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US"><b>Usability and real-world adaption</b></span><span lang="en-US">. </span>
</p>

<p style="padding-left: 30px;">
  <span lang="en-US">Technology and innovation do not matter without ease of use and real-world adoption. The </span><span lang="en-US"><b>TITAN</b></span><span lang="en-US"> (transfer invisibly to any name) technology in BitSharesX minimizes the chance that a careless user looses funds because he or she sent funds to a wrong address. TITAN let&#8217;s users</span><span lang="en-US"><b> transfer to names</b></span><span lang="en-US"> of accounts (e.g. Peter78, much like account names with email providers) instead of to a 34 characters long public key. In addition, TITAN provides the degree of </span><span lang="en-US"><b>anonymity</b></span><span lang="en-US"> that in Bitcoin requires a lot of educated attention, by using a new public key for every transaction by default.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">Other user-friendly features, like sending a </span><span lang="en-US"><b>memo</b></span><span lang="en-US"> along with your transaction to reference the purpose of the transaction, are integrated.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  <span lang="en-US">DPOS incentivizes developers to </span><span lang="en-US"><b>constantly improve the network</b></span><span lang="en-US">. Besides processing transactions, delegates can choose how the pay they receive is spent. Delegates can campaign for votes by promising to pay developers. With Bitcoin, miners have no </span><span lang="en-US"><b>incentive</b></span><span lang="en-US"> to use their gains to grow their network. In fact, Bitcoin’s core development is done by three paid employees, and bitcoin holders have no control over the direction their network goes. With DPOS, “coinholders” elect the delegates who act in the interest of the network.</span>
</p>

&nbsp;

<p style="padding-left: 30px;">
  People seem to get confused about the <b>different BitShares </b>- there is BitShares, BitShares Music, BitShares Play and maybe more in the future. BitShares is the flagship product. Since the BitShares technology is all open source it has been used by other developers (like the Music and Play project above) to adapt it according to their own use. Any developer is free to use bitShares software to build his own DAC (decentralized autonomous company, an analogy to describe decentralized applications, which applies to Bitcoin and BitShares alike). The BitShares open source toolkit in that sense is <b>a platform for building decentralized applications</b>. BitShares is one DAC that has been built with the BitShares toolkit. More DACs are in the making by independent developers utilizing the toolkit. Contact the forum or some of the developers if you need support for your project.
</p>

&nbsp;

<span lang="en-US">We can conclude that BitShares improves on Bitcoin considerably and offers the same peer-to-peer value-transfer functionality. The exciting part though is the additions in </span><span lang="en-US"><b>functionality</b></span><span lang="en-US"> BitShares offers, BitAssets (e.g. BitUSD) in particular, which will be covered in the part II of this series.</span>

&nbsp;

<div id="sdfootnote1">
  <p class="sdfootnote">
    <a class="sdfootnotesym" href="#sdfootnote1anc" name="sdfootnote1sym">1</a> <span lang="en-US">BTSX is the accounting unit of BitSharesX and is analogous to the abbreviation “BTC”.</span>
  </p>
</div>

 [1]: http://bitshares.org/blog/wp-content/uploads/2014/11/02.jpg