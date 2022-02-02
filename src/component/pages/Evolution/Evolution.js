import React,{useState, useEffect} from 'react'

import {Tabs,Tab} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Evolution() {
    const [key, setKey] = useState('home');

	useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
	 
      return (
        <React.Fragment>
			 <Helmet>   
   <meta name="description" content="Mooning Monkey NFT survival will depend on their ability to evolve. Luckily, Mooning Monkeys are smart and developed an Evolution Chamber to face what’s coming and to make you earn more in this game of survival." />
</Helmet>
        <div className='section evolution-lab'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center token-top-sec' data-aos="fade-up">
                        <h1 className='' >THE EVOLUTION LAB</h1>
                        <p className='top-50'>Evolve Your Mooning Monkeys To Gain Access To Exclusive Benefits And Of Course, Earn More Rewards!</p>
                        <p>The Mooning Monkeys NEED To Evolve In Order To Survive, Will You Help Them?</p>
                        <p className='small'>You’ll be able to evolve your Mooning Monkey 3 Times! Each evolution allowing you to earn more as an NFT Holder once the game launches.</p>
                                             
                    </div>

                    
                </div>
                <div className='row top-50'>
                    <div className='col-md-3 text-center' data-aos="zoom-in">
                        <h2 className='small-head'>Stage 1</h2>
                        <img src={require('../Evolution/img/stage-1.png')} className="img-responsive " alt='stage-1'/> 
                        <h2 className='small-head top-30'>Mooning Monkey</h2>
                    </div>
                    <div className='col-md-3 text-center' data-aos="zoom-in">
                        <h2 className='small-head'>Stage 2</h2>
                        <img src={require('../Evolution/img/stage-2.png')} className="img-responsive " alt='stage-1'/> 
                        <h2 className='small-head top-30'>Galactic Gorilla</h2>
                    </div>
                    <div className='col-md-3 text-center' data-aos="zoom-in">
                        <h2 className='small-head'>Stage 3</h2>
                        <img src={require('../Evolution/img/stage-2.png')} className="img-responsive " alt='stage-1'/> 
                        <h2 className='small-head top-30'>Alien Gorilla</h2>
                    </div>
                    <div className='col-md-3 text-center' data-aos="zoom-in">
                        <h2 className='small-head'>Stage 4</h2>
                        <img src={require('../Evolution/img/stage-2.png')} className="img-responsive " alt='stage-1'/> 
                        <h2 className='small-head top-30'>Eternal Yeti</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='section game evo-tab'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 ' data-aos="zoom-in">
                    <h2 className='heading text-center' >EVOLVE NOW</h2>
                    <p className='text-center sub-head'>Select the available evolution stage according to your Mooning Monkey NFT holding to process the evolution</p>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='Stage2' eventKey="home" title="Stage 2 ">
                            <div className='row'>
                                        <div className='col-6'>
                                            <h2 >My NFT Mooning Monkeys</h2>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>CONNECT WALLET </a></div>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>BUY MONKEY </a></div>
                                        </div>
                                    </div>
                                    <div className='row top-30'>
                                        <p> In order to achieve the powerful <b>Galactic Gorilla</b>, you’ll have to sacrifice 4 of your current <b>Mooning Monkeys</b> to depart into deep space and surpass the obstacles they’ll encounter on their way to the new planet.</p>
                                        <p><b>NOTE:</b> By clicking “<b>Evolve</b>”, the <b>Mooning Monkeys</b> you’ve chosen will be sent to a Ethereum black hole wallet and disappear forever, however, <b>EACH EVOLUTION</b> will make you more money in the <b>Mooning Monkey Game</b>.</p>              
                
                                    </div>
                                    <div className='row section-design'>
                                        <div className='col-8 row'>
                                                    <h2 >Start evolve process</h2>
                                                    <div className='col-3'>
                                                        <img src={require('../Evolution/img/blank-img.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-3'>
                                                        <img src={require('../Evolution/img/blank-img.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-3'>
                                                        <img src={require('../Evolution/img/blank-img.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-3'>
                                                        <img src={require('../Evolution/img/blank-img.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                        </div>
                                        <div className='col-4 img-arrow'>
                                            <img src={require('../Evolution/img/blue-img.png')} className="img-responsive " alt='stage-1'/> 
                                            <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>EVOLVE </a></div>
                                        </div>
                                        
                                    </div>
                            </Tab>
                            <Tab eventKey="Stage3" title="Stage 3">
                            <div className='row'>
                                        <div className='col-6'>
                                            <h2 >MY NFT GALACTIC GORILLAS</h2>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>CONNECT WALLET </a></div>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>BUY MONKEY </a></div>
                                        </div>
                                    </div>
                                    <div className='row top-30'>
                                    <p> The <b>Alien Gorilla</b> is the <b>KEY</b> to winning against the alien invader and winning <b>The Inter-Galactic War</b>, you’ll have to sacrifice <b>3 Galactic Gorillas</b> in order to achieve such a strong being and protect the species from extinction.</p>
                                    <p><b>NOTE:</b> By clicking “<b>Evolve</b>”, the <b>Galactic Gorillas</b> you’ve chosen will be sent to a Ethereum black hole wallet and disappear forever, however, <b>EACH EVOLUTION</b> will make you more money in the <b>Mooning Monkey Game</b>.</p>            
                
                                    </div>
                                    <div className='row section-design'>
                                        <div className='col-8 row'>
                                                    <h2 >Start evolve process</h2>
                                                    <div className='col-4'>
                                                        <img src={require('../Evolution/img/blan-img-2.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-4'>
                                                        <img src={require('../Evolution/img/blan-img-2.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-4'>
                                                        <img src={require('../Evolution/img/blan-img-2.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                   
                                        </div>
                                        <div className='col-4 img-arrow'>
                                            <img src={require('../Evolution/img/blue-img.png')} className="img-responsive " alt='stage-1'/> 
                                            <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>EVOLVE </a></div>
                                        </div>
                                        
                                    </div>
                            </Tab>
                            <Tab eventKey="Stage4" title="Stage 4">
                            <div className='row'>
                                        <div className='col-6'>
                                            <h2 >MY NFT ALIEN GORILLAS</h2>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>CONNECT WALLET </a></div>
                                        </div>
                                        <div className='col-3'>
                                                <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>BUY MONKEY </a></div>
                                        </div>
                                    </div>
                                    <div className='row top-30'>
                                    <p> Although <b>The Alien Gorilla</b> is extremely powerful, it is still bound by the shackles of mortality… as well as an unsettling look that’s not easy on the eye, in order to guarantee the survival of the <b>Mooning Monkey’s Species AND</b> make sure they do so with style… You’ll need to sacrifice <b>2 Of Your Alien Gorillas</b> to make <b>1 Eternal Yeti</b> that will live forever on the Blockchain and earn the highest possible levels of daily game rewards.</p>
                                    <p><b>NOTE:</b> By clicking “<b>Evolve</b>”, the <b>Alien Gorillas</b> you’ve chosen will be sent to a Ethereum black hole wallet and disappear forever, however, <b>EACH EVOLUTION</b> will make you more money in the Mooning Monkey Game.</p>          
                
                                    </div>
                                    <div className='row section-design'>
                                        <div className='col-8 row'>
                                                    <h2 >Start evolve process</h2>
                                                    <div className='col-6'>
                                                        <img src={require('../Evolution/img/blan-img-2.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                    <div className='col-6'>
                                                        <img src={require('../Evolution/img/blan-img-2.png')} className="img-responsive " alt='stage-1'/> 
                                                    </div>
                                                                                                       
                                        </div>
                                        <div className='col-4 img-arrow'>
                                            <img src={require('../Evolution/img/blue-img.png')} className="img-responsive " alt='stage-1'/> 
                                            <div className='col-12 lab-btn'><a className='btn btn-dark' href=''>EVOLVE </a></div>
                                        </div>
                                        
                                    </div>
                            </Tab>
                           
                            </Tabs>
                            <p className='text-center top-50'>Make sure you fight to get the most rare Mooning Monkeys as the traits rarity level of your evolved NFT’s will be matched with those from your previous evolution stage</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section tree '>
        <div className='container'>
                <div className='row '>
                   
                    <div className='col-md-12 text-center' data-aos="zoom-in">
                        <h2 className='heading ' >EVOLUTION TREE</h2>
                        <p className='sub-head'>In order to achieve the top evolution, earn a spot among the 500 prestigious <b>Eternal Yeti</b> holders’s circle, and receive the highest possible amount of passive rewards, you’ll need 24 “<b>Mooning Monkeys</b>”</p>
                        <p className='sub-head top-30'>Below, you can see <b>The Evolution Tree</b>, a visual that shows you <b>EXACTLY</b> how the evolution process works:</p>
                        <h2 className='font-35 top-50'>Buy 24 Mooning Monkeys</h2>

                    </div>
                </div>

                <div className='row first-timeline-n2 top-30'>   
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>					
						</div>
						
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>	
						</div>
						
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>	
						</div>
						
						<div className='col-2'>
						 <div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-4-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>	
						</div>
						
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>	
						</div>
						
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-1-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-2-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/monkey-3-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/monkey-4-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								
				            </div>	
						</div>
						
						
					</div>
                    <h2 className='font-35 top-50 text-center'>Evolve them into 6 Galactic Gorillas</h2>
                    <div className='row sec-3-img2 top-50'> 
						<div className='col-6'>			
							<div className='col-4'>
								<div className='main-timeline2'>
									<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
						</div>
						<div className='col-6'>			
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
											</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
											</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Evolution/img/banak-question-1.png')}/></span>
											</div>										
								</div>					
							</div>
						</div>
					</div>

                    <h2 className='font-35 top-50 text-center'>Evolve them into 2 Alien Gorillas</h2>

                    <div className='row sec-4-img'> 
										
						<div className='col-2'>
							<div className='main-timeline'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/pink-imge.png')}/></span>
										</div>									   
									</div>
								</div>								 																
				            </div>					
						</div>
						
						<div className='col-2'>
							<div className='main-timeline'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img  className='img-responsive ' src={require('../Evolution/img/pink-imge.png')}/></span>
										</div>									   
									</div>
								</div>								 															
				            </div>					
						</div>
					</div>
				
				
					<div className='row sec-5-img'> 
										
						<div className='col-2'>
							<div className='main-timeline'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Evolution/img/blue-imf-final.png')}/></span>
										</div>									   
									</div>
								</div>								 																
				            </div>					
						</div>	
					</div>

                    <div className='row top-100 text-center'> 
                    <h2 className="font-35">Get 1 Eternal Yeti</h2>
                    </div>

                    <div className='row top-100 text-center'> 
                    <h2 className="heading">EVOLUTION EARNINGS</h2>
                    <p className='sub-head'>50% Of ALL Game Profit Will Be Redistributed To The Mooning Monkeys NFT Holders, The Image Below Shows You The Benefits Of Evolving Your Mooning Monkeys:</p>

					<table id="customers2">
									<tbody>
									<tr>
									<th>Stage</th>
									<th>Unit</th>
									<th>Remarks</th>
						
									</tr>
									<tr>
									<td>Eternal Yeti</td>
									<td>500</td>
									<td>Get 1 Eternal Yeti by burning 2 Alien Gorilla</td>
								
									</tr>
									<tr>
									<td>Alien Gorilla</td>
									<td>1,000</td>
									<td>Get 1 Alien Gorilla by burning 3 Galactic Gorilla</td>

									</tr>
									<tr>
									<td>Galactic Gorilla</td>
									<td>3,000</td>
									<td>Get 1 Galactic Gorilla by burning 4 Mooning Monkeys</td>

									
									</tr>
									<tr>
									<td>Mooning Monkey</td>
									<td>12,000</td>
									<td>None</td>

								
									</tr>
									</tbody> 
									</table>

                                  
                    </div>
                    <div className='row top-50 text-center'>
						<p className='small-text'>For more information about the “Reward Methodology” please <a href="/nft-calculator/" target="blank"><b>click here</b></a></p>
                            <div className='col-md-12 top-50 text-center'>  <a className="btn btn-pink gradient" href="#">CHECK OUT PROFIT CALCULATOR</a></div>
                        
                    </div>


					
            </div>
        </div>
		
        </React.Fragment>
    ) 
}
