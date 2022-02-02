import React,{useState} from 'react'
import {Helmet} from "react-helmet";
import {Tabs,Tab,Modal,Button,} from 'react-bootstrap'
import  Tab_Attribute from './tab/Tab_Attribute';


export default function Attributes2() {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return (
        <React.Fragment>
                <Helmet>   
   <meta name="description" content="Mooning Monkey Attributes COLLECTION ATTRIBUTES Part 1Part 2Part 3Part 4 You Need to own 1 Gorrila to buy 1 page Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS" />
</Helmet>
         <div className='section attribute-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '>
                        <h1 className='heading-big' >Mooning Monkey Attributes</h1>
						<a className="btn btn-pink gradient top-30" href="#"  onClick={() => handleShow()}  >COLLECTION ATTRIBUTES</a>
                    </div> 
                </div>    
               
            </div>  
        </div>
		
        <div className='section attribute-tabs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
						
                       <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='stage1' eventKey="home" title="Stage 1 Mooning Monkeys">
                            <div className='row attribute-imgs-tab'>
                                    
                                <Tab_Attribute />
                             

   								</div>
                     
                                    
                            </Tab>
                            <Tab eventKey="stage2" title="Stage 2 Galactic Gorillas">
                            <p className='text-center'>Galactic Gorilla Collection will be available in February 2022. In the meantime, please head to our <a href="/nft-calculator/">Profit Calculator</a> to check potential passive incomes you could generate.</p>
                            </Tab>
                          

							<Tab eventKey="stage3" title="Stage 3 Alien Gorillas">
                            <p className='text-center'>Alien Gorilla Collection date to be <a href="https://announced.in/" target="blank">announced.</a> In the meantime, please head to our <a href="/nft-calculator/">Profit Calculator</a> to check potential passive incomes you could generate.</p>
                           
                            </Tab>
                           
							<Tab eventKey="stage4" title="Stage 4 Eternal Yeti">
                            <p className='text-center'>Eternal Yeti Collection date to be <a href="https://announced.in/" target="blank">announced.</a> In the meantime, please head to our <a href="/nft-calculator/">Profit Calculator</a> to check potential passive incomes you could generate.</p>
                            </Tab>
                            </Tabs>
                         
                    </div>
                </div>

				
            </div>
        </div>
        <Modal show={show} onHide={handleClose} >
            <Modal.Body closeButton><h2 className='heading text-center'>COLLECTION ATTRIBUTES</h2>
          
           <p className='white-space'>This <b>epic</b> space journey is going to begin with 12,000 excited, unique, and perhaps a bit intimidated monkeys being sent to the moon and beyond. </p>
           <p className='white-space'>From there, they’ll bravely jump into deep space to reach a new planet, one which they can call home, a planet that can save them.</p>

           <p className='white-space'>However, along the way, they’ll have to overcome dozens of obstacles, such as travelling in the chaotic deep space, fighting intergalactic aliens, and finding a cure to their shackling mortality.</p>

           <p className='white-space'>They will have to evolve, reducing the initial mooning population from 12,000<b> Normal Mooning Monkeys</b>, to only <b>500 Elite Beings</b> that are infinitely more powerful, and of course, more <b>Valuable</b>.</p>

           <p className='white-space'>These <b>500 Chosen Mooning Monkeys</b> will live eternally on the <b>Ethereum Blockchain</b>, travelling deep space, going on adventures, and constantly overcoming new obstacles in order to keep their species alive. </p>

           <p className='white-space'><b>Unique, Distinct, Rare, And Valuable!</b></p>

           <p className='white-space'>All <b>Mooning Monkeys</b> are unique crypto heroes that have been drilled around <b>247 DISTINCTIVE TRAITS</b>.</p>

           <p className='white-space'>Of course, some traits are rarer than others, but this is exactly what differentiates them from each other, and what defines their rarity.</p>

           <p className='white-space'>This space flight, with all of the <b>Mooning Monkeys</b> onboard, is set to be minted at our <b>Dutch Auction</b> on <b>31 Jan 7PM EST</b>.</p>

           <p className='white-space'>If you want to be a part of this epic journey, if you want to reach the moon alongside your own <b>Mooning Monkey High-Utility NFT</b>, you’ll have to start minting your <b>Mooning Monkey</b> as soon as the countdown below reaches <a href="#mint"><b>zero</b></a>:</p>

           <p className='white-space'><b>P.S.</b> The <b>Mooning Monkeys</b> can’t afford failure, this is their only shot at survival, so there won’t be a sequel. If you want to be a part of this amazing, interesting, and reward-filled journey <b>FULL</b> of opportunities, you need to start minting <b>As Soon As</b> the countdown reaches <a href="#mint"><b>zero</b></a>.</p>

            <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
            </Modal.Body>
                </Modal>
        </React.Fragment>
    ) 
}
