import React,{useState,useEffect} from 'react'
import {Helmet} from "react-helmet";
import {Tabs,Tab,Modal,Button,} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import {Team} from './data/team'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import Countdowns from '../Countdowns'



export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);
    const [state, setState] = useState('');
    const handleClose = () => setShow(false);

    const [showVideo, setVideoShow] = useState(false);

    const handleVideoClose = () => setVideoShow(false);
    

    useEffect(() => {
        setTimeout(()=>{
            setVideoShow(true)
           }, 1500) 
        AOS.init({
          duration : 1000
        });
      }, []);
     function handleShow({poptitle,description,title,except}){
    
        
        setState({poptitle,description,title,except});
        setShow(true);
      }
    const getTeamdata = Team.map(({title,poptitle,description,url,except},i) => {
       
        return(
    <div key={i} className='col-md-4'>
        <div className='team-section'>
            <img alt='' src={url} className='img-responsive' /> 
           
            <h4>{title}</h4>
            <div className='team_description'>{except}... 
                <a href='#/' className='pop-team pum-trigger' onClick={() => handleShow({poptitle,description,title})} > Read more</a>
            </div>
        </div> 
    </div>
        );
    });
    return (
        <React.Fragment>
             <Helmet>
   
        <meta name="description" content="Mooning Monkey NFTs represent a unique NFT Monkey collection made of rare NFT Monkey art. Onboard this epic NFT space journey to reach the Moon and beyond." />
    </Helmet>
        <div className='section top banner-cust'>
            <div className='container'>
                <div className='col-md-12 text-center ' data-aos="fade-up">
               
                    <h1 >ONBOARD THE GREATEST SPACE MISSION OF ALL TIME!</h1>
                    <p>Save The Mooning Monkeys From Imminent Extinction. Earn Astronomical Rewards, Exclusive Membership Privileges & A Lifetime Source Of Passive Income.</p>
                    <p>Join <strong>The Mooning Monkeys</strong> on their epic space journey, an <strong>Exclusive NFT Project</strong> featuring art from another world, and<strong> Unrivalled-Utility</strong> from galaxies far beyond.</p>
                    <p>Co-own and profit from the revisited and revamped famous <strong>Crash Game</strong>, be one of the first to own an <strong>Epic Sci-Fi Comic Book</strong> in <strong>NFT</strong> format, and become a proud owner of one of the most <strong>Stylish, Rare, And Utility-Packed NFT’s</strong>.</p>
                </div>
                <div className='col-md-12 text-center'>
                    <a href='https://t.me/MooningMonkeyOfficial' className='btn btn-pink' target='blank'>JOIN TELEGRAM</a>
                    <a href='https://discord.com/invite/mooningmonkeyofficial' className='btn btn-pink' target='blank'>JOIN DISCORD</a>
                    <a href='#miniting' className='btn btn-dark'>BUY NOW</a>
                
                    <a href='/nft-calculator' className='btn btn-dark'>PROFIT CALCULATOR</a>
                </div>
            </div>            
        </div> 
        <div className='section second '>
        <div className='container'>
                <div className='row'>
                    <div className='col-md-5 pd-right-50' data-aos="fade-right">
                    <img src={process.env.PUBLIC_URL + '/img/group-1a.png'} className='img-responsive' alt="logo" />
                               
                    </div>
                    <div className='col-md-7 ' data-aos="zoom-in">
                        <h2 className='heading ' >RARITY AND SPEC</h2>
                        <p><strong>Mooning Monkeys</strong> HATE Being Boring Copies Of Each Other,</p>
                        <p>This epic space journey is going to begin with <strong>12,000</strong> exciting, unique, and valuable mooning monkeys being sent to the moon and beyond.</p>
                        <p>They will have to evolve to survive, reducing their population to only <strong>500 Elite Beings</strong> that are infinitely more powerful, and of course, more <strong>Valuable</strong>.</p>
                        <p><strong>Unique, Distinct, Rare, And Valuable! </strong><br/>All <strong>Mooning Monkeys</strong> are unique crypto heroes that have been drilled around <strong>239 DISTINCTIVE TRAITS</strong> which define their rarity, and their value.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section game co-own'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                    <h2 className='heading text-center' data-aos="zoom-in">CO-OWN THE GAME AND SHARE PROFIT</h2>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='sdsda' eventKey="home" title="GAME CONCEPT ">
                            <div className='row '>
                                <div className='col-md-6'>
                                <p>What’s The Mooning Monkey Crash Game?</p>
                                <ul>
                                <li>Mooning Monkey is an exciting, online, multiplayer gambling game that will provide you with endless hours of thrilling fun, while also giving you the opportunity to win MILLIONS.</li>
                                <li>The gameplay consists of an increasing curve that can crash at any time, keeping everyone at the edges of their seats, trying to figure out when they should cash out.</li>
                                <li>While we are preparing the game launch, have fun playing with our profit calculator</li>
                                </ul>
                                </div>

                                <div className='col-md-6'>
                                    <img src={process.env.PUBLIC_URL + '/img/desktop-bg.png'} className='img-responsive2' alt="logo" />
                                </div>
                                <a className='btn btn-pink gradient' href='/nft-calculator/'>PROFIT CALCULATOR</a>
                                
                                </div>
                               
                            </Tab>
                            <Tab eventKey="profile" title="BENEFITS OVERVIEW">
                            <div className='row '>
                            <p>Make Money While Comfortably Sitting In Your Bed, Relaxing On The Beach, Or Having Your Own Adventures…</p>
                                
                                <div className='col-md-6'>
                                <ul>
                                <li>60% Of The Total Game Profit Will Be Shared With Co-Owners Such As Yourself EVERY MONDAY</li>
                                <li>You Will Get Extra Bonuses Based On Your Mooning Monkey’s Evolution Stage, Earn More Money, Access More Information, And Get Exclusive Access To The Mooning Monkey’s Secrets</li>
                                <li>Bankroll Participation Option Available To Increase Community Engagement, Mooning Monkey Holder Profits, And Bankroll Participant’s Profits</li>
                                <li>Gain Exclusive Access To A Referral Program That Sells Itself And Allows You To Earn Even MORE Money</li>
                                </ul>
                                </div>

                                <div className='col-md-6'>
                                    <img src={process.env.PUBLIC_URL + '/img/mob-lap-13-bg.png'} className='img-responsive' alt="logo" />
                                </div>
                                <a className='btn btn-pink gradient top-50' href='/nft-calculator'>PROFIT CALCULATOR</a>
                                
                                </div>
                            </Tab>
                           
                            </Tabs>
                    </div>
                </div>
            </div>
        </div>

        <div className='section miniting' id='miniting'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                    <h2 className='heading text-center'>MINTING</h2>
                    <h3 className=' text-center' data-aos="zoom-in"><b>THE DUTCH AUCTION WILL START ON 31 JANUARY 2022, 7PM EST</b></h3>
                    <p className=' text-center' data-aos="zoom-in">A Dutch Auction a method of selling in which the price is reduced until a buyer is found.</p>
                        <Tabs
                            
                            >
                            <Tab className='sdsda' eventKey="buy" title="BUY MOONING MONKEYS">
                            <div className='row '>
                              <div className='col-md-6 text-center'>
                              <h2 className='heading'>TAKE OFF IS IMMINENT.</h2>
                              <h2 className='heading'>SUIT UP AND GET READY!</h2>

                             <div className='timer'> <Countdowns /> </div>
                              <p>Max Mint Quantity = 12 per wallet for the first 4h. Then unlimited starting at 11PM UTC.</p>
                                </div>

                                <div className='col-md-6 text-center box ' data-aos="zoom-in">
                                    <h2 className='small-heading'>VISIT THE MINT AUCTION PAGE BY CLICKING THE BUTTON BELOW</h2>
                                    <img src={process.env.PUBLIC_URL + '/img/mooning-img.png'} className='img-responsive' alt="logo" />
                                    <a className='btn btn-dark' href='#/'>VISIT MINT AUCTION (Comming Soon)</a>
                                
                                </div>
                               
                                </div> 
                            </Tab>
                            <Tab eventKey="price" title="AUCTION PRICES">
                            <div className='row '>
                                <div className='col-md-12'>
                                <p className='white'>Here are the parameters of the Mooning Monkey Dutch Auction</p>
                                <ul>
                                        <li>Starting Price = 1.5 ETH</li>
                                        <li>Price drops by = 0.01 ETH until sold out or reaches 0.15ETH floor</li>
                                        <li>Price Drop Frequency = 6min</li>
                                        <li>Time to reach floor = 6min x 135 price drops = 810 min = 13h30 min</li>
                                        <li>Max Mint Quantity = 12 per wallet for first 4h. Then unlimited starting 11pm EST</li>
                                        <li>Decrease End Time = 213h30 min</li>
                                        </ul>
                                <p className='pink'>IMPORTANT</p>
                                <ul>
                                <li>Dutch auction has been chosen to protect you from gas wars</li>
                                <li>Reminder to have more ETH to cover gas fees</li>
                                </ul>
                                </div>
                                </div>
                            </Tab>

                            <Tab eventKey="wallet" title="GET METAMASK WALLET">
                            <div className='row '>
                                <div className='col-md-12'>
                                <p className='white'>In order to participate in the Mooning Monkey Minting Event, you’ll need to <strong>install the Metamask Wallet</strong>. Please follow the following instructions and/or the suggested video tutorial:</p>
                                <ol>
                                    <li>Visit: <a href="https://metamask.io/download.html">https://metamask.io/download.html</a></li>
                                    <li>Click <b>“add to Chrome”</b></li>
                                    <li>Follow Phantom guided instruction steps.</li>
                                    <li>Send ETH to your newly created Phantom Wallet to purchase the desired amount of Mooning Monkeys you wish to acquire.</li>
                                    </ol>
                                <ul>
                                <li>For a simple well explained video tutorial please click <a href="https://www.youtube.com/watch?v=OsRIHlr0_Iw"><b>HERE </b></a></li>
                                </ul>
                                </div>
                                </div>
                            </Tab>
                            
                           
                            </Tabs>
                    </div>
                </div>
            </div>
        </div>

        


        <div className='section memebership' id='membership'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                    <h2 className='heading'>MEMBERSHIP</h2>
                    <p className='sub-head'data-aos="zoom-in">On top of co-sharing astronomical profits from the game, here is what else awaits Mooning Monkey NFT holders….</p>
                    </div>
                </div>
                <div className='row top-50'>
                    <div className='col-md-3 text-center'>
                        <img src={process.env.PUBLIC_URL + '/img/member-1.png'} className='img-responsive' data-aos="zoom-in"/>
                        <h2>EVOLUTION MADNESS</h2>
                        <p>The <strong>Mooning Monkeys</strong> are facing an extinction level event, and, in order to survive, they <strong>NEED</strong> to <strong>EVOLVE</strong>. Fortunately, they have a plan…</p>
                        <p>During their travels, they will turn from <strong>12,000 Ordinary Mooning Monkeys, into 500 Eternal, Valuable, And Unique Yeti’s.</strong></p>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={process.env.PUBLIC_URL + '/img/monkey-44.png'} className='img-responsive' data-aos="zoom-in" />
                        <h2>COMIC BOOK</h2>
                        <p>This intriguing and action-packed story, available in a <strong>Limited Digital NFT Edition</strong>, will bring back the excitement you had back as a kid, when you were reading your favorite comic books, fantasizing all day about limitless worlds and opportunities.</p>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={process.env.PUBLIC_URL + '/img/img-3.png'} className='img-responsive' data-aos="zoom-in"/>
                        <h2>TOKEN REWARD PROGRAM</h2>
                        <p>This membership will give you the opportunity to <strong>Earn Even More Rewards</strong> by receiving <strong>DAILY TAKIONS ($TAK)</strong> without having to do any extra work, while you simply hold your <strong>Mooning Monkeys, AND</strong>, passively earn money from your game profits.</p>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img src={process.env.PUBLIC_URL + '/img/membership.png'} className='img-responsive' data-aos="zoom-in"/>
                        <h2>TONS OF SURPRISES</h2>
                        <p>Unfortunately, since they are surprises, we can’t reveal them right now, but just know that we’re talking about the <strong>good kind of surprises!</strong> (Not The Kind Which Will Require You To Evolve Into An Eternal Yeti)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section evolution'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2 className='heading'>EVOLUTION MADNESS</h2>
                    </div>
                </div>
                <div className='row top-50'>
                    <div className='col-md-6 right-78'>
                    <img src={process.env.PUBLIC_URL + '/img/evolution-img-3.png'} className='img-responsive' data-aos="fade-right"/>
                    </div>
                    <div className='col-md-6 left-30' data-aos="fade-left">
                    <p>The <strong>Mooning Monkeys</strong> will go through 3 stages of evolution using an advanced technology they’ll find during their travels,</p>
                    <p>Going from <strong>Ordinary Mooning Monkeys</strong>, to <strong>Galactic Gorillas</strong>, to <strong>Alien Gorillas</strong>, to the final stage of <strong>Eternal Yetis</strong>. The more evolved your <strong>Mooning Monkey</strong> is, the more rewards and opportunities you’re going to get.</p>
                    <p>These <strong>500 Chosen Mooning Monkeys</strong> will eternally live on the <strong>Ethereum Blockchain</strong>, travelling deep space, going on adventures, and constantly providing you with passive rewards.</p>
                    <a className='btn btn-pink gradient' href='/nft-evolution'>VISIT EVOLUTION LAB</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='section comic'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2 className='heading right-text'>THE MOONING MONKEY COMIC SERIE</h2>
                    </div>
                </div>
                <div className='row top-50' data-aos="zoom-in">
                    <div className='col-md-6 text-right right-50'>
                    <p>The amazing and intriguing <strong>Mooning Monkey Space Odyssey</strong> will be released into 4 comic books of 14 pages. If you want to receive a special surprise, you just need to be one of the first 10 people to own the full 14 pages of any chapter, trust us, you won’t be disappointed.</p>
                    <p>Additionally, owning a full comic will unlock exclusive privileges in the future, and as much as we’d love to tell you what they are, we can’t reveal them just yet.</p>
                        <a className='btn btn-pink gradient' href='/comic-book'>CHECK OUT  COMIC PAGE</a>
                    </div>
                    <div className='col-md-6 left-80'>
                        <img src={process.env.PUBLIC_URL + '/img/comic.png'} className='img-responsive' />
                    </div>
                </div>
            </div>
        </div>
        <div className='section token'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2 className='heading'>TOKEN REWARD PROGRAM</h2>
                    </div>
                </div>
                <div className='row top-50' data-aos="zoom-in">
                    <div className='col-md-6 right-78'>
                    <img src={process.env.PUBLIC_URL + '/img/token.png'} className='img-responsive' />
                    </div>
                    <div className='col-md-6 left-30'>
                    <p><strong>The Mooning Monkey Mission</strong> goes far beyond the simple NFT collectible sphere.</p>
                    <p>We are building a galactical ecosystem that will handsomely reward <strong>ALL</strong> participants. By simply holding any of the evolution <strong>NFT’s</strong>, you’ll receive daily <strong>Takion Tokens ($TAK)</strong></p>
                    <p>You’ll be able to Yield, stake, evolve earn extra rewards and much more… All of which will <strong>EARN YOU MONEY</strong>, passively, without requiring any extra effort.</p>
                    <p>Sounds pretty great, doesn’t it?</p>
                    <a className='btn btn-pink gradient' href='/nft-utility-token-tak'>TOKEN UTILITY OVERVIEW</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='section comic'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2 className='heading right-text'>INSANE SURPRISES</h2>
                    </div>
                </div>
                <div className='row top-50' data-aos="zoom-in">
                    <div className='col-md-6 text-right right-50'>
                    <p>These surprises will be announced along with the pre and post roadmap launch of the game. These surprises range from airdrops, to winning prizes, to massive project developments.</p>
                    <p>In order to have access to the surprises, all you need to do is own a <strong>Mooning Monkey</strong>, if you don’t already own one, click <a href="#mint"><strong>HERE</strong> </a>to get your own <strong>Mooning Monkey</strong>.</p>
                    <p><strong>P.S.</strong> There won’t be another sequel. If you want to be a part of this journey, you need to start minting As <strong>Soon As Possible</strong>.</p>
                        <a className='btn btn-pink gradient' href='/#roadmap'>CHECK OUT ROADMAP</a>
                    </div>
                    <div className='col-md-6 left-80'>
                        <img src={process.env.PUBLIC_URL + '/img/surprises.png'} className='img-responsive' />
                    </div>
                </div>
            </div>
        </div>
        <div className='section roadmap' id='roadmap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className='heading '>THE ROADMAP</h2>
                        <h2 className='heading raodmap-small bot-50'>JOIN US ON THE JOURNEY TO SPACE</h2>
                        <p className='sub-head '>Everything You Need To Know About The Epic Space Journey Your Mooning Monkeys Are About To Go On, Before They Take Off:</p>
                    </div>
                </div>
                <div className='row'> 
                <div id='timeline-content'>

                    <ul className='timeline'>
                        <li className='event'><h3> NFT Sale  </h3>
                    </li>
                    <li className='event ' data-date='10%' data-aos="fade-up">
                            <p>100 Mooning Monkeys Will Be Randomly Distributed To Early Participants. </p> 
                            <img src={process.env.PUBLIC_URL + '/img/roadmap-1.png'} className='img-responsive' />    
                    </li>
                    <li className='event' data-date='20%' data-aos="fade-up">
                        <p>The ETH Equivalent Of 30 Iphone 13  Will Be Raffled To Lucky Winners So They Can Buy Their Dream Phone And Play The <strong>Mooning Monkey Crash Game!</strong> </p>   
                        <img src={process.env.PUBLIC_URL + '/img/road-2.png'} className='img-responsive' /> 
                    </li>
                    <li className='event ' id='date' data-date='40%' data-aos="fade-up" >
                        <p>A surprise that will teleport the whole Mooning Monkey project to a new dimension which will Increase The Value Of Every Single Mooning Monkey NFT, Providing You With EVEN MORE Rewards And Potential Profits  </p>   
                        <img src={process.env.PUBLIC_URL + '/img/roadmap-ttt.png'} className='img-responsive' /> 
                    </li>
                    <li className='event ' id='date' data-date='60%' data-aos="fade-up">
                        <p>The ETH Equivalent Of 30 Macbook Air’s Will Be Raffled To Lucky Winners So They Can Buy Their Dream Laptop And Play The <strong>Mooning Monkey Crash
                    Game.</strong></p>   
                    <img src={process.env.PUBLIC_URL + '/img/road-4.png'} className='img-responsive' /> 
                    </li>
                    <li className='event ' id='date' data-date='80%' data-aos="fade-up">
                        <p>This Is An Extravagant, Over-The-Top, And Insane Surprise That <strong>1 Lucky Winner</strong> Will Remember For The Rest Of His <strong>Life</strong>. 
                    </p>   
                    <img src={process.env.PUBLIC_URL + '/img/roadmap-ttt.png'} className='img-responsive' /> 
                    </li>
                    <li className='event ' id='date' data-date='100%' data-aos="fade-up">
                        <p><strong>1,000,000 USD</strong> Will Be Deposited In The Bank Roll So That The First Rocket Can Get Launched To The Moon!  </p>   
                        <img src={process.env.PUBLIC_URL + '/img/road-5.png'} className='img-responsive' /> 
                    </li>    
                    </ul>
                    </div>
                </div>
                <div className='row'>

                <div id='timeline-content'>
                    <ul className='timeline'>
                        <li className='event'><h3> The Post-Launch</h3>
                    </li>
                    <li className='event aos-init' data-date='Q4 2021' data-aos='fade-up'>
                    <div><ul>
                                <li>Game screenshot sneak peeks will get everyone excited for the full game launch</li>
                                <li>Comic Book pages preview will get everyone wondering how the story will unfold...</li>
                            </ul></div>  
                    <img src={process.env.PUBLIC_URL + '/img/m-1.png'} className='img-responsive' />     
                    </li>
                    <li className='event aos-init' data-date='Q1 2022' data-aos='fade-up'>
                    <div className='second-time'>
                        <ul>
                            <li><strong>The beginning of an extensive promotional campaign spearheaded by exclusive partnerships with well-renowned artists and global celebrities to further strengthen our Mooning Monkey community.</strong></li>
                            <li>Mid-end Jan: Tokenomics V2 update on our Gitbook documentation for better reward model for the community and project as a whole.</li><li>Mid Feb $TAK IDO </li>
                            <li>Mid Feb: The release and INO of the 1st comic book part that will get the entire crypto and NFT space talking Mooning Monkeys</li>
                            <li>NFT evolution collection releases for Galactic Gorillas and Alien Gorillas</li>
                            <li>Certik Audit, a partnership which will ensure that all smart contracts are safe and secure.</li>
                            <li>Game V1 launch</li>
                            <li>Release and INO of the the 2nd comic part.</li>
                        </ul></div> 
                            <img src={process.env.PUBLIC_URL + '/img/rocket-1.png'}  className='img-responsive bottom-200' /> 
                    </li>
                    <li className='event aos-init' id='date' data-date='Q2 2022' data-aos='fade-up'>
                    <div><ul><li>Final NFT evolution collection release Eternal Yetis (with a Surprise)</li>
                            <li>Release and INO of the the 3th comic part</li>	
                            <li>New game announcement. Something BIG!</li>
                            </ul></div>
                            <img src={process.env.PUBLIC_URL + '/img/m-3.png'} className='img-responsive' /> 
                    </li>
                    <li className='event aos-init' id='date' data-date='Q3 2022' data-aos='fade-up'>
                    <div><ul><li>Release and INO of the the 4th comic part</li>
                            <li>V2 of the Mooning Monkey Game release</li>	
                            </ul></div>
                            <img src={process.env.PUBLIC_URL + '/img/m-4.png'} className='img-responsive' /> 
                    </li>
                   
                    </ul>
                    <p className='text-center'> <strong>“Roadmap is subject to changes. This is just an indication in time of some of the major events ahead.”</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section team'>
            <div className='container'>
            <div className='row top-50 partners text-center'>
					<div className='col-md-12 top-50 text-center'>
						<h2 className="heading ">INVESTORS</h2>
					</div>					
					
					<div className='row col-md-10 offset-1 top-70 text-center'>
						<div className='col-6  offset-3' data-aos="fade-up">
							<img src={require('../Whitelist/img/beast.png')} className="img-responsive width-450" alt='paid'/> 
						</div>
					</div>
					<div className='row col-md-10 offset-1 top-70'>
						<div className='col-6 top-20' data-aos="fade-left">
							<img src={require('../Whitelist/img/pomps.png')} className="img-responsive " alt='paid'/> 
						</div>
						<div className='col-6 ' data-aos="fade-right">
						<img src={require('../Whitelist/img/logo-1-2.png')} className="img-responsive width-450" alt='paid'/> 
						</div>
					</div>
            	</div>
                <div className='row top-50 partners text-center'>
					<div className='col-md-12 top-50 text-center'>
						<h2 className="heading ">PARTNERS</h2>
					</div>
					
					<div className='row col-md-10 offset-1 top-70'>
						<div className='col-6 ' data-aos="fade-left">
							<img src={require('../Whitelist/img/paid.png')} className="img-responsive " alt='paid'/> 
						</div>
						<div className='col-6 ' data-aos="fade-right">
						<img src={require('../Whitelist/img/master.png')} className="img-responsive width-450" alt='paid'/> 
						</div>
					</div>
					<div className='row col-md-10 offset-1 top-70 text-center'>
						<div className='col-6  offset-3' data-aos="fade-up">
							<img src={require('../Whitelist/img/apotte.png')} className="img-responsive width-450" alt='paid'/> 
						</div>
					</div>
					
            	</div>

                <div className='row top-100'>
                    <div className='col-md-12 text-center'>
                        <h2 className='heading '>ADVISORS</h2>
                        <h3 className=' text-center' data-aos="fade-up"><b>Meet our advisors</b></h3>
                        <div className='row width-70 top-70' data-aos="fade-up">
                           <div className='offset-md-4 col-4 text-center'>
                           <img src={require('../Home/img/adviser.png')} className="img-responsive " alt='stage-1'/> 
                           </div>
                        </div>

                        <div className='row width-60 top-70' data-aos="fade-up">
                         <div className='col-md-6'>
                            <img src={require('../Home/img/latitiude.png')} className="img-responsive " alt='stage-1'/> </div>
                        <div className='col-md-6'>
                            <img src={require('../Home/img/plutusvs.png')} className="img-responsive " alt='stage-1'/> 
                        </div>
                        
                        </div>
                    </div>
                </div>


                <div className='row top-100' id='team'>
                    <div className='col-md-12 text-center'>
                        <h2 className='heading '>DEGEN MONKEY LAUNCHERS</h2>
                        <h3 className=' text-center' data-aos="fade-up"><b>Meet the team</b></h3>
                        <div className='row width-70' data-aos="fade-up">
                           
{getTeamdata}
                        
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        <div className='section questions' id='faqs'>
            <div className='container'>                
                <div className='row top-50'>
                    <div className='col-md-6 '>
                    <h2 className=''>QUESTIONS?</h2>
                    <h4>WE HAVE THE ANSWERS</h4>
                    <p>Or reach us on social media:</p>
                    <div className='social '>
                    <a href='https://t.me/MooningMonkeyOfficial' target='blank' rel='noopener'>
                    <img src={process.env.PUBLIC_URL + '/img/telegram.png'} className='img-responsive' /></a> 
                    <a href='https://discord.gg/mooningmonkeyofficial' target='blank' rel='noopener'>
                    <img src={process.env.PUBLIC_URL + '/img/discord-icon-white.png'} className='img-responsive' /></a> 
                    <a href='https://twitter.com/MooningMonkeys' target='blank' rel='noopener'>
                    <img src={process.env.PUBLIC_URL + '/img/twitter-1.png'} className='img-responsive' /></a> 
                    
                </div>

                <Accordion className='top-50' defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>WHAT ARE MOONING MONKEYS?</Accordion.Header>
    <Accordion.Body>
    <p><strong>The Mooning Monkeys </strong>are 12,000 exclusive characters that <strong>ALL </strong>have <strong>UNIQUE </strong>characteristics.</p>
    <p><strong>The Mooning Monkeys NFT Game </strong>is a celebration for gaming, one that encourages gamers to join the <strong>NFT </strong>community and make friends, connections, and relationships with like-minded individuals all while potentially making money along the way.</p>
     
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>WHERE CAN I BUY ONE?</Accordion.Header>
    <Accordion.Body>
    <p>The <strong>Mooning Monkeys NFT</strong> will be available on our Official Website <a href="https://mooningmonkey.com/"><strong>MooningMonkey.com</strong></a> ONLY.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                     </div>
                    <div className='col-md-6 '>
                    <Accordion className='top-50' defaultActiveKey="0">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>WHEN CAN I MINT?</Accordion.Header>
                            <Accordion.Body>
                                <p>We’re just as excited to get this started as you are, but we want to make sure that everything is <strong>PERFECT</strong> before the launch.</p>
                            <p>The Date and time for the start of the Dutch Auction as been set to 31 January 2022 at 7PM EST</p>
                            <ul>
                                <li><strong>Starting Price</strong> = TBR</li>
                                <li><strong>Price drops by</strong> = 0.01 ETH until sold out or reaches 0.15ETH floor</li>
                                <li><strong>Price Drop Frequency</strong> = 6min</li>
                                <li><strong>Time to reach floor</strong> = 6min x 135 price drops = 810 min = 13h30 min</li>
                                <li><strong>Max Mint Quantity</strong> = 12 per wallet for first 4h. Then unlimited starting 11pm UTC</li>
                                <li><strong>Decrease End Time</strong> = 13h30 min</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>HOW ARE WE DIFFERENT?</Accordion.Header>
                            <Accordion.Body>
                            <p><strong>NFT’S </strong>are fun, and lately, everyone’s starting to pick up on the trend, but nearly all of them miss one of the most important factors of a <strong>NFT.</strong></p>
                            <p><strong>Real World UTILITY And RARITY, </strong>these are two qualities which we <em>BUILT </em><strong>The Mooning Monkeys </strong>upon, allowing you to earn passive rewards, and making sure that it’s a sustainable model which <strong>WON’T FAIL.</strong></p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>WHO’S ON THE TEAM?</Accordion.Header>
                            <Accordion.Body>
                            <p><strong>The Mooning Monkeys Project </strong>is made for <strong>gamers </strong>and <strong>NFT enthusiasts </strong>to join together and celebrate those 2 things.</p>
                            <p>The creators of such a project are, you guessed it, gamers, <strong>NFT</strong> enthusiasts, comic book fans and crypto degens, who absolutely <strong>LOVE </strong>those things, and they want to create a community in which like-minded individuals can talk about their passions and passively earn rewards.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        </Accordion>
                                    
                    </div>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Body closeButton><h2 className='heading text-center'>{state.poptitle}</h2>
           {state.description}
            <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
            </Modal.Body>
                </Modal>
             

                    <Modal
        show={showVideo}
        onHide={handleVideoClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
    
        </Modal.Header>
        <Modal.Body>
        <video   preLoad="auto"
  loop  autoPlay={true} muted width="750" height="500" controls >
<source src="https://mooningmonkey.com/wp-content/uploads/2022/01/Mooning%20Monkey%20NFTs%20-%20Project%20Overview%20-%20Ecosystem%20Presentation.mp4" type="video/mp4"/>
</video>
        </Modal.Body>
      
      </Modal>
               
               
        </React.Fragment>
    ) 
}
