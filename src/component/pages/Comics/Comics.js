import React,{useState, useEffect} from 'react'
import {Helmet} from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Countdowns from '../Countdowns'
import {Tabs,Tab,Modal,Button,} from 'react-bootstrap'
export default function Comics() {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

      function handleShow(){
    

        setShow(true);
      }
    const  text = `Mooning Monkeys are one of many species in the multiverse. They are an advanced race just beginning to venture out into the final frontier—space. However, before they are able to explore much of the universe, their planet is plagued by tragedies. Nature is relentless as She batters the planet with dozens of natural disasters that rips apart the landscape of the Mooning Monkey planet, rendering it nearly uninhabitable. To make matters worse, Mooning Monkeys survival seems impossible when a mysterious virus wipes out all female Mooning Monkeys. \n 
    As if these tragedies weren’t enough, a massive, world-ending, asteroid hurtles towards the Mooning Monkey’s planet. Determined to survive, Mooning Monkey scientists and engineers rush to duplicate their greatest invention—a spaceship capable of intergalactic travel—and create as many functioning replicas as possible. They hope to escape towards safety, but they have no plan after leaving the planet. Only seventeen rocket ships are built before the asteroid picks up speed and destroys the planet. \n 
    The survivors find themselves trapped on their uninhabitable moon, drifting in space with no orbit. They soon discover that their moon is caught by the sun’s gravity, and it is being pulled towards its fiery surface. To escape impending doom, the Mooning Monkeys dismantle most of the rocket ships to create an evolution chamber. They hope that the power of science will help their species survive, even if they look different in the future. If the experiment is a success, they can send their strongest out to seek out a habitable future and ensure the survival of the species. \n 
    Follow the Mooning Monkeys as they assemble their evolution machine, explore an unknown planet with the Galactic Gorillas, battle hostile enemies with the Alien Gorillas, and discover the final piece of the puzzle needed to create the Eternal Yeti in this thrilling comic series!`;
      return (
        <React.Fragment>
              <Helmet>   
   <meta name="description" content="The Mooning Monkey NFT comic book is an action packed comic book that will reignite your love for comics and absorb you to the new world of crypto monkey comic NFTs characters" />
</Helmet>
        <div className='section comic-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '  data-aos="fade-up">
                        <h1 className='heading-big'>ONE COMIC, <br/>ONE EPIC SPACE ODISSEY</h1>
                        <p className='top-50'>AN ACTION PACKED SPACE JOURNEY THAT WILL REIGNITE YOUR LOVE FOR COMIC BOOKS</p>
                        <p className='small'>GET ABSORBED INTO A WORLD OF MYSTERY, FANTASY, AND UNLIMITED ACTION!</p>
                    </div>
                </div>
               
            </div>
        </div>
		<div className='section comic-second'>
            <div className='container'>
                <div className='row'>
				<div className='col-md-12 text-center'  data-aos="fade-up"> 
				<h2 className='heading text-center'>THE STORYLINE</h2>
				 <a className='btn btn-pink gradient top-30' href='#' onClick={() => handleShow()}  data-aos="fade-up">READ STORYLINE</a></div>
				
				</div>
				<div className='row top-100'>
                   <div className='col-3' data-aos="fade-up">
						<div className='inner-box'>
							<img src={require('../Comics/img/part-1.png')} className="img-responsive " alt='stage-1'/> 
						<div className='text_inner'><h3>PART 1:<br/>DARK DAYS</h3></div>
						</div>
				   </div>
				   <div className='col-3' data-aos="fade-up">
					<div className='inner-box'>
							<img src={require('../Comics/img/released-2.png')} className="img-responsive " alt='stage-1'/> 
							<div className='text_inner'><h3>PART 2: INTO THE UNKNOWN</h3></div>
						</div>
				   </div>
				   <div className='col-3' data-aos="fade-up">
				   		<div className='inner-box'>
						<img src={require('../Comics/img/released-2.png')} className="img-responsive " alt='stage-1'/> 
						<div className='text_inner'><h3>PART 1:<br/>DARK DAYS</h3></div>
						</div>
				   </div>
				   <div className='col-3' data-aos="fade-up">
				   	<div className='inner-box'>
						<img src={require('../Comics/img/released-1.png')} className="img-responsive " alt='stage-1'/> 
						<div className='text_inner'><h3>PART 1:<br/>DARK DAYS</h3></div>
						</div>
				   </div>
                </div>
               
            </div>
        </div>
        <div className='section game evo-tab comic-tab'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 ' data-aos="fade-up">
                    <h2 className='heading text-center' >OWN AN NFT PAGE OF THE COMIC</h2>
                    <p className='text-center sub-head'>Owning a page, or even better, a full comic book, will allow you to receive special surprises, bonuses, and rewards!</p>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
								 <Tab className='Stage1' eventKey="home"  title="Part 1">
								 <div className='row '>
								 <div className='col-12 text-center small-sec'>
                                    <h2 className='sub-head '>Please select the page number you are looking to
purchase and connect your wallet.</h2>
									</div>	
                              <div className='col-md-6 text-center top-30'>
                              <h2 className='heading'>PUT YOUR  HELMET ON</h2>
                              <h2 className='heading'>METEORIC SANSATIONS GUARANTEED!</h2>
                              <div className='timer'> <Countdowns /> </div>
                              <p className='pink-color'>A maximum of TBR page per wallet can be purchased. ONLY $TAK TOKEN WILL BE ACCEPTED</p>
                                </div>

                                <div className='col-md-6 box top-30'>
                                    <h2 className='small-heading'>MAKE SURE TO HAVE SOME ETH TO PAY TX FEES</h2>
									<p className='white-text'>Remember that you can purchase only 1 page per wallet.</p>
									<div className='row top-30'>
											<div className='col-4'><img src={require('../Comics/img/part-1-m.png')} className="img-responsive " alt='stage-1'/></div>
										<div className='col-8 text-right'>
											<p>Price per Page</p>
											<h4> <span>TBR</span> TAK  each </h4>
											<p><span>TBR amount remaining</span></p>
										</div>
									</div>
									<div className='row total-sec'>
										<h3>1 <span>TBR TAK max  </span></h3>

									</div>
									<div className='row top-30'>
									<a className='btn btn-dark' href='#'>CONNECT To   WALLET</a>

									</div>
                                    
                                
                                </div>
								<div className='col-md-12 text-center top-50'><p className='pink-color'>The Final $TAK amount will be updated 12 hours before the mining event</p></div>
                               
                                </div>
                            </Tab>
							<Tab eventKey='Stage2' title="Part 2">
                            <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                                  
                            </Tab>
                            <Tab eventKey='Stage3' title="Part 3">
							<div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                            </Tab>
                            <Tab eventKey='Stage4' title="Part 4">
                            <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                            </Tab>
                           
                            </Tabs>
                         
                    </div>
                </div>
            </div>
        </div>
		<div className='section game evo-tab pdf-tab'>
            <div className='container'>
                <div className='row'> 
                    <div className='col-md-12 ' data-aos="fade-up">
                    <h2 className='heading text-center'>ENJOY THE LATEST PAGE RELEASES</h2>
                    <p className='text-center sub-head'><strong>THIS IS JUST A COMING-SOON SAMPLE!</strong> Our comic book releases will be published here in the very near future, you’ll be able to read them right here as if you were flipping through a book!</p>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
								 <Tab className='Stage1' eventKey="home"  title="Part 1">
								 <div className='row '>
								 <div className='col-12 text-center small-sec'>
                                 <img src={require('../Comics/img/comic-pdf.pdf')} className="img-responsive " alt='stage-1'/> 
									</div>	
									</div>
                            
                            </Tab>
							<Tab eventKey='Stage2' title="Part 2">
                            <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                                  
                            </Tab>
                            <Tab eventKey='Stage3' title="Part 3">
							<div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                            </Tab>
                            <Tab eventKey='Stage4' title="Part 4">
                            <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h2 >This part is not yet available, in the meantime, feel free to check out other gadgets such as our profit calculator:</h2>
											<a className="btn btn-pink gradient comic-btn" href="#">CHECK OUT PROFIT CALCULATOR</a>
                                        </div> 
                                      
                                    </div>
                            </Tab>
                           
                            </Tabs>
                         
                    </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} >
            <Modal.Body closeButton><h2 className='heading text-center'>The Storyline</h2>
          
           <p className='white-space'>{showMore ? text : text.substring(0, 250) }</p>
<button  className={` btn read-more ${showMore ? "read_less" : "read_show"  }`} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
            <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
            </Modal.Body>
                </Modal>
        </React.Fragment>
    ) 
}
