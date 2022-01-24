import React,{useState} from 'react'
import {Tabs,Tab} from 'react-bootstrap'
export default function Attributes2() {
    const [key, setKey] = useState('home');
      return (
        <React.Fragment>
        <div className='section cal-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '>
                        <h2 className='heading-big'>Mooning Monkey Attributes</h2>
						<a class="btn btn-pink gradient top-30" href="#"  data-aos="fade-up">COLLECTION ATTRIBUTES</a>
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
                            <Tab className='stage1' eventKey="home" title="Stage 1 Mooning Monkeys">
                            <div className='row'>
							

   								</div>
                     
                                    
                            </Tab>
                            <Tab eventKey="stage2" title="Stage 2 Galactic Gorillas">
                     
                            </Tab>
                          

							<Tab eventKey="stage3" title="Stage 3 Alien Gorillas">
					
                            </Tab>
                           
							<Tab eventKey="stage4" title="Stage 4 Eternal Yeti">
					
                            </Tab>
                            </Tabs>
                         
                    </div>
                </div>

				
            </div>
        </div>
        
        </React.Fragment>
    ) 
}
