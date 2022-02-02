import React,{useState} from 'react'
import {Helmet} from "react-helmet";
import {Tabs,Tab} from 'react-bootstrap'
import StakingCalculator from './staking-calculator/calculator';
import ComicsProfitCalculator from './comics-profit-calculator/calculator';
import ProfitCalculator from './profit-calculator/calculator';
import EvolutionCalculator from './evolution-calculator/calculator';
export default function Calculator() {
    const [key, setKey] = useState('home');
      return (
        <React.Fragment>
                <Helmet>   
   <meta name="description" content="The Mooning Monkey NFT Calculator will help you calculate the value of your NFT Monkey holdings. Estimate profit forecast with our NFT calculator." />
</Helmet>
        <div className='section cal-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '>
                        <h1 className='heading-big'>CALCULATOR</h1>
                        </div>
                </div>
               
            </div>  
        </div>
		
        <div className='section calculator-tab'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
						
                       <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='profit' eventKey="home" title="PROFIT CALCULATOR ">
                            <div className='row'>
							
	   <ProfitCalculator />
   								</div>
                     
                                    
                            </Tab>
                            <Tab eventKey="evolution" title="EVOLUTION CALCULATOR">
                          <EvolutionCalculator />
                            </Tab>
                            <Tab eventKey="tree" title="EVOLUTION TREE">
                            <div className='section tree '>
        <div className='container'>
                <div className='row '>                   
                    <div className='col-md-12 text-center'>
                          <p className='sub-head'>Use the Evolution Tree tab if you want a quick understanding of how many “Mooning Monkeys” you’ll need in order to go through all of the evolution stages and reach the extremely rare and desired stage of Eternal Yeti</p>
                                           </div>
                </div>

                <div className='row first-timeline-n2 top-30'>   
						<div className='col-2'>
							<div className='main-timeline2'>
								<div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-1.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-1.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-2.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-2.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-3.png')}/></span>
										</div>
									   
									</div> 
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-3.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-3.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-4.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-4-1.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-5.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-5.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-1-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-2-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/monkey-3-line-6.png')}/></span>
										</div>
									   
									</div>
								</div>
								 <div className='timeline'>
									<div className='timeline-content'>
										<div className='timeline-year'>
											<span><img className='img-responsive ' src={require('../Calculator/img/monkey-4-line-6.png')}/></span>
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
										<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									<div className='timeline-year'>
										<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
									</div>										
								</div>					
							</div>
						</div>
						<div className='col-6'>			
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
											</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
											</div>										
								</div>					
							</div>
							<div className='col-4'>
								<div className='main-timeline2'>
									
											<div className='timeline-year'>
												<span><img className='img-responsive ' src={require('../Calculator/img/banak-question-1.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/pink-imge.png')}/></span>
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
											<span><img  className='img-responsive ' src={require('../Calculator/img/pink-imge.png')}/></span>
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
											<span><img className='img-responsive ' src={require('../Calculator/img/blue-imf-final.png')}/></span>
										</div>									   
									</div>
								</div>								 																
				            </div>					
						</div>	
					</div>

                    
                   


					
            </div>
        					</div>
                            </Tab>

							<Tab eventKey="staking" title="STAKING CALCULATOR">
							<StakingCalculator />
                            </Tab>
                           
							<Tab eventKey="comic-profit" title="COMICS PROFIT CALCULATOR">
							<ComicsProfitCalculator />
                            </Tab>
                            </Tabs>
                         
                    </div>
                </div>

				<div className='row top-100 text-center'> 
                    <h2 className="heading">REWARD DISTRIBUTION MODEL</h2>
                    <p className='sub-head'>50% of all Game Profit will be redistributed To The Mooning Monkeys NFT holders based on both the "Evolution Levels" and "Rarity Traits" of the NFTs they own.</p>

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
                    <div className='row top-50'>
                            <div className='col-md-12 text-center small-sec'> 
							<p className="small-text white-text">For more information about the “Reward Methodology” please <a href="https://mooningmonkeyofficial.gitbook.io/mooning-monkey/non-fungible-tokens-nft" target="blank"><b>click here</b></a></p>
							<p className='small-text'># Rewards and Bonus starts from phase 2 when the Mooning Monkey crash game launches. Revenue represents the proportionate % of revenue from the bank roll for the Mooning Monkey house. 60% of the revenue (where there is profit) will be distributed across the NFT holders as rewards and bonus</p>
							</div>
                        
                    </div>
            </div>
        </div>
        
        </React.Fragment>
    ) 
}
