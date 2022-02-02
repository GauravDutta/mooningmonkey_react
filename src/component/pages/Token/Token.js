import React,{useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Token() {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
      return (
        <React.Fragment>
             <Helmet>   
   <meta name="description" content="The NFT TAK token is a utility token and gaming token to be used in our famous revamped NFT Mooning Monkey Crash Game. Get extra winning bonuses and cash back whether you win or lose." />
</Helmet>
        <div className='section token-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center token-top-sec ' data-aos="fade-up">
                        <h1 className='' >THE TAKION TOKEN</h1>
                        <p className='top-50'>WHAT ARE TAKIONS USED FOR?</p>
                        <p><strong>TAK token</strong> is at the center of the <strong>Mooning Monkey ecosystem</strong> whether you are looking to Yield, evolve your NFT, get additional staking rewards, extra cashback or winning bonuses while playing the <strong>Mooning Monkey Crash game</strong>.</p>
                        <img src={require('../Token/img/token-5.png')} className="img-responsive "/>                      
                    </div>
                    <div className='col-md-12 text-center top-50' data-aos="fade-up">
                        <h2 className='heading'>YIELD</h2>
                        <p>You can yield $TAK via any of the Mooning Monkey evolution or through the NFT comic pages you own.</p>
                    </div>
                </div>
                <div className='row cust-width top-50'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>MOONING MONKEY NFTs</h2>
                    <p>Any Evolution of the Mooning Monkey NFT you hold will reward you with daily claimable $TAK tokens, the amount will be based on:</p>
                    <ul className='top-50'>
                    <li>Your Evolution Level</li>
                    <li>The Rarity Traits of your NFTs</li>
                    </ul>
                    <h2 className='heading top-50'>COMIC BOOK PAGES</h2>
                    <p>Comic book page holders’ rewards will be distributed daily proportionally to the number of pages they own from the collection of 5’600 available.</p>
                    <a className="btn btn-pink gradient aos-init" href="/nft-calculator" data-aos="fade-up">CHECK CALCULATORS</a>
                    </div>
                    <div className='col-md-5 text-right' data-aos="fade-left">
                    <img src={require('../Token/img/token-51.png')} className="img-responsive token-img-size"/>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-5 text-left' data-aos="fade-right">
                    <img src={require('../Token/img/evolve-token.png')} className="img-responsive token-img-size"/>
                    </div>
                    <div className='col-md-7' data-aos="fade-left">
                    <h2 className='heading'>EVOLVE</h2>
                    <p>In order to evolve your current NFT holding to the next stage of evolution you’ll need the following amount of TAK:</p>
                    <table id="customers">
<tbody>
<tr>
<th>EVOLUTION PROCESS</th>
<th>$TAK TOKENS TO BURN </th>
</tr>
<tr>
<td>
<ul>
<li>4 Mooning Monkeys to 1 Galactic Gorilla:</li>
</ul>
</td>
<td>$100 worth of TAK tokens</td>
</tr>
<tr>
<td>
<ul>
<li>3 Galactic Gorillas to 1 Alien Gorilla:</li>
</ul>
</td>
<td>$300 worth of TAK tokens</td>
</tr>
<tr>
<td>
<ul>
<li>2 Alien Gorillas to 1 Eternal Yeti:</li>
</ul>
</td>
<td>$500 worth of TAK tokens</td>
</tr>
</tbody>
</table>

                        <p className='top-50 small-font'>NOTE: If you want to proceed to the next evolution level, you can either buy more $TAK directly on listed exchanges, or simply wait for your daily, passive rewards!</p>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>ACQUIRE COMIC PAGES</h2>
                    <p>Besides being able to read through the intriguing, amazing, and full-of-action <strong>Mooning Monkey Epic Space Odyssey</strong>, acquiring comic pages earn you great rewards! </p>
                    <p>Only $TAK token holders will have the chance to purchase comic book pages and get an unique chance to earn extra rewards, exclusive discord chat access, and much, much more!</p>
                    
                    </div>
                    <div className='col-md-5 text-right' data-aos="fade-left">
                    <img src={require('../Token/img/comic-token.png')} className="img-responsive token-img-size"/>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-5 text-left' data-aos="fade-right">
                    <img src={require('../Token/img/token-46.png')} className="img-responsive token-img-size"/>
                    </div>
                    <div className='col-md-7' data-aos="fade-left">
                    <h2 className='heading'>STAKING FOR EVERYONE</h2>
                    <p>Even if you do not own any NFT, we welcome anyone holding $TAK in our staking program to earn and enjoy a generous APY.</p>
                    <p>Higher APY will be based on 2 factors:</p>
                    <ul>
                    <li>Amount of $TAK token you hold</li>
                    <li>Locking duration period you choose</li>
                    </ul>
                    <a className="btn btn-pink gradient aos-init aos-animate" href="/nft-calculator" data-aos="fade-up">CHECK CALCULATORS</a>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>EXTRA CASHBACK</h2>
                    <p>Every single player will have the chance to earn extra Cashback when playing, here is exactly how it works:</p>
                    <ul>
                    <li>A minimum of 0.25% when playing with $TAK and Up to 2% depending on your total wager overtime.</li>
                  
                    </ul>
                    </div>
                    <div className='col-md-5 text-right' data-aos="fade-left">
                    <img src={require('../Token/img/token-77.png')} className="img-responsive token-img-size"/>
                    </div>
                    <div className='col-md-12'>

                    <table id="customers">
                        <tbody>
                        <tr>
                        <th>Level</th>
                        <th>Lifetime bet</th>
                        <th>Cash back for bet with $tak</th>
                        <th>Cash back for bet with Crypto</th>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 1</li>
                        </ul>
                        </td>
                        <td>Up to 50k</td>
                        <td>0.25%</td>
                        <td>0.00%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 2</li>
                        </ul>
                        </td>
                        <td>Up to 100k</td>
                        <td>0.5%</td>
                        <td>0.25%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 3</li>
                        </ul>
                        </td>
                        <td>Up to 250k</td>
                        <td>1.0%</td>
                        <td>0.50%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 4</li>
                        </ul>
                        </td>
                        <td>Up to 500k</td>
                        <td>1.5%</td>
                        <td>0.75%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 5</li>
                        </ul>
                        </td>
                        <td>Above 500k</td>
                        <td>2.00%</td>
                        <td>1.00%</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-5 text-left' data-aos="fade-right">
                    <img src={require('../Token/img/token-88.png')} className="img-responsive token-img-size"/>
                    </div>
                    <div className='col-md-7' data-aos="fade-left">
                    <h2 className='heading'>WINNING BONUS</h2>
                    <p>Whenever you use the $TAK token while playing, you’ll earn extra on each winning bet, regardless of whether or not you own any of the Mooning Monkey NFTs Evolutions.</p>
                    <ul>
                    <li>An extra 0.25% on each winning bet and up to 2%</li>
                    </ul>
                    </div>
                    
                    <div className='col-md-12'>

                    <table id="customers">
                                <tbody>
                                <tr>
                                <th>Level</th>
                                <th>Lifetime bet</th>
                                <th>Bonus for bet with $TAK</th>
                                <th>Bonus for bet with Crypto</th>
                                </tr>
                                <tr>
                                <td>
                                <ul>
                                <li>Level 1</li>
                                </ul>
                                </td>
                                <td>Up to 50k</td>
                                <td>0.25%</td>
                                <td>0.0%</td>
                                </tr>
                                <tr>
                                <td>
                                <ul>
                                <li>Level 2</li>
                                </ul>
                                </td>
                                <td>Up to 100k</td>
                                <td>0.50%</td>
                                <td>0.0%</td>
                                </tr>
                                <tr>
                                <td>
                                <ul>
                                <li>Level 3</li>
                                </ul>
                                </td>
                                <td>Up to 250k</td>
                                <td>1.0%</td>
                                <td>0.0%</td>
                                </tr>
                                <tr>
                                <td>
                                <ul>
                                <li>Level 4</li>
                                </ul>
                                </td>
                                <td>Up to 500k</td>
                                <td>1.5%</td>
                                <td>0.0%</td>
                                </tr>
                                <tr>
                                <td>
                                <ul>
                                <li>Level 5</li>
                                </ul>
                                </td>
                                <td>Above 500k</td>
                                <td>2.0%</td>
                                <td>0.0%</td>
                                </tr>
                                </tbody>
                                </table>
                    </div>
                </div>


                <div className='row cust-width top-100'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>BANKROLL</h2>
                    <p>Bankrolling is a great way to earn some extra cash, with minimal risk!</p>
                    <p>Here’s An Example:</p>
                    <p>If the total bankroll is $1,000 and you contributed $200, you’ll receive <strong>20%</strong> of <strong>ALL</strong> the house-edge profits. In order to access <strong>The Mooning Monkey Bankroll Program</strong>, you HAVE to be a <strong>$TAK</strong> holder.</p>
                    
                    </div>
                    <div className='col-md-5 text-right' data-aos="fade-left">
                    <img src={require('../Token/img/token-66.png')} className="img-responsive token-img-size"/>
                    </div>
                </div>

                

            </div>
        </div>
        <div className='section token-top tok-bottom'>
            <div className='container'>
        <div className='row '>
                    <div className='col-md-12 text-center token-top-sec' data-aos="fade-up" >
                        <p>In our game, whether they win or lose, more than <strong>90%</strong> of the house hedge (<strong>6.4%</strong> out of <strong>7%</strong>) is redistributed to stakeholders (players, bankrollers, NFT holders) in cashback, rewards, bonuses, and profits.</p>
                  
                    <p>As you can see, <strong>The Crash Game</strong> on MooningMonkey.com provides unlimited benefits to its players, and this is why so many people choose this platform…</p>
                    <p><strong> You Earn Even If You Lose, And Earn EVEN MORE When You Win! </strong></p>
                    <p>Visit our staking calculator for non NFT holders to see potential earnings</p>
                    <a className='btn btn-pink gradient' href='/nft-calculator' data-aos="fade-up">CHECK CALCULATORS</a>
                    <p className='top-50'><em><strong>$TAK is the utility token at the center of Mooning Monkey ecosystem. </strong></em><em><strong>It is NOT investment advice and the $TAK token has NO economic value.</strong></em></p>                   
                    </div>
                   
                </div>  
                </div>
                   
                   </div> 
        </React.Fragment>
    ) 
}
