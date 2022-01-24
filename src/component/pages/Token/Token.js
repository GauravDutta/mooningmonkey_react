import React,{useState,useEffect} from 'react'
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
        <div className='section token-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center token-top-sec ' data-aos="fade-up">
                        <h2 className='' >THE TAKION TOKEN</h2>
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
                    <h2 className='heading'>MOONIN G MONKEY NFT</h2>
                    <p>Any evolution of the Mooning Monkey ecosystem will provide you with the following reward:</p>
                    <ul className='top-50'>
                    <li>10 TAK/day</li>
                    </ul>
                    <h2 className='heading top-50'>COMIC PAGE NFT</h2>
                    <p>By simply being a comic page NFT owner, you’ll receive the following rewards:</p>
                    <ul className='top-50'>
                    <li>15 TAK/day</li>
                    </ul>
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
                        <th>$TAK TO BURN</th>
                        </tr>
                        <tr>
                        <td>
                        <li>4 Mooning Monkeys to 1 Galactic Gorilla:</li>
                        </td>
                        <td>1200</td>
                        </tr>
                        <tr>
                        <td>
                        <li>3 Galactic Gorillas to 1 Alien Gorilla:</li>
                        </td>
                        <td>1350</td>
                        </tr>
                        <tr>
                        <td>
                        <li>2 Alien Gorillas to 1 Eternal Yeti:</li>
                        </td>
                        <td>1800</td>
                        </tr>
                        </tbody>
                        </table>

                        <p className='top-50 small-font'>NOTE: If you want to proceed to the next evolution level, you can either buy more $TAK directly on listed exchanges, or simply wait for your daily, passive rewards!</p>
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>ACQUIRE COMIC PAGES</h2>
                    <p>Besides being able to read through the intriguing, amazing, and full-of-action <strong>Mooning Monkey Epic Space Odyssey</strong>, acquiring comic pages earn you great rewards! And, by being a <strong>TAK Holder</strong> that owns <strong>Mooning Monkey NFT Evolutions</strong>, you’ll get an unique chance to earn extra rewards, exclusive discord chat access, and much, much more!</p>
                    
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
                    <p>Even if you do not own any NFT, we welcome anyone in our staking program to earn and enjoy the following rewards:</p>
                    <table id="customers">
                    <tbody>
                    <tr>
                    <th>STAKING</th>
                    <th>APY</th>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>Up to 10,000</li>
                    </ul>
                    </td>
                    <td>5%</td>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>10,001 to 25,000</li>
                    </ul>
                    </td>
                    <td>10%</td>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>25,001 to 50,000</li>
                    </ul>
                    </td>
                    <td>25%</td>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>50,001 to 75,000</li>
                    </ul>
                    </td>
                    <td>50%</td>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>75,001 to 100,000</li>
                    </ul>
                    </td>
                    <td>75%</td>
                    </tr>
                    <tr>
                    <td>
                    <ul>
                    <li>100,000+</li>
                    </ul>
                    </td>
                    <td>100%</td>
                    </tr>
                    </tbody>
                    </table>

                     
                    </div>
                </div>

                <div className='row cust-width top-100'>
                    <div className='col-md-7' data-aos="fade-right">
                    <h2 className='heading'>EXTRA CASHBACK</h2>
                    <p>Every single player will have the chance to earn extra Cashback on top of the initial 0.25%, here’s exactly how it works:</p>
                    <ul>
                    <li>Minimum of 0.25% if play with ETH, BTC or USDT and up to 2% depending on your total wager overtime</li>
                    <li>A minimum of 1% when playing with TAK and Up to 3 % depending on your total wager overtime</li>
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
                        <th>Wage $tak</th>
                        <th>Wage Crypto</th>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 1</li>
                        </ul>
                        </td>
                        <td>Up to $50,000</td>
                        <td>1%</td>
                        <td>0.25%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 2</li>
                        </ul>
                        </td>
                        <td>$50K – $100K</td>
                        <td>1.5%</td>
                        <td>0.5%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 3</li>
                        </ul>
                        </td>
                        <td>$100K – $250K</td>
                        <td>2%</td>
                        <td>1%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 4</li>
                        </ul>
                        </td>
                        <td>$250K – $500K</td>
                        <td>2.5%</td>
                        <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 5</li>
                        </ul>
                        </td>
                        <td>Over $500K</td>
                        <td>3%</td>
                        <td>2%</td>
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
                    <h2 className='heading'>EARN EXTRA CASH ON YOUR WINS</h2>
                    <p>Whenever you use the $TAK token while playing, you’ll earn extra on each winning bet, regardless of whether or not you own any of the Mooning Monkey Evolutions.</p>
                    <ul>
                    <li>An extra 1% on each winning bet and up to 3%</li>
                    </ul>
                    </div>
                    
                    <div className='col-md-12'>

                    <table id="customers">
                        <tbody>
                        <tr>
                        <th>Level</th>
                        <th>Lifetime bet</th>
                        <th>Wage $tak</th>
                        <th>Wage Crypto</th>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 1</li>
                        </ul>
                        </td>
                        <td>Up to $50,000</td>
                        <td>1%</td>
                        <td>0%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 2</li>
                        </ul>
                        </td>
                        <td>$50K – $100K</td>
                        <td>1.5%</td>
                        <td>0%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 3</li>
                        </ul>
                        </td>
                        <td>$100K – $250K</td>
                        <td>2%</td>
                        <td>0%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 4</li>
                        </ul>
                        </td>
                        <td>$250K – $500K</td>
                        <td>2.5%</td>
                        <td>0%</td>
                        </tr>
                        <tr>
                        <td>
                        <ul>
                        <li>Level 5</li>
                        </ul>
                        </td>
                        <td>Over $500K</td>
                        <td>3%</td>
                        <td>0%</td>
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

                <div className='row top-100'>
                    <div className='col-md-12 text-center token-top-sec' data-aos="fade-up" >
                    <p>In our game, whether they win or lose, <strong>4%</strong> out of the<strong> 5%</strong> house hedge is redistributed to players in cashback, minimizing the chances of losing!</p>
                    <p>As you can see, <strong>The Crash Game</strong> on MooningMonkey.com provides unlimited benefits to its players, and this is why so many people choose this platform…</p>
                    <p><strong> You Earn Even If You Lose, And Earn EVEN MORE When You Win! </strong></p>
                    <p>Visit our staking calculator for non NFT holders to see potential earnings</p>
                    <a className='btn btn-pink gradient' href='' data-aos="fade-up">CHECK CALCULATORS</a>
                    <p className='top-50'><em><strong>$TAK is the utility token at the center of Mooning Monkey ecosystem. </strong></em><em><strong>It is NOT investment advice and the $TAK token has NO economic value.</strong></em></p>                   
                    </div>
                   
                </div>  

            </div>
        </div>
        
     
        </React.Fragment>
    ) 
}
