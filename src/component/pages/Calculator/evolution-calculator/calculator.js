import React, {Component, } from 'react'
//import './calculator.css';


class EvolutionCalculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }   
        this.inputChange = this.inputChange.bind(this);
        this.sliderChange = this.sliderChange.bind(this);
    }
    inputChange(event,percent){
        // let value = event.target.value.replace(/,/g,'');
        // let tagName = event.target.name;

    }
    sliderChange(event,input,percent){
        // let value = event.from;
        
    }
    
    calculateComicsProfit(state){
        
	}
    
    componentDidMount(){
        function addSeparator(nStr,sep) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
              x1 = x1.replace(rgx, '$1' + sep + '$2');
            }
            return x1 + x2;
        }
        
     
        var QUOTIENT = function(numerator, denominator) {
            return parseInt(numerator / denominator, 10);
        };
        var MOD = function(dividend, divisor) {
            var modulus = Math.abs(dividend % divisor);
            modulus = dividend < 0 ? divisor - modulus : modulus;
            return (divisor > 0) ? modulus : -modulus;
        };
        var calculateEvolution = function(){
  
            var mm = document.querySelector('#evolution').value.replace(/'/g,'');
          
            var l1_mm = mm;
            
            var l2_gg = QUOTIENT(mm, 4);
            var l2_mm = mm-(l2_gg*4);
            
            var l3_ag = QUOTIENT(mm, 12);
            var l3_gg = QUOTIENT(MOD(mm,12),4);
            var l3_mm = mm-(l3_gg*4)-(l3_ag*12);
            // console.log(l3_ag,l3_gg,l3_mm)
            
            var l4_ey = QUOTIENT(mm, 24);
            var l4_ag = QUOTIENT(MOD(mm,24),12);
            var l4_gg = QUOTIENT(MOD(MOD(mm,24),12),4);
            var l4_mm = mm-(l4_gg*4)-(l4_ag*12)-(l4_ey*24);
            
            document.querySelector('#l1_mm').innerHTML = l1_mm;
            
            document.querySelector('#l2_gg').innerHTML = l2_gg;
            document.querySelector('#l2_mm').innerHTML = l2_mm;
            
            document.querySelector('#l3_ag').innerHTML = l3_ag;
            document.querySelector('#l3_gg').innerHTML = l3_gg;
            document.querySelector('#l3_mm').innerHTML = l3_mm;
            
            document.querySelector('#l4_ey').innerHTML = l4_ey;
            document.querySelector('#l4_ag').innerHTML = l4_ag;
            document.querySelector('#l4_gg').innerHTML = l4_gg;
            document.querySelector('#l4_mm').innerHTML = l4_mm;
          
          
          }
        
        setTimeout(()=>{
            // this.calculateEvolution(this.state);
            calculateEvolution();
            document.addEventListener('DOMContentLoaded',function(){
                calculateEvolution();
            });
          
            document.querySelectorAll('.evolution-container .calc-input ').forEach(function(elem){
                elem.addEventListener('input',  function(e){
                calculateEvolution();
                });
                elem.dispatchEvent(new Event('input'))
            })
            const minus = document.querySelectorAll('.quantity__minus');
            const plus = document.querySelectorAll('.quantity__plus');
            // const input = document.querySelectorAll('.quantity__input');
            minus.forEach(function(btn){
                btn.addEventListener('click', function(e){
                e.preventDefault();
                var id = e.target.dataset.input;
                var input = document.querySelector('#'+id)
                var value = +input.value.replace(/'/g,'');
                if (value > 0) {
                    value--;
                }
                input.value = addSeparator(value,"'");
                input.dispatchEvent(new Event('input'))
                })
                
            })
            plus.forEach(function(btn){
                btn.addEventListener('click', function(e){
                e.preventDefault();
                var id = e.target.dataset.input;
                var input = document.querySelector('#'+id);
                var value = input.value.replace(/'/g,'');
                value++;
                input.value = addSeparator(value,"'");
                input.dispatchEvent(new Event('input'))
                })
                
            })
    
    
    
            // First let's set the colors of our sliders
            const settings={
                fill: '#E343D7',
                background: '#d7dcdf'
            }
            
            // First find all our sliders
            const sliders = document.querySelectorAll('.range-slider');
            
            // Iterate through that list of sliders
            // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
            Array.prototype.forEach.call(sliders,(slider)=>{
                // Look inside our slider for our input add an event listener
            //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
                slider.querySelector('input').addEventListener('input', (event)=>{
    
                var inputClass = event.target.dataset.inputClass;
                
                document.querySelector('.'+inputClass).value = addSeparator(event.target.value,"'");
                document.querySelector('.'+inputClass).dispatchEvent(new Event('input'))
                // console.log(document.querySelector('.'+inputClass).value)
                    
                // 1. apply our value to the span
                // slider.querySelector('span').innerHTML = event.target.value;
                // 2. apply our fill to the input
                applyFill(event.target);
                });
                // Don't wait for the listener, apply it now!
                applyFill(slider.querySelector('input'));
            });
            
            document.querySelectorAll('.range-slider__input').forEach(function(elem,i){
                elem.addEventListener('input', function(event){
                var sliderClass = event.target.dataset.sliderClass;
                var slider = document.querySelector('.'+sliderClass);
                var val = event.target.value.replace(/'/g,'');
                slider.value = val;
                event.target.value = addSeparator(val,"'");
                    // console.log(elem.previousElementSibling)
                    applyFill(slider);
                })
            });
            // This function applies the fill to our sliders by using a linear gradient background
            function applyFill(slider) {
                // console.log(slider)
                // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
                const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
                // now we'll create a linear gradient that separates at the above point
                // Our background color will change here
                const bg = `linear-gradient(90deg,#53CFFF 0%, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
                slider.style.background = bg;
            }
            // var input = document.querySelector('#homePrice');
            // var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            // nativeInputValueSetter.call(input, 'react 16 value');

            // var ev2 = new Event('input', { bubbles: true});
            // input.dispatchEvent(ev2);
            // this.calculate(ev2)
        },100)
        
    }
    
    render(){
        return(
            <div className="evolution-container">
                
                <div className="evolution-generat-wrapper">
                    <div className="evolution-input-genrat-sec">
                       <div className="evolution-genrator-sec">
                           <p>Use the Evolution Calculator to determine your evolution possibilities based on your initial “Mooning Monkey” holdings or the ones you plan to acquire. </p>
                            <div></div>
                        </div>
                        {/* <!-- <div className="sec-heading">
                            <span>Step 1:</span>
                        </div> --> */}
                        <div className="evolution-genrator-sec">
                            <div className="label-container">
                                <label htmlFor="">Mooning Monkey</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input evolution-input" id="evolution"  data-slider-class="evolution-slider" defaultValue="24" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase default" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="evolution">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="evolution"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="evolution">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="evolution"></span>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range evolution-slider" id="evolution-slider"  data-input-class="evolution-input" defaultValue="24" min="1" max="12000"  step="1" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>12'000</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="result-table-sec">
                        <div className="table-top-header">
                            <div className="tth">
                            </div>
                            <div className="tth">
                                <div>Stay at</div>
                            </div>
                            <div className="tth">
                                <div>Level up to</div>
                            </div>
                        </div>
                        <table className="result-table">
                            <thead>
                                <tr>
                                    <th>Stages</th>
                                    <th>Level 1</th>
                                    <th>Level 2</th>
                                    <th>Level 3</th>
                                    <th>Level 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mooning Monkey</td>
                                    <td id="l1_mm"></td>
                                    <td id="l2_mm"></td>
                                    <td id="l3_mm"></td>
                                    <td id="l4_mm"></td>
                                </tr>
                                <tr>
                                    <td>Galactic Gorilla</td>
                                    <td>-</td>
                                    <td id="l2_gg"></td>
                                    <td id="l3_gg"></td>
                                    <td id="l4_gg"></td>
                                </tr>
                                <tr>
                                    <td>Alien Gorilla</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td id="l3_ag"></td>
                                    <td id="l4_ag"></td>
                                </tr>
                                <tr>
                                    <td>Eternal Yeti</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td id="l4_ey"></td>
                                </tr>
                                
                            </tbody>
                        </table>
                        
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}


export default EvolutionCalculator;
