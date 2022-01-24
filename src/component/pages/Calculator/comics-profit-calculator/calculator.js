import React, {Component, } from 'react'
//import './calculator.css';
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

var comicsPageChartData = {
    labels: [
      "Y1",
      "Y2",
      "Y3",
      "Y4",
      "Y5",
    ],
    datasets: [
      {
        label: "data",
        backgroundColor: ["#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5"],
        borderColor: ["#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5","#620AC5"],
        // borderWidth: 2,
        data: [0,0,0,0,0],
        
      },
    ]
  };
  
  var comicsPageChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
        mode: 'index'
    },
    // indexAxis: 'y',
    // layout: {
    //   padding: {
    //       right: 50
    //   }
    // },
    plugins: {
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
            display: false,
            labels: {
                fontColor: "white",
            // This more specific font property overrides the global property
                font: {
                    size: 14,
                }
            }
        },
    },
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 30,
          bottom: 0
      }
   },
    
    title: {
      display: false,
      text: "Staking Reward Forecast",
      fontColor: "#fafafa",
    },
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true
    //     }
    //   }]
    // },
    scales: {
        x: {
            // barPercentage: .8,
            // categoryPercentage: 0.8,
            ticks: {
                color: "#fff",
                fontStyle: "bold",
                beginAtZero: true,
                
                // padding: 15,
                // backdropPadding: {
                //   x: 10,
                //   y: 4
                // }
                //display: false - remove this and commenting to display: false
            },
            gridLines: {
                zeroLineColor: '#ffcc33',
                drawTicks: true,
                display: true,
                color: "#342F3B",
                // zeroLineColor: "#342F3B",
                zeroLineWidth: 2,
                // zeroLineColor: 'red'
            }
        },
        y: {
            
            gridLines: {
                drawTicks: true,
                display: true,
                color: "#342F3B",
                zeroLineColor: "#342F3B"
            },
            ticks: {
                // padding: 15,
                // backdropPadding: {
                //   x: 10,
                //   y: 4
                // },
                // max: Math.max(...comicsPageChartData.datasets[0].data) + 10,
                beginAtZero: true,
                color: "#fff",
                fontStyle: "bold",
                callback: function(value) {
                    value = value < 1 ? 0 : value;
                    value = value.toFixed(0);
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join("'");
                    return value;
                }
                // maxTicksLimit: 20,
                //display: false - remove this and commenting to display: false
            }
        }
    }
}

class ComicsProfitCalculator extends Component {
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
        var calculateComicsProfit = function(){
            var pageHoldings = +document.querySelector('#holdings').value.replace(/'/g,'');
            var dailyBets = [75000,	86250,	99188,	114066,	131175];
            var averageBet = 15;
            var houseEdge = 7/100;
            var marketPages = 5600;
            var totalProfitArr = [];
          
          
            var rewardRow = document.createElement('tr');
            var bonusRow = document.createElement('tr');
            appendElem('td','Profit Per Page',rewardRow);
            appendElem('td','Total Profit',bonusRow);
          
           
            for(let x=0;x<5;x++){
                // comicsPageT += rr1[x];
                // comicsIssueT += rr2[x];
                var tp = dailyBets[x]*averageBet*houseEdge*(10/100)/marketPages*pageHoldings*365;
                var ppp = tp===0?0:tp / pageHoldings;
          
                totalProfitArr.push(tp)
                if(x<5){
                    appendElem('td',ppp,rewardRow);
                    appendElem('td',tp,bonusRow);
                }else{
                    // appendElem('td',rr1[x],rewardRow1);
                    // appendElem('td',rr2[x],bonusRow1);
                }
            }
            
            // appendElem('td',comicsPageT,rewardRow1);
            // appendElem('td',comicsIssueT,bonusRow1);
            document.querySelector('#comics-data').innerHTML = '';
            // document.querySelector('#comics-data1').innerHTML = '';
          
            document.querySelector('#comics-data').appendChild(rewardRow);
            document.querySelector('#comics-data').appendChild(bonusRow);
          
            // document.querySelector('#comics-data1').appendChild(rewardRow1);
            // document.querySelector('#comics-data1').appendChild(bonusRow1);
          
            chart.data.datasets[0].data = totalProfitArr;
            chart.update();
            // comicsIssueChart.data.datasets[0].data = rr2;
            // comicsIssueChart.update();
          
        }
        
        setTimeout(()=>{
            // this.calculateComicsProfit(this.state);
            chart = this.chartReference;
            calculateComicsProfit();
            document.addEventListener('DOMContentLoaded',function(){
                calculateComicsProfit();
            });
          
            document.querySelectorAll('.comics-profit-container .calc-input ').forEach(function(elem){
                elem.addEventListener('input',  function(e){
                calculateComicsProfit();
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
            <div className="comics-profit-container">
             
                <div className="comics-profit-generat-wrapper">
                    <div className="comics-profit-input-genrat-sec">
                        <div className="clc-top-title">
                             <p>Use the Comics profit calculator to determine your potential passives incomes by simply.
                            by holding this  to see your potential rewards.</p>
					
                        </div>
                        <div className="sec-heading">
                            <span>STEP 1:</span> Enter Your Page Holdings
                        </div>
                        <div className="comics-profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Page Holdings</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input holdings-input addSaparator" id="holdings"  data-slider-class="holdings-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="holdings">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="holdings"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="holdings">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="holdings"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range holdings-slider" id="holdings-slider"  data-input-class="holdings-input" defaultValue="0" min="0" max="5600"  step="10" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>5'600</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="sec-heading" style={{marginTop:'80px'}}>
                            <span>STEP 2:</span> Profit Forcast
                        </div>
                        <div className="result-table-sec">
                            <div className="result-table-sec-title">Profit Sharing</div>
                            <table className="result-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Y1</th>
                                        <th>Y2</th>
                                        <th>Y3</th>
                                        <th>Y4</th>
                                        <th>Y5</th>
                                    </tr>
                                </thead>
                                <tbody id="comics-data"><tr><td>Profit Per Page</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td></tr><tr><td>Total Profit</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td></tr></tbody>
                            </table>
                            
                        </div>
                    </div>
                    <div id="chart-container"  className="">
                        <Bar ref={(reference) => this.chartReference = reference } options={comicsPageChartOptions} data={comicsPageChartData} width="400" height="300" />
                    </div>
                    
                </div>
                
            </div>
        )
    }
}


export default ComicsProfitCalculator;
