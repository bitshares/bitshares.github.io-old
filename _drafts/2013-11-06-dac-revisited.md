---
title: DAC Revisited
author: bitshares
layout: post
permalink: /dac-revisited/
slide_template:
  - default
pexeto_video:
  - 
categories:
  - News
---
**[Daniel Larimer on November 6, 2013]  **[<a style="font-weight: 300; color: #3498db;" href="http://letstalkbitcoin.com/dac-revisited/">source</a>]

&nbsp;

<p style="font-weight: 300; color: #1b485d;">
  Since Stan Larimer first published “<a style="color: #3498db;" title="Bitcoin and the Three Laws of Robotics" href="http://letstalkbitcoin.com/bitcoin-and-the-three-laws-of-robotics/">Bitcoin and the Three Laws of Robotics</a>” there have been many articles discussing the creation of Decentralized Autonomous Corporations (aka DACs). <a style="color: #3498db;" href="https://bitcoinpresscenter.org/presscontact/vitalik-buterin">Vitalik Buterin</a> has published a <a style="color: #3498db;" href="http://bitcoinmagazine.com/7050/bootstrapping-a-decentralized-autonomous-corporation-part-i/">3-part series</a> discussing the bootstrapping of a DAC, interacting with the world, and Identity Corp. Others, such as <a style="color: #3498db;" href="http://8btc.com/">8BTC</a>, have started to <a style="color: #3498db;" href="http://bitcoinmagazine.com/7827/the-pirates-of-8btc-implement-the-idea-of-distributed-autonomous-corporations/">talk about their systems as a DAC</a>.
</p>

&nbsp;

<p style="font-weight: 300; color: #1b485d;">
  <p style="font-weight: 300; color: #1b485d;">
    Unfortunately, the enthusiasm for DACs has led many people to jump the gun and start calling things a DAC that clearly are not while at the same time proposing new DACs that are not feasible. As the original creator of the DAC metaphor I would like to add some clarity to the discussion that will help people design new DACs.
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p style="font-weight: 300; color: #1b485d;">
    <h4 style="font-weight: 400; color: #1b485d;">
      The Genesis DAC
    </h4>
    
    <p>
      &nbsp;
    </p>
    
    <p style="font-weight: 300; color: #1b485d;">
      Stan and I were discussing BitShares one evening and I tried to describe how BitShares is different from an altcoin. I used an analogy that described bitshares as a crypto-equity in a decentralized bank and exchange called BitShares. The shareholders of the bank are those who own bitshares. I then went on to explain how this decentralized bank can lend dollars into existence just like their centralized counterparts. I will review this analogy here for the benefit of others who would like to engineer their own DACs.
    </p>
    
    <p>
      &nbsp;
    </p>
    
    <p style="font-weight: 300; color: #1b485d;">
      <p style="font-weight: 300; color: #1b485d;">
        All banks these days operate on what I like to call a fictional reserve basis. When you approach the bank for a loan to buy a house, the bank creates new dollars from thin air backed by your collateralized promise to pay back the loan. In this case, your house is the collateral and the bank may call your loan and foreclose if you stop making the required payments or if the value of the house falls too much. When you pay off your loan the dollars are destroyed and the bank keeps the interest payments and the lien is removed from your house. The key thing to remember here is that these dollars are nothing more than an IOU from the bank.People trust the value of the IOUs because they trust the bank to honor their promise to pay a dollars worth of value.
      </p>
      
      <p>
        &nbsp;
      </p>
      
      <p style="font-weight: 300; color: #1b485d;">
        <p>
          <center style="font-weight: 300; color: #555555;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Us-gold-certificate-1922.jpg" alt="" />
          </center>
        </p>
        
        <p>
          &nbsp;
        </p>
        
        <p style="font-weight: 300; color: #1b485d;">
          Lets step back one step further, and consider that a dollar use to be defined as 412.5 grains of 99.9% pure silver. When you received a bank note it was a promise to pay one dollar worth of gold and the law defined the fixed ratio of gold to silver required to give the bank note a tie to the real world.
        </p>
        
        <p>
          &nbsp;
        </p>
        
        <p style="font-weight: 300; color: #1b485d;">
          <p style="font-weight: 300; color: #1b485d;">
            As you can see the promise to pay is denominated in dollars which are defined as a weight in silver, and yet what is paid out upon redemption is gold. This example demonstrates that a dollar is just an arbitrary label assigned to a certain amount of value. Just like you could have a dollar of silver or a dollar of gold, you could also have a dollar of corn, a dollar of oil, or a dollar of anything including a dollar of bitcoin! When the United States left the gold standard entirely the dollar began to float against all other goods and services and now has value for its own sake even though it is no longer price-fixed against gold or silver. The dollar is nothing more than an arbitrary measure of value and is still redeemable for $1 worth of silver at the current market price (not the price fixed 412.5 grains of silver).
          </p>
          
          <p>
            &nbsp;
          </p>
          
          <p style="font-weight: 300; color: #1b485d;">
            <p style="font-weight: 300; color: #1b485d;">
              Lets go back to the world of DACs and consider how a decentralized bank can lend dollars into existence just like their centralized counterparts. First the bank must identify someone who would like to borrow dollars as it is the collateral behind the borrowers promise to repay that backs the value of the dollars.Just like real banks, BitShares requires collateral for the loan and the only collateral BitShares has the ability to foreclose upon is its own equity. When you borrow money for a house the bank usually requires at least 20% down to protect the bank in the event your house loses value. In the case of the BitShares DAC the bank requires a 50% downpayment.
            </p>
            
            <p>
              &nbsp;
            </p>
            
            <p style="font-weight: 300; color: #1b485d;">
              <p style="font-weight: 300; color: #1b485d;">
                Someone wishing to borrow $100 dollars from the BitShares DAC must find $200 worth of equity(bitshares) to back the loan. Lets assume they have mined $200 worth of equity, they can mortgage this equity and receive 100 BitUSD in exchange for a lean on their equity that can only be cleared by paying back 100 BitUSD.
              </p>
              
              <p>
                &nbsp;
              </p>
              
              <p style="font-weight: 300; color: #1b485d;">
                <p style="font-weight: 300; color: #1b485d;">
                  BitUSD is the equivalent of the old bank notes that promised to pay $1 worth of value on demand. In the case of the old bank notes, this value was denominated in gold or silver. In the case of the BitShares DAC this value is $1 worth of equity, aka bitshares.The BitShares DAC can almost always make good on this promise because when someone comes to redeem a note and is unable to sell it on the market directly the value of the BitUSD in terms of bitshares will rise until the decentralized bank has the authority to call a loan and repurchase the BitUSD.
                </p>
                
                <p>
                  &nbsp;
                </p>
                
                <p style="font-weight: 300; color: #1b485d;">
                  <p style="font-weight: 300; color: #1b485d;">
                    Most people understand why someone would borrow money to buy a house, but why would someone mortgage their BitShares for BitUSD? The reason someone would borrow BitUSD is so they could sell it and take what is called a short position. A short position is a speculative bet that BitUSD will go down in value relative to bitshares.If the value does go down then the speculator can repurchase the BitUSD for fewer bitshares in the future and then pay off the loan while pocketing a nice profit. This is how speculators on Wall Street make money when stocks go down: they borrow the stock, sell it for $100,and then repurchase it later for $50 and return the stock while making a $50 profit.
                  </p>
                  
                  <p>
                    &nbsp;
                  </p>
                  
                  <p style="font-weight: 300; color: #1b485d;">
                    <h4 style="font-weight: 400; color: #1b485d;">
                      Dividends & Interest Payments
                    </h4>
                    
                    <p>
                      &nbsp;
                    </p>
                    
                    <p style="font-weight: 300; color: #1b485d;">
                      All banks attempt to operate for a profit and therefore charge interest on loans along with transaction fees and inactivity fees.The bank profits are the distributed to the shareholders as dividends. In the case of the BitShares DAC there are also transaction fees, inactivity fees, and margin-call fees and the profits that result from charging these fees are paid to the shareholders.
                    </p>
                    
                    <p>
                      &nbsp;
                    </p>
                    
                    <p style="font-weight: 300; color: #1b485d;">
                      <p style="font-weight: 300; color: #1b485d;">
                        When someone wishes to borrow BitUSD from the bank they do not get to borrow this money interest-free. Instead they pay interest equal to the dividends they would have received on their collateral.Anyone holding a bank note is effectively lending value to the bank by not redeeming it and anyone holding a balance at a bank is traditionally paid interest. Likewise, those who hold BitUSD are effectively lending the value of a dollar to the decentralized bank by not redeeming it.In exchange fo lending this dollar the bank pays them interest. In the case of the BitShares DAC the bank does not take a cut of the spread between the interest paid by the borrower and interest paid to the lender.
                      </p>
                      
                      <p>
                        &nbsp;
                      </p>
                      
                      <p style="font-weight: 300; color: #1b485d;">
                        <p style="font-weight: 300; color: #1b485d;">
                          It is through this explanation of BitShares that the concept of a DAC was born and a new take on the nature of Bitcoin as a decentralized autonomous corporation rather than just a crypto-currency came to be.
                        </p>
                        
                        <p>
                          &nbsp;
                        </p>
                        
                        <p style="font-weight: 300; color: #1b485d;">
                          <h4 style="font-weight: 400; color: #1b485d;">
                            Identifying a DAC
                          </h4>
                          
                          <p>
                            &nbsp;
                          </p>
                          
                          <p style="font-weight: 300; color: #1b485d;">
                            How can we determine whether or not something is a DAC? I think the most obvious metric of identifying a DAC is that it must have its own block chain in which shares of the DAC are exchanged. Without equity there is no means by which the DAC can be ‘owned’ or through which profits from the DAC may be distributed. All corporations have equity and DACs are no different.
                          </p>
                          
                          <p>
                            &nbsp;
                          </p>
                          
                          <p style="font-weight: 300; color: #1b485d;">
                            <p style="font-weight: 300; color: #1b485d;">
                              A DAC must not depend upon any single individual, company or organization to have value. You cannot replace shares in a brick and mortar business with a crypto-currency and call it a DAC. The SEC would have something to say about such a situation. If the brick and mortar business is hit by a meteor then the DAC loses all value because it lacks the property of being decentralized.
                            </p>
                            
                            <p>
                              &nbsp;
                            </p>
                            
                            <p style="font-weight: 300; color: #1b485d;">
                              <p style="font-weight: 300; color: #1b485d;">
                                A DAC cannot control a private key because it cannot hold secrets. Its operation must be entirely independent of any actors with secrets. This means that a DAC cannot own a Bitcoin wallet or store any value outside its own block chain.
                              </p>
                              
                              <p>
                                &nbsp;
                              </p>
                              
                              <p style="font-weight: 300; color: #1b485d;">
                                <p style="font-weight: 300; color: #1b485d;">
                                  A DAC must not depend upon any legally binding contracts or laws such as copy right or patents.
                                </p>
                                
                                <p>
                                  &nbsp;
                                </p>
                                
                                <p style="font-weight: 300; color: #1b485d;">
                                  <p style="font-weight: 300; color: #1b485d;">
                                    Any system that depends upon any of these things cannot be called a DAC. There can be hybrid systems and I suspect companies in the future will adopt block-chain based stock systems. These companies would be using crypto-currencies as a secure decentralized voting system and an anonymous means to hold equity in a company. Unfortunately, the only companies able to implement such a system would be those founded in Panama or other countries which allow anonymous ownership of corporations.
                                  </p>
                                  
                                  <p>
                                    &nbsp;
                                  </p>
                                  
                                  <p style="font-weight: 300; color: #1b485d;">
                                    <h4 style="font-weight: 400; color: #1b485d;">
                                      False DACs, 8BTC.com
                                    </h4>
                                    
                                    <p>
                                      &nbsp;
                                    </p>
                                    
                                    <p style="font-weight: 300; color: #1b485d;">
                                      In the case of 8BTC, a Chinese news aggregator and blogging platform, they have begun calling themselves a DAC or a set of DACs. The core idea is that writers each have Bitcoin addresses and that revenue generated by the websites advertisements are paid to the writers via the Bitcoin addresses. This is a centralized company with a centralized domain name that could be taken down. 8BTC also claims to have a membership DAC but they have a centralized pre-screening process.
                                    </p>
                                    
                                    <p>
                                      &nbsp;
                                    </p>
                                    
                                    <p style="font-weight: 300; color: #1b485d;">
                                      <p style="font-weight: 300; color: #1b485d;">
                                        I must applaud 8BTC for trying to think in terms of DACs and am flattered that they have started using my concept of a DAC in their own marketing. In a future article I will address a new approach to news aggregation that is truly decentralized and could be considered a DAC.
                                      </p>
                                      
                                      <p>
                                        &nbsp;
                                      </p>
                                      
                                      <p style="font-weight: 300; color: #1b485d;">
                                        <h4 style="font-weight: 400; color: #1b485d;">
                                          Conclusion
                                        </h4>
                                        
                                        <p>
                                          &nbsp;
                                        </p>
                                        
                                        <p style="font-weight: 300; color: #1b485d;">
                                          DACs are a useful metaphor for designing decentralized systems that provide useful goods and services to society. If something as complex as a bank can be implemented as a DAC then it is clearly possible to implement many other things as DACs. In the future I will outline my designs for DACs that perform the following services:
                                        </p>
                                        
                                        <p>
                                          &nbsp;
                                        </p>
                                        
                                        <p style="font-weight: 300; color: #1b485d;">
                                          <p style="font-weight: 300; color: #1b485d;">
                                            1) News Aggregation<br /> 2) AdWords<br /> 3) Domain Names<br /> 4) Patents, Copyright and next generation Intellectual Property<br /> 5) Insurance<br /> 6) Courts, Escrow, and Arbitration<br /> 7) Authenticated Anonymous Voting<br /> 8) Prediction Markets<br /> 9) Next Generation Search Engines
                                          </p>
                                          
                                          <p style="font-weight: 300; color: #1b485d;">
                                            <p>
                                              &nbsp;
                                            </p>
                                            
                                            <p style="font-weight: 300; color: #1b485d;">
                                              Additionally I will describe a new approach for funding the development of DACs in a decentralized manner. There is an exciting future filled with DACs that can faithfully provide services previously delegated to trusted 3rd parties. We just need to learn the fundamental principles used to design DACs and then combine them in new and unique ways.
                                            </p>