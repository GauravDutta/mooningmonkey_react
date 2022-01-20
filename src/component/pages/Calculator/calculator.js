import React,{useState} from 'react'
import {Tabs,Tab} from 'react-bootstrap'

export default function Calculator() {
    const [key, setKey] = useState('home');
      return (
        <React.Fragment>
        <div className='section cal-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '>
                        <h2 className='heading-big'>CALCULATOR</h2>
                        </div>
                </div>
               
            </div>  
        </div>
		
        <div className='section calculator-tab'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
						<p className='pink-col'><b>An update for the Profit and Staking calculators will take place by 25th Jan to represent the new and improved tokenomics with our “Perpetual Rewards” model and other additional features. To learn more click here.</b></p>
                       <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='profit' eventKey="home" title="PROFIT CALCULATOR ">
                            <div className='row'>
							<div className='profit-container'>
       
	   <div className='profit-generat-wrapper'>
		  <div className='profit-input-genrat-sec'>
			   <div className='profit-genrator-sec'>
				<p>Use the Profit Calculator to determine the crazy lucrative rewards you’ll be able to generate by holding “Mooning Monkeys” and other evolution stages such as “Galactic Gorillas”,  “Alien Gorillas” and “Eternal Yetis”</p>
			   </div>
		   </div>
			   <div className='sec-heading'>
				   <span>STEP 1:</span> 
				   BET SETTINGS
			   </div>
			   <div className='profit-genrator-sec '>
				   <div className='label-container'>
					   <label for="">Daily Bets</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input bets-input' id="bets"  data-slider-class="bets-slider" value="75'000" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="bets">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="bets"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="bets">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="bets"></span>
							   </span>
						   </div>
					   </div>
				   </div>
				   <div className='slider-input-sec range-slider'>
					   <input type="range" className='calc-input range range-slider__range bets-slider' id="bets-slider"  data-input-class="bets-input" value="75000" min="75000" max="1000000"  step="5000" />
					   <div className='slider-min-max'>
						   <span>75'000</span>
						   <span>1'000'000</span>
					   </div>
				   </div>
			   </div>
			   <div className='profit-genrator-sec '>
				   <div className='label-container'>
					   <label for="">Avg wager per bet ($)</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input wager-input' id="wager"  data-slider-class="wager-slider" value="15" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="wager">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="wager"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="wager">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="wager"></span>
							   </span>
						   </div>
					   </div>
				   </div>
				   <div className='slider-input-sec range-slider'>
					   <input type="range" className='calc-input range range-slider__range wager-slider' id="wager-slider"  data-input-class="wager-input" value="15" min="15" max="1000"  step="5" />
					   <div className='slider-min-max'>
						   <span>15</span>
						   <span>1'000</span>
					   </div>
				   </div>
			   </div>
			   <div className='sec-heading'>
				   <span>STEP 2:</span>
				   NFT HOLDING SETTINGS
			   </div>
			   <div className='profit-genrator-sec'>
				   <div className='label-container'>
					   <label for="">Mooning Monkey - Level 1</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input mooning-monkey-input' id="mooning-monkey"  data-slider-class="mooning-monkey-slider" value="0" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="mooning-monkey">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="mooning-monkey"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="mooning-monkey">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="mooning-monkey"></span>
							   </span>
						   </div>
					   </div>
					   
				   </div>
				   
				   <div className='slider-input-sec range-slider'>
					   <input type="range" className='calc-input range range-slider__range mooning-monkey-slider' id="mooning-monkey-slider"  data-input-class="mooning-monkey-input" value="0" min="0" max="12000"  step="1" />
					   <div className='slider-min-max'>
						   <span>0</span>
						   <span>12'000</span>
					   </div>
				   </div>
			   </div>
			   <div className='profit-genrator-sec '>
				   <div className='label-container'>
					   <label for="">Galactic Gorilla - Level 2</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input galactic-gorilla-input' id="galactic-gorilla"  data-slider-class="galactic-gorilla-slider" value="0" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="galactic-gorilla">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="galactic-gorilla"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="galactic-gorilla">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="galactic-gorilla"></span>
							   </span>
						   </div>
					   </div>
				   </div>
				   <div className='slider-input-sec range-slider'>
					   <input type="range" class='calc-input range range-slider__range galactic-gorilla-slider' id="galactic-gorilla-slider"  data-input-class="galactic-gorilla-input" value="0" min="0" max="6000"  step="1" />
					   <div className='slider-min-max'>
						   <span>0</span>
						   <span>6'000</span>
					   </div>
				   </div>
			   </div>
			   <div className='profit-genrator-sec '>
				   <div className='label-container'>
					   <label for="">Alien Gorilla - Level 3</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input alien-gorilla-input' id="alien-gorilla"  data-slider-class="alien-gorilla-slider" value="0" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="alien-gorilla">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="alien-gorilla"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="alien-gorilla">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="alien-gorilla"></span>
							   </span>
						   </div>
					   </div>
				   </div>
				   <div className='slider-input-sec range-slider'>
					   <input type="range" className='calc-input range range-slider__range alien-gorilla-slider' id="alien-gorilla-slider"  data-input-class="alien-gorilla-input" value="0" min="0" max="3000"  step="1" />
					   <div className='slider-min-max'>
						   <span>0</span>
						   <span>3'000</span>
					   </div>
				   </div>   
			   </div>
			   <div className='profit-genrator-sec '>
				   <div className='label-container'>
					   <label for="">Eternal Yeti - Level 4</label> 
					   <div className='input-container'>
						   <input type="text" className='calc-input input-field range-slider__input eternal-yeti-input' id="eternal-yeti"  data-slider-class="eternal-yeti-slider" value="0" />
						   <div className='rc-input-number-handler-wrap'>
							   <span unselectable="on" role="button" aria-label="Increase Value" className='rc-input-number-handler rc-input-number-handler-up quantity__plus ' data-input="eternal-yeti">
								   <span unselectable="on" className='rc-input-number-handler-up-inner' data-input="eternal-yeti"></span>
							   </span>
							   <span unselectable="on" role="button" aria-label="Decrease Value" className='rc-input-number-handler rc-input-number-handler-down quantity__minus' data-input="eternal-yeti">
								   <span unselectable="on" className='rc-input-number-handler-down-inner' data-input="eternal-yeti"></span>
							   </span>
						   </div>
					   </div>
				   </div>
				   <div className='slider-input-sec range-slider'>
					   <input type="range" className='calc-input range range-slider__range eternal-yeti-slider' id="eternal-yeti-slider"  data-input-class="eternal-yeti-input" value="0" min="0" max="500" step="1" />
					   <div className='slider-min-max'>
						   <span>0</span>
						   <span>500</span>
					   </div>
				   </div>
			   </div>
			   <div className='sec-heading'>
				   <span>STEP 3:</span>
				   PROFIT FORECAST
			   </div>
			   
   
   
		   </div>
		   <div className='result-table-sec'>
			   <table className='result-table'>
				   <thead>
					   <tr>
						   <th>PERIOD</th>
						   <th>Y1</th>
						   <th>Y2</th>
						   <th>Y3</th>
						   <th>Y4</th>
						   <th>Y5</th>
					   </tr>
				   </thead>
				   <tbody id="levels-data">
			   
				   </tbody>
			   </table>
			   
		   </div>
		   <div className='footer-result-sec'>
			   <div className='total-result-label'>Total Earned Over <br/> 5 years:</div>
			   <div className='total-result-text' id="total-earned"></div>
		   </div>
		   <div id="chart-container"  className=''>
			   <canvas id="canvas" width="400" height="300" ></canvas>
		   </div>
		   
	   </div>
	   
   </div>
                     
                                    
                            </Tab>
                            <Tab eventKey="evolution" title="EVOLUTION CALCULATOR">
                          
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
                           
							<Tab eventKey="comic-profit" title="COMICS PROFIT CALCULATOR">
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
                         
                    </div>
                </div>

				<div className='row top-100 text-center'> 
                    <h2 class="heading">REWARD DISTRIBUTION MODEL</h2>
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
							<p className='small-text'>For more information about the “Reward Methodology” please click here								
							</p>
							<p className='small-text'># Rewards and Bonus starts from phase 2 when the Mooning Monkey crash game launches. Revenue represents the proportionate % of revenue from the bank roll for the Mooning Monkey house. 60% of the revenue (where there is profit) will be distributed across the NFT holders as rewards and bonus</p>
							</div>
                        
                    </div>
            </div>
        </div>
        
        </React.Fragment>
    ) 
}
