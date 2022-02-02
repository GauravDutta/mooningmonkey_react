import React,{useState} from 'react';
import {Tabs,Tab} from 'react-bootstrap'
export default function Tab_Attribute() {
    const [key, setKey] = useState('Fur');
  return  <React.Fragment>
<Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab className='Fur' eventKey="Fur" title="Fur">
                            <div className='row'>
                            <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Crystal.png')}  />
											<h3>Black Crystal</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/black.png')}  />
											<h3>Black </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/brown.png')}  />
											<h3>Brown</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/cream.png')}  />
											<h3>Cream</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Crystal.png')}  />
											<h3>Crystal</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Fushia.png')}  />
											<h3>Fushia </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/gold.png')}  />
											<h3>Gold</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/jaguar.png')}  />
											<h3>Jaguar</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/lava.png')}  />
											<h3>Lava</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Light-Purple.png')}  />
											<h3>Light Purple </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lime-Crystal.png')}  />
											<h3>Lime Crystal</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Marble.png')}  />
											<h3>Marble</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Orange.png')}  />
											<h3>Orange</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pink-Crystal.png')}  />
											<h3>Pink Crystal </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pink.png')}  />
											<h3>Pink</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Purple-Crystal.png')}  />
											<h3>Purple Crystal</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Purple.png')}  />
											<h3>Purple</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/red.png')}  />
											<h3>Red </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Royal-Blue.png')}  />
											<h3>Royal Blue</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Shell-Nacre.png')}  />
											<h3>Shell Nacre</h3>
											</div>
										</div>
										
									<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sliver.png')}  />
											<h3>Sliver</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sky-blue.png')}  />
											<h3>Sky Blue</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Snake-Scales.png')}  />
											<h3>Snake Scales </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Crystal.png')}  />
											<h3>MM Crystal</h3>
											</div>
										</div>
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Teal-Crystal.png')}  />
											<h3>Teal Crystal</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/tiger.png')}  />
											<h3>Tiger</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/trippy.png')}  />
											<h3>Trippy </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/velvot.png')}  />
											<h3>Velvot</h3>
											</div>
										</div>
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/white.png')}  />
											<h3>White</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/yellow.png')}  />
											<h3>Yellow</h3>
											</div>
										</div>
   								          </div>    
                            </Tab>
                            <Tab eventKey="Mouth" title="Mouth">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Angry-Grin.png')}  />
											<h3>Angry Grin</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/big-smile.png')}  />
											<h3>Big Smile</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/bored.png')}  />
											<h3>Bored</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/bandana.png')}  />
											<h3>Bandana</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/cigar.png')}  />
											<h3>Cigar</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Cigarette.png')}  />
											<h3>Cigarette</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Diamond-Grills.png')}  />
											<h3>Diamond Grills</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gold-Grills.png')}  />
											<h3>Gold Grills</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Graffiti-Mask.png')}  />
											<h3>Graffiti Mask</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/hannya-mask.png')}  />
											<h3>Hannya Mask</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/joint.png')}  />
											<h3>Joint</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Knocked-Out-Tooth.png')}  />
											<h3>Knocked Out Tooth</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Light-Shave.png')}  />
											<h3>Light Shave</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Medical-Mask.png')}  />
											<h3>Medical Mask</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/ninja-mask.png')}  />
											<h3>Ninja Mask</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/oh.png')}  />
											<h3>Oh</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/rage.png')}  />
											<h3>Rage</h3>
											</div>
										</div> 
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Rainbow-Grills.png')}  />
											<h3>Rainbow Grills</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Side-Grin.png')}  />
											<h3>Side Grin</h3>
											</div>
										</div>									 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Silver-Grills.png')}  />
											<h3>Silver Grills</h3>
											</div>
										</div> 
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/smile.png')}  />
											<h3>Smile</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Grills.png')}  />
											<h3>MM Grills</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Tongue-Out.png')}  />
											<h3>Tongue Out</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Underwater-Respiration-Mask.png')}  />
											<h3>Underwater Respiration Mask</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Vampire.png')}  />
											<h3>Vampire</h3>
											</div>   
										</div>
                              </div>   
                            </Tab>
                           <Tab eventKey="Eyes" title="Eyes">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/angry.png')}  />
											<h3>Angry</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Ghost-Eye.png')}  />
											<h3>Black Ghost Eye</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Bloodshot.png')}  />
											<h3>Bloodshot</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Blue-Laser.png')}  />
											<h3>Blue Laser</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/bored.png')}  />
											<h3>Bored</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/btc.png')}  />
											<h3>BTC</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/closed.png')}  />
											<h3>Closed</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/crazy.png')}  />
											<h3>Crazy</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Cyborg-Eye.png')}  />
											<h3>Cyborg Eye</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/fire.png')}  />
											<h3>Fire</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Hypnotized.png')}  />
											<h3>Hypnotized</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/In-Tears.png')}  />
											<h3>In Tears</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Laughing.png')}  />
											<h3>Laughing</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lime-Laser.png')}  />
											<h3>Lime Laser</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/love.png')}  />
											<h3>Love</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Popped-Eye.png')}  />
											<h3>Popped Eye</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Purple-Laser.png')}  />
											<h3>Purple Laser</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Red-Laser.png')}  />
											<h3>Red Laser</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sad.png')}  />
											<h3>Sad</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/snake.png')}  />
											<h3>Snake</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Solana-Ghost-Eye.png')}  />
											<h3>MM Ghost Eye</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Surprised.png')}  />
											<h3>Surprised</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/thinking.png')}  />
											<h3>Thinking</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/tired.png')}  />
											<h3>Tired</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/trippy-2.png')}  />
											<h3>Trippy</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/White-Ghost-Eyes.png')}  />
											<h3>White Ghost Eyes</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/winking.png')}  />
											<h3>Winking</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/x-eyes.png')}  />
											<h3>X Eyes</h3>
											</div>
										</div>
										
                              </div>   
                            </Tab>
                            <Tab eventKey="Eyeswear" title="Eyeswear">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/eye-patch.png')}  />
											<h3>Eye Patch</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Holographic.png')}  />
											<h3>Holographic</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Laser-Line.png')}  />
											<h3>Laser Line </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Monocle.png')}  />
											<h3>Monocle</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/neon.png')}  />
											<h3>Neon</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/night-vision.png')}  />
											<h3>Night Vision</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Oversized-Mirror.png')}  />
											<h3>Oversized Mirror </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Round-Glasses.png')}  />
											<h3>Round Glasses</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Scouter.png')}  />
											<h3>Scouter</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/snowboard.png')}  />
											<h3>Snowboard</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sol-glasses.png')}  />
											<h3>MM Glasses </h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Laser-Line.png')}  />
											<h3>MM Laser Line</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/star-shaped.png')}  />
											<h3>Star Shaped</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sunglasses.png')}  />
											<h3>Sunglasses</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Swimming-goggles.png')}  />
											<h3>Swimming Goggles</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/welding-goggles-1.png')}  />
											<h3>Welding Goggles</h3>
											</div>
										</div>
                              </div>   
                            </Tab>
                            <Tab eventKey="Clothing" title="Clothing">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Army-Uniform.png')}  />
											<h3>Army Uniform</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Astro-Suit.png')}  />
											<h3>Astro Suit</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Biker-Jacket.png')}  />
											<h3>Biker Jacket</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Armor.png')}  />
											<h3>Black Armor</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Jacket.png')}  />
											<h3>Black Jacket</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Undreshirt.png')}  />
											<h3>Black Undreshirt</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Centurion-Armor.png')}  />
											<h3>Centurion Armor</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Chef-Apron.png')}  />
											<h3>Chef Apron</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/coat.png')}  />
											<h3>Coat</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Convict-Suit.png')}  />
											<h3>Convict Suit</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Cowboy-Jacket.png')}  />
											<h3>Cowboy Jacket</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Deadly-Suit.png')}  />
											<h3>Deadly Suit</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Emperor-Armor.png')}  />
											<h3>Emperor Armor</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gladiator-Shoulder-Pad.png')}  />
											<h3>Gladiator Shoulder Pad</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Hawaiian-Shirt.png')}  />
											<h3>Hawaiian Shirt</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/hoodies.png')}  />
											<h3>Hoodie</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Jeans-Jacket.png')}  />
											<h3>Jeans Jacket</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Kimono.png')}  />
											<h3>Kimono</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/lightrider.png')}  />
											<h3>Lightrider</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/overall.png')}  />
											<h3>Overall</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pimp-Jacket.png')}  />
											<h3>Pimp Jacket</h3>
											</div>
										</div>
									  
									  
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Police-Armor.png')}  />
											<h3>Police Armor</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Primitive.png')}  />
											<h3>Primitive</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Red-Jacket.png')}  />
											<h3>Red Jacket</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Rescue-Suit.png')}  />
											<h3>Rescue Suit</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Samurai-Armor.png')}  />
											<h3>Samurai Armor</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Scientist-Blouse.png')}  />
											<h3>Scientist Blouse</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Shirt-and-Vest.png')}  />
											<h3>Shirt and Vest</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Astro-Suit.png')}  />
											<h3>MM Astro Suit</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Deadly-Suit.png')}  />
											<h3>MM Deadly Suit</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Hawaiian-Shirt.png')}  />
											<h3>MM Hawaiian Shirt</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/sol-lightrider.png')}  />
											<h3>MM Lightrider</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/white-undershirt.png')}  />
											<h3>White Undershirt</h3>
											</div>
										</div>
									  
                              </div>   
                            </Tab>
                            <Tab eventKey="Headgear" title="Headgear">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/afro.png')}  />
											<h3>Afro</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Army-Beret.png')}  />
											<h3>Army Beret</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Astro-Helmet.png')}  />
											<h3>Astro Helmet</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Baseball-Cap.png')}  />
											<h3>Baseball Cap</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Beanie.png')}  />
											<h3>Beanie</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Biker-Helmet.png')}  />
											<h3>Biker Helmet</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Fedora.png')}  />
											<h3>Black Fedora</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-Headband.png')}  />
											<h3>Black Headband</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Centurion-Helmet.png')}  />
											<h3>Centurion Helmet</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Chef-Toque.png')}  />
											<h3>Chef Toque</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Clown-Wig.png')}  />
											<h3>Clown Wig</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Cowboy-Hat.png')}  />
											<h3>Cowboy Hat</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Crown-2.png')}  />
											<h3>Crown</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Deadly-Helmet.png')}  />
											<h3>Deadly Helmet</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/General-Cap.png')}  />
											<h3>General Cap</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gladiator-Helmet.png')}  />
											<h3>Gladiator Helmet</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Hip-Hop-Cap.png')}  />
											<h3>Hip Hop Cap</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Horned-Helmet.png')}  />
											<h3>Horned Helmet</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/kasa.png')}  />
											<h3>Kasa</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lightrider-Helmet.png')}  />
											<h3>Lightrider Helmet</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Panama-Hat.png')}  />
											<h3>Panama Hat</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pimp-Hat.png')}  />
											<h3>Pimp Hat</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pirate-Hat.png')}  />
											<h3>Pirate Hat</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Police-Helmet.png')}  />
											<h3>Police Helmet</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Rescue-Helmet.png')}  />
											<h3>Rescue Helmet</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Safety-Helmet.png')}  />
											<h3>Safety Helmet</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Afro.png')}  />
											<h3>MM-Afro</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Astro-Helmet.png')}  />
											<h3>MM Astro Helmet</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Deadly-Helmet.png')}  />
											<h3>MM Deadly Helmet</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Lightrider-1.png')}  />
											<h3>MM Lightrider</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Steampunk-Hat.png')}  />
											<h3>Steampunk Hat</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sushi-Shef.png')}  />
											<h3>Sushi Chef</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Tactical-Helmet.png')}  />
											<h3>Tactical Helmet</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Top-Hat.png')}  />
											<h3>Top Hat</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/White-Fedora.png')}  />
											<h3>White Fedora</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Wizard-Hat.png')}  />
											<h3>Wizard Hat</h3>
											</div>
										</div>
									  
                              </div>   
                            </Tab>
                            <Tab eventKey="Earrings" title="Earrings">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Diamond-Stud.png')}  />
											<h3>Diamond Stud</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gold-Hoop.png')}  />
											<h3>Gold Hoop</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gold-Stud.png')}  />
											<h3>Gold Stud</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/mm-diamond-stud.png')}  />
											<h3>MM Diamond Stud</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Silver-Hoop.png')}  />
											<h3>Silver Hoop</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Silver-Stud.png')}  />
											<h3>Silver Stud</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Skull-Stud.png')}  />
											<h3>Skull Stud</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Spike-Stud.png')}  />
											<h3>Spike Stud</h3>
											</div>
										</div>
                              </div>   
                            </Tab>
                            <Tab eventKey="Holding" title="Holding">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Banana.png')}  />
											<h3>Banana</h3>
											</div>
										</div> 
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Butcher-Knife.png')}  />
											<h3>Butcher Knife</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Butterfly-Knife.png')}  />
											<h3>Butterfly Knife</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Cigar-1.png')}  />
											<h3>Cigar</h3>
											</div>
										</div>
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Diamond.png')}  />
											<h3>Diamond</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Dollars-Stack.png')}  />
											<h3>Dollars Stack</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Double-Barrel-Shotgun.png')}  />
											<h3>Double Barrel Shotgun</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Energy-Grenade.png')}  />
											<h3>Energy Grenade</h3>
											</div>
										</div> 
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gold-Stick.png')}  />
											<h3>Gold Stick</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Graffiti-Spray.png')}  />
											<h3>Graffiti Spray</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Grapnel-Gun.png')}  />
											<h3>Grapnel Gun</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gym-Weight.png')}  />
											<h3>Gym Weight</h3>
											</div>
										</div> 
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Handgun.png')}  />
											<h3>Handgun</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Iron-Fist-Knuckles.png')}  />
											<h3>Iron Fist Knuckles</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Katana.png')}  />
											<h3>Katana</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Kunai.png')}  />
											<h3>Kunai</h3>
											</div>
										</div> 
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lab-Flask.png')}  />
											<h3>Lab Flask</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Laser-Disc.png')}  />
											<h3>Laser Disc</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Laser-Spike-Ball.png')}  />
											<h3>Laser Spike Ball</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Magic-Wand.png')}  />
											<h3>Magic Wand</h3>
											</div>
										</div> 
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Money-Gun.png')}  />
											<h3>Money Gun</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/pen.png')}  />
											<h3>Pen</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pirate-Knife.png')}  />
											<h3>Pirate Knife</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pocket-Knife.png')}  />
											<h3>Pocket Knife</h3>
											</div>
										</div> 
										
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Police-Handgun.png')}  />
											<h3>Police Handgun</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Primitive-Axe.png')}  />
											<h3>Primitive Axe</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pugio-Dagger.png')}  />
											<h3>Pugio Dagger</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Rescue-Axe.png')}  />
											<h3>Rescue Axe</h3>
											</div>
										</div> 
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Revolver.png')}  />
											<h3>Revolver</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Diamond.png')}  />
											<h3>MM Diamond</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Laser-Disk.png')}  />
											<h3>MM Laser Disk</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Spec-Ops-Laser-Rifle.png')}  />
											<h3>MM Spec Ops Laser Rifle</h3>
											</div>
										</div> 
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Tac-Laser.png')}  />
											<h3>MM Tac Laser</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Spec-Ops-Laser.png')}  />
											<h3>Spec Ops Laser</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sushi-Knife.png')}  />
											<h3>Sushi Knife</h3>
											</div>
										</div>										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Syringe.png')}  />
											<h3>Syringe</h3>
											</div>
										</div> 
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Tac-Laser-Rifle.png')}  />
											<h3>Tac Laser Rifle</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Tac-Shotgun.png')}  />
											<h3>Tac Shotgun</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Vape.png')}  />
											<h3>Vape</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Wrench.png')}  />
											<h3>Wrench</h3>
											</div>
										</div>
                              </div>   
                            </Tab>
                            <Tab eventKey="Background" title="Background">
                              <div className='row'>
                              <div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Black-1.png')}  />
											<h3>Black</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/City.png')}  />
											<h3>City</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Coral-Gradient.png')}  />
											<h3>Coral Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Coral.png')}  />
											<h3>Coral</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Dark-Gray-Gradient.png')}  />
											<h3>Dark Gray Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Dark-Purple-Gradient.png')}  />
											<h3>Dark Purple Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Gray.png')}  />
											<h3>Gray</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Green-Gradient.png')}  />
											<h3>Green Gradient</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Jungle.png')}  />
											<h3>Jungle</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lava-1.png')}  />
											<h3>Lava</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Lime-Gradient.png')}  />
											<h3>Lime Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/lunar.png')}  />
											<h3>Lunar</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Mix-Pastel-Gradient.png')}  />
											<h3>Mix Pastel Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Mountains.png')}  />
											<h3>Mountains</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Mushrooms.png')}  />
											<h3>Mushrooms</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Orange-Gradient.png')}  />
											<h3>Orange Gradient</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Orange-1.png')}  />
											<h3>Orange</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Palm-Beach.png')}  />
											<h3>Palm Beach</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Pastel-Green.png')}  />
											<h3>Pastel Green</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/pink-1.png')}  />
											<h3>Pink</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Purple-Gradient.png')}  />
											<h3>Purple Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Purple-1.png')}  />
											<h3>Purple</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Radioactive.png')}  />
											<h3>Radioactive</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sci-Fi-Desert.png')}  />
											<h3>Sci-Fi Desert</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sky-Blue-Gradient.png')}  />
											<h3>Sky Blue Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sky-Blue-1.png')}  />
											<h3>Sky Blue</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Sol-Gradient.png')}  />
											<h3>MM Gradient</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Southern-Gradient.png')}  />
											<h3>Southern Gradient</h3>
											</div>
										</div>
										
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/white-1.png')}  />
											<h3>White</h3>
											</div>
										</div>
										<div className='col-3'>
											<div className='img-bg'>
											<img className='img-responsive ' alt='' src={require('../../Attributes2/img/Yellow-1.png')}  />
											<h3>Yellow</h3>
											</div>
										</div>
                              </div>   
                            </Tab>
                           
							
                            </Tabs>

</React.Fragment>;
}
