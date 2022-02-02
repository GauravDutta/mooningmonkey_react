import React, {Component, } from 'react'
import './calculator.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

var stakingChartData = {
    labels: [
      "Y1",
      "Y2",
      "Y3",
      "Y4",
      "Y5",
    ],
    datasets: [
      {
        label: "0 Days",
        backgroundColor: "#03EAFE",
        borderColor: "#03EAFE",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "7 Days",
        backgroundColor: "#04A0AC",
        borderColor: "#04A0AC",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "30 Days",
        backgroundColor: "#FF841D",
        borderColor: "#FF841D",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "60 Days",
        backgroundColor: "#8A1FFB",
        borderColor: "#8A1FFB",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "90 Days",
        backgroundColor: "#470293",
        borderColor: "#470293",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "120 Days",
        backgroundColor: "#FD42C3",
        borderColor: "#FD42C3",
        borderWidth: 0,
        data: [0,0,0,0,0]
      }
    ]
};
  
var stakingChartOptions = {
// indexAxis: 'y',
responsive: true,
interaction: {
    mode: 'index'
},
plugins:{
    tooltip: {
        // mode: 'label',
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
            },
            // labelTextColor: function(context) {
            //     // return '#543453';
            // }
        }
    },
    legend: {
    
        position: "bottom",
        labels: {
            color: "white",
            boxWidth: 14,
            boxHeight: 14,
        // This more specific font property overrides the global property
            font: {
                size: 14,
            }
        }
    },
},

title: {
    display: true,
    text: "",
    fontColor: "#fafafa",
    align: 'start'
},
scales: {
    y: {
        barPercentage: .8,
        categoryPercentage: 0.8,
        ticks: {
            color: "#fafafa",
            fontStyle: "bold",
            beginAtZero: true,
            padding: 15,
            callback: function(value) {
                value = value < 1 ? 0 : value;
                value = value.toFixed(0);
                value = value.split(/(?=(?:...)*$)/);
                value = value.join("'");
                return value;
            }
            //display: false - remove this and commenting to display: false
        },
        gridLines: {
            drawTicks: false,
            display: false,
            color: "transparent",
            zeroLineColor: "transparent"
        }
    },
    x: {
        
        gridLines: {
            display: false,
            color: "transparent",
            zeroLineColor: "transparent"
        },
        ticks: {
            padding: 15,
            beginAtZero: true,
            color: "#fafafa",
            fontStyle: "bold",
            
            // maxTicksLimit: 20,
            //display: false - remove this and commenting to display: false
        }
    }
}
}

class StakingCalculator extends Component {
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
    
    calculateStaking(state){
        
	}
    
    componentDidMount(){
        var chart = null;
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
        
        function iferror(v,iferrorVal){
            return (!isFinite(v) || isNaN(v))?iferrorVal: v;
        }
        var appendElem = function(tag,text,parent,style='currency',decimal=0){
            var elem = document.createElement(tag);
            var options = {maximumFractionDigits: decimal, currency: 'USD' }
            if(style!==''){
              options.style = style;
            }
            text = (typeof text === 'number'?text.toLocaleString('en-US',options):text)
          
            elem.innerHTML = text;
            parent.appendChild(elem);
        }
        var calculateStaking = function(){
            var stakedMarket = +document.querySelector('#stakedMarket').value.replace(/'/g, '');
            var stakeduser = +document.querySelector('#stakeduser').value.replace(/'/g, '');

            var lockingPeriod = 30;
            var multiplier = 1+0.2*Math.pow(lockingPeriod,(50/100));
            var weight = stakedMarket * multiplier;
            var duration = [0,7,30,60,90,120];
            // var rewardPool = [149,905,755	253,950,826	326,165,376	376,287,321	411,075,454];
            var rewardPool = [149.9,	254.0,	326.2,	376.3,	411.1];
          
            document.querySelector('#rewards-tak-tbody').innerHTML = '';
            document.querySelector('#apy-rewards-tbody').innerHTML = '';
            var chartData = [];
            duration.forEach((v,i)=>{
          
              var row1 = document.createElement('tr');
              var row2 = document.createElement('tr');
              var cData = [];
              for(let x=0;x<=5;x++){
                  if(x===0){
                    appendElem('td',v+' Days',row1);
                    appendElem('td',v+' Days',row2);
                  }else{
                    var prevVal = x===1?0:rewardPool[x-2];
                    var val = iferror((rewardPool[x-1]-prevVal)*stakeduser*( 1+0.2*Math.pow(v,(50/100)) )*(50/100)/weight*1000000,0);
                    var val1 = iferror((val / stakeduser),0);
                    cData.push(val)
                    appendElem('td',val,row1,'');
                    appendElem('td',val1,row2,'percent',2);
                  }
                
              }
              chartData.push(cData);
              document.querySelector('#rewards-tak-tbody').appendChild(row1);
              document.querySelector('#apy-rewards-tbody').appendChild(row2);
            })
            
            // this.chartReference.data.datasets[0].data = data;
            // this.chartReference.update();
            //   addData(stakingChart,chartData)
            chart.data.datasets.forEach((dataset,index) => {
                dataset.data = chartData[index];
            });
            chart.update();
          
        }
        setTimeout(()=>{
            // this.calculateStaking(this.state);
            chart = this.chartReference;
            calculateStaking();
            document.addEventListener('DOMContentLoaded',function(){
                calculateStaking();
            });
          
            document.querySelectorAll('.staking-container .calc-input ').forEach(function(elem){
                elem.addEventListener('input',  function(e){
                calculateStaking();
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
    
    
    
            document.querySelectorAll('.clickable-min-max').forEach(function(elem){
                elem.addEventListener('click', function(e){
                  var slider = document.getElementById(this.dataset.slider);
                  var percent = e.target.dataset.value;
                  if(percent){
                    slider.value = slider.max * (percent / 100);
                    applyFill(slider);
                    slider.dispatchEvent(new Event('input'))
                  }
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
            <div className="staking-container">
               
                <div className="staking-generat-wrapper">
                    <div className="staking-input-genrat-sec">
                        
                        <div className="clc-top-title">
                        <p>NFT and non NFT holders are welcome to the staking rewards.<br/>Enter your current TAK amount to see your potential rewards. </p>
                        <div></div>
						</div>
                        <div className="staking-genrator-sec">
                            <div></div>
                        </div>
                        <div className="sec-heading">
                            <span>STEP 1:</span> Enter Staking Parameters
                        </div>
                        <div className="staking-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">TAK staked on the market</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input stakedMarket-input addSaparator" id="stakedMarket"  data-slider-class="stakedMarket-slider" defaultValue="0" ref={r => this.interest = r} onChange={(e) => this.inputChange(e)} />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="stakedMarket">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="stakedMarket"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="stakedMarket">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="stakedMarket"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range stakedMarket-slider" id="stakedMarket-slider"  data-input-class="stakedMarket-input" defaultValue="0" min="0" max="1000000000"  step="5000" ref={r => this.downPaySlider = r} onChange={(e) => this.sliderChange(e,'downPay','percent')} />
                                <div className="slider-min-max clickable-min-max" data-slider="stakedMarket-slider">
                                    <span data-value="0">0</span>
                                    <span data-value="10">10%</span>
                                    <span data-value="20">20%</span>
                                    <span data-value="30">30%</span>
                                    <span data-value="40">40%</span>
                                    <span data-value="50">50%</span>
                                    <span data-value="60">60%</span>
                                    <span data-value="70">70%</span>
                                    <span data-value="80">80%</span>
                                    <span data-value="90">90%</span>
                                    <span data-value="100">1B</span>
                                </div>
                            </div>
                        </div>
                        <div className="staking-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">TAK staked by user</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input stakeduser-input addSaparator" id="stakeduser"  data-slider-class="stakeduser-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="stakeduser">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="stakeduser"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="stakeduser">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="stakeduser"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range stakeduser-slider" id="stakeduser-slider"  data-input-class="stakeduser-input" defaultValue="0" min="0" max="10000000"  step="5000" />
                                <div className="slider-min-max clickable-min-max" data-slider="stakeduser-slider">
                                    <span data-value="0">0</span>
                                    <span data-value="10">10%</span>
                                    <span data-value="20">20%</span>
                                    <span data-value="30">30%</span>
                                    <span data-value="40">40%</span>
                                    <span data-value="50">50%</span>
                                    <span data-value="60">60%</span>
                                    <span data-value="70">70%</span>
                                    <span data-value="80">80%</span>
                                    <span data-value="90">90%</span>
                                    <span data-value="100">10M</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="sec-heading" style={{marginTop:'80px'}}>
                            <span>STEP 2:</span> Check Your Staking Rewards
                        </div>
                        <div className="result-table-sec">
                            <div className="result-table-sec-title">Rewards in $TAK</div>
                            <table className="result-table">
                                <thead>
                                    <tr>
                                        <th>LOOKING <br />PERIOD</th>
                                        <th>Y1</th>
                                        <th>Y2</th>
                                        <th>Y3</th>
                                        <th>Y4</th>
                                        <th>Y5</th>
                                    </tr>
                                </thead>
                                <tbody id="rewards-tak-tbody"><tr><td>0 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>7 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>30 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>60 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>90 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>120 Days</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody>
                            </table>
                        </div>
                        <div className="result-table-sec">
                            <div className="result-table-sec-title">APY Rewards</div>
                            <table className="result-table">
                                <thead>
                                    <tr>
                                        <th>LOOKING <br />PERIOD</th>
                                        <th>APY Y1</th>
                                        <th>APY Y2</th>
                                        <th>APY Y3</th>
                                        <th>APY Y4</th>
                                        <th>APY Y5</th>
                                    </tr>
                                </thead>
                                <tbody id="apy-rewards-tbody"><tr><td>0 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>7 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>30 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>60 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>90 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>120 Days</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr></tbody>
                            </table>
                        </div>
                        
            
            
                    </div>
                    <div className="chart-title">Staking Reward Forecast</div>
                    
                    <div id="chart-container"  className="">
                        <Bar ref={(reference) => this.chartReference = reference } options={stakingChartOptions} data={stakingChartData} width="400" height="300" />
                    </div>
                </div>
                
            </div>
        )
    }
}


export default StakingCalculator;
