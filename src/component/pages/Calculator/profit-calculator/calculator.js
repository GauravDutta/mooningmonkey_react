import React, {Component, } from 'react'
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
//import './calculator.css';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


var profitChartData = {
    labels: [
      "Y1",
      "Y2",
      "Y3",
      "Y4",
      "Y5",
    ],
    datasets: [
      {
        label: "Weekly",
        backgroundColor: "#6700D4",
        borderColor: "#6700D4",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "Monthly",
        backgroundColor: "#E901EF",
        borderColor: "#E901EF",
        borderWidth: 0,
        data: [0,0,0,0,0]
      },
      {
        label: "Yearly",
        backgroundColor: "#67E7FF",
        borderColor: "#67E7FF",
        borderWidth: 0,
        data: [0,0,0,0,0]
      }
    ]
};
  
var profitChartOptions = {
indexAxis: 'y',
responsive: true,
interaction: {
    mode: 'index'
},
plugins: {
    tooltip: {
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
        // This more specific font property overrides the global property
            font: {
                size: 14,
            }
        }
    },
},



title: {
    display: true,
    text: "Projected Earning Per NFT",
    fontColor: "#fafafa",
    align: 'start'
},
// scales: {
//   yAxes: [{
//     ticks: {
//       beginAtZero: true
//     }
//   }]
// },
scales: {
    yAxes: {
        barPercentage: .8,
        categoryPercentage: 0.8,
        ticks: {
            color: "#fafafa",
            fontStyle: "bold",
            beginAtZero: true,
            padding: 15,
            //display: false - remove this and commenting to display: false
        },
        gridLines: {
            drawTicks: false,
            display: false,
            color: "transparent",
            zeroLineColor: "transparent"
        }
    },
    xAxes: {
        
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
            callback: function(value, index, values) {
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

class ProfitCalculator extends Component {
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
    
    calculateProfit(state){
        
	}
    
    componentDidMount(){
        var chart = null;
        ////// Bets & Wins
        var betsWins = function(bets,wager){
            var mg = 1.5/100;// Monthly Growth
            var mg1 = 1.50/100;// Monthly Growth
            var btcUsd = 41812.7; 
            var houseEdge = 5/100;
            var bankroll = 3;

            var arr = [];
            let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15;
            let ar1 = [];
            let ar2 = [];
            let ar3 = [];
            let ar4 = [];
            let ar5 = [];
            let ar6 = [];
            let ar7 = [];
            let ar8 = [];
            let ar9 = [];
            let ar10 = [];
            let ar11 = [];
            let ar12 = [];
            let ar13 = [];
            let ar14 = [];
            let ar15 = [];
            let at = 0;
            for(let x=0;x<22;x++){
                if(x===0){
                    a1 = bets * 30;
                    at += a1;
                    a2 = a1/30;
                    a3 = wager;
                    a4 = a1 * a3;
                    a5 = a4 / 30;
                    a6 = a4 / btcUsd;
                    a7 = a6 / 30;
                    a8 = a4 * houseEdge;
                    a9 = a8 / 30;
                    a10 = a8 / btcUsd;
                    a11 = a10 / 30;

                    a12 = a4 * bankroll;
                    a13 = a12 / 30;
                    a14 = a12 / btcUsd;
                    a15 = a14 / 30;

                }else
                if(x<12){
                    a1 = a1 * (1+mg);
                    at += a1;
                    a2 = a1/30;
                    a3 = a3*(1+mg1);
                    a4 = a1 * a3;
                    a5 = a4 / 30;
                    a6 = a4 / btcUsd;
                    a7 = a6 / 30;
                    a8 = a4 * houseEdge;
                    a9 = a8 / 30;
                    a10 = a8 / btcUsd;
                    a11 = a10 / 30;

                    a12 = a4 * bankroll;
                    a13 = a12 / 30;
                    a14 = a12 / btcUsd;
                    a15 = a14 / 30;
                }else if(x===12){
                    a1 = at;
                    a2 = a1/365;
                    a4 = a1 * a3;
                    a5 = a4 / 365;
                    a6 = a4 / btcUsd;
                    a7 = a6 / 365;
                    a8 = a4 * houseEdge;
                    a9 = a8 / 365;
                    a10 = a8 / btcUsd;
                    a11 = a10 / 365;

                    a12 = a4 * bankroll;
                    a13 = a12 / 365;
                    a14 = a12 / btcUsd;
                    a15 = a14 / 365;
                }else{
                    a1 = a1*(1+mg*12);
                    a2 = a1/365;
                    a3 = a3*(1+mg1*12);
                    a4 = a1 * a3;
                    a5 = a4 / 365;
                    a6 = a4 / btcUsd;
                    a7 = a6 / 365;
                    a8 = a4 * houseEdge;
                    a9 = a8 / 365;
                    a10 = a8 / btcUsd;
                    a11 = a10 / 365;

                    a12 = a4 * bankroll;
                    a13 = a12 / 365;
                    a14 = a12 / btcUsd;
                    a15 = a14 / 365;
                }
                    
                ar1.push(a1);
                ar2.push(a2);
                ar3.push(a3);
                ar4.push(a4);
                ar5.push(a5);
                ar6.push(a6);
                ar7.push(a7);
                ar8.push(a8);
                ar9.push(a9);
                ar10.push(a10);
                ar11.push(a11);
                ar12.push(a12);
                ar13.push(a13);
                ar14.push(a14);
                ar15.push(a15);
                
            }
            // console.log(ar11)
            arr.push(ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15);
            return arr;
        }

        var cBack = function(betsWins){
        // TOTAL WINS & LOSSES
            var r1 = betsWins[2].slice(12);
            var r2 = betsWins[3].slice(12);
            var r3 = betsWins[7].slice(12);
            

            var arr = [];
            let a1,a2,a3,a4,a5,a6,a7,a8,a9;
            let ar1 = [];
            let ar2 = [];
            let ar3 = [];
            let ar4 = [];
            let ar5 = [];
            let ar6 = [];
            let ar7 = [];
            let ar8 = [];
            let ar9 = [];
            var wagers = 0;
            for(let x=0;x<10;x++){
                if(x===0){
                    wagers = 30/100;
                }else{
                    wagers = (wagers*(1+(10/100))>1?1:wagers*(1+(10/100)))
                }
                a1 = r2[x] - r3[x];
                a2 = r3[x];
                a3 = r1[x];
                a4 = a1 / a3;
                a5 = a4*(1-wagers);
                a6 = a4*wagers;
                a7 = a2/a3;
                a8 = a7*(1-wagers);
                a9 = a7*wagers;
                    
                ar1.push(a1);
                ar2.push(a2);
                ar3.push(a3);
                ar4.push(a4);
                ar5.push(a5);
                ar6.push(a6);
                ar7.push(a7);
                ar8.push(a8);
                ar9.push(a9);
            }
            arr.push(ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9);
            return arr;
        }
        var cBack_ = function(cBack,winLoss){
        // CASH BACK - WINS Or Loss
        var wager = cBack[2];
        var crypto,$tak,cba;
        if(winLoss === 'win'){
            crypto = cBack[4];
           $tak = cBack[5];
            // Cash Back Assumptions Win
            cba = [
            [1/100,	0/100],
            [1.5/100,	0/100],
            [2/100,	0/100],
            [2.5/100,	0/100],
            [3/100,	0/100],
            ]
        }
        if(winLoss === 'loss'){
            crypto = cBack[7];
            $tak = cBack[8];
            cba = [
            [1/100,	0.25/100],
            [1.5/100,	0.5/100],
            [2/100,	1/100],
            [2.5/100,	1.5/100],
            [3/100,	2/100],
            ]
        }
        
        var data = [
            [95.00/100,	92.00/100,	88.00/100,	82.00/100,	76.75/100,	69.25/100,	64.50/100,	58.00/100,	49.0/100,	41.0/100],
            [4.50/100,	6.00/100,	9.00/100,	12.00/100,	15.00/100,	20.00/100,	22.00/100,	25.00/100,	30.0/100,	35.0/100],
            [0.50/100,	1.00/100,	1.50/100,	4.00/100,	6.00/100,	8.00/100,	10.00/100,	12.00/100,	14.0/100,	15.0/100],
            [0.00/100,	0.75/100,	1.00/100,	1.25/100,	1.25/100,	1.50/100,	2.00/100,	3.00/100,	4.0/100,	5.0/100],
            [0.00/100,	0.25/100,	0.50/100,	0.75/100,	1.00/100,	1.25/100,	1.50/100,	2.00/100,	3.0/100,	4.0/100],
            [100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100,	100.00/100],


        ];
        

        var arr = [];
        let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11;
        let ar1 = [];
        let ar2 = [];
        let ar3 = [];
        let ar4 = [];
        let ar5 = [];
        let ar6 = [];
        let ar7 = [];
        let ar8 = [];
        let ar9 = [];
        let ar10 = [];
        let ar11 = [];

        let b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
        let br1 = [];
        let br2 = [];
        let br3 = [];
        let br4 = [];
        let br5 = [];
        let br6 = [];
        let br7 = [];
        let br8 = [];
        let br9 = [];
        let br10 = [];
        let br11 = [];
        let c1,c2,c3;
        let cr1 = [];
        let cr2 = [];
        let cr3 = [];
        var cbArr = []
        for(let x=0;x<10;x++){
            a1 = crypto[x]*data[0][x];
            a2 = crypto[x]*data[1][x];
            a3 = crypto[x]*data[2][x];
            a4 = crypto[x]*data[3][x];
            a5 = crypto[x]*data[4][x];

            a6 = a1*cba[0][1]*wager[x];
            a7 = a2*cba[1][1]*wager[x];
            a8 = a3*cba[2][1]*wager[x];
            a9 = a4*cba[3][1]*wager[x];
            a10 = a5*cba[4][1]*wager[x];
            a11 = a6+a7+a8+a9+a10;

            b1 = $tak[x]*data[0][x];
            b2 = $tak[x]*data[1][x];
            b3 = $tak[x]*data[2][x];
            b4 = $tak[x]*data[3][x];
            b5 = $tak[x]*data[4][x];

            b6 = b1*cba[0][0]*wager[x];
            b7 = b2*cba[1][0]*wager[x];
            b8 = b3*cba[2][0]*wager[x];
            b9 = b4*cba[3][0]*wager[x];
            b10 = b5*cba[4][0]*wager[x];
            b11 = b6+b7+b8+b9+b10;

            // TOTAL CASH BACK - WINS OR LOSS

            var cashBack = a11 + b11;
                
            ar1.push(a1);
            ar2.push(a2);
            ar3.push(a3);
            ar4.push(a4);
            ar5.push(a5);
            ar6.push(a6);
            ar7.push(a7);
            ar8.push(a8);
            ar9.push(a9);
            ar10.push(a10);
            ar11.push(a11);

            br1.push(b1);
            br2.push(b2);
            br3.push(b3);
            br4.push(b4);
            br5.push(b5);
            br6.push(b6);
            br7.push(b7);
            br8.push(b8);
            br9.push(b9);
            br10.push(b10);
            br11.push(b11);

            if(winLoss === 'win'){
                var assumptions = {
                "crypto":	0.99/100,
                "$tak":	1.99/100,
                }
                c1 = crypto[x]*wager[x]*assumptions.crypto;
                c2 = $tak[x]*wager[x]*assumptions.$tak;
                c3 = c1+c2;
                cr1.push(c1);
                cr2.push(c2);
                cr3.push(c3);
            }
            
            cbArr.push(cashBack);
            
        }
        arr.push(ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,br1,br2,br3,br4,br5,br6,br7,br8,br9,br10,br11,cbArr);
        if(winLoss === 'win'){
            arr.push(cr1,cr2,cr3);
        }
        return arr;
        }
        ////// Rev Share
        var revShare = function(betsWins,cBackWin,cBackLoss){
            var q_row = betsWins[7].slice(12);
            var cbw10 = cBackWin[10];
            var cbw21 = cBackWin[21];
            var cbw25 = cBackWin[25];

            var cbl10 = cBackLoss[10];
            var cbl21 = cBackLoss[21];
            // console.log(cBackWin)
            var nftB5 = 12000;

            var mmShare         =	50/100;
            var BankRoller      =	50/100;

            var nftHolders  =	50/100;
            var marketing   =	20/100;
            var tech        =	10/100;
            var team        =	10/100;
            var others      =	10/100;

            var nftReward	=   50/100;

            var mooningMonkey	= 0/100;
            var galacticGorilla	= 10/100;
            var alienGorilla	= 30/100;
            var eternalYeti	    = 60/100;


            var arr = [];
            let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21;
            let ar1 = [];
            let ar2 = [];
            let ar3 = [];
            let ar4 = [];
            let ar5 = [];
            let ar6 = [];
            let ar7 = [];
            let ar8 = [];
            let ar9 = [];
            let ar10 = [];
            let ar11 = [];
            let ar12 = [];
            let ar13 = [];
            let ar14 = [];
            let ar15 = [];
            let ar16 = [];
            let ar17 = [];
            let ar18 = [];
            let ar19 = [];
            let ar20 = [];
            let ar21 = [];
            for(let x=0;x<q_row.length;x++){
                a1 = q_row[x];
                a2 = cbw25[x];
                a3 = cbw10[x]+cbw21[x]+cbl10[x]+cbl21[x];
                a4 = a1 - a2 - a3;
                a5 = a4 * mmShare;
                a6 = a4 * BankRoller;

                a7 = a5 * nftHolders;
                a8 = a5 * marketing;
                a9 = a5 * tech;
                a10 = a5 * team;
                a11 = a5 * others;
                a12 = a7 + a8 + a9 + a10 + a11;

                a13 = (a7*nftReward)/nftB5;
                a14 = a13*nftB5;
                a15 = a7 - a14;

                a16 = a15 * mooningMonkey;
                a17 = a15 * galacticGorilla;
                a18 = a15 * alienGorilla;
                a19 = a15 * eternalYeti;
                a20 = a16 + a17 + a18 + a19;
                a21 = a7-(a15+a20);
                
                // console.log(a21,a7.toFixed(4),(a15+a20).toFixed(4))
                    
                ar1.push(a1);
                ar2.push(a2);
                ar3.push(a3);
                ar4.push(a4);
                ar5.push(a5);
                ar6.push(a6);
                ar7.push(a7);
                ar8.push(a8);
                ar9.push(a9);
                ar10.push(a10);
                ar11.push(a11);
                ar12.push(a12);
                ar13.push(a13);
                ar14.push(a14);
                ar15.push(a15);
                ar16.push(a16);
                ar17.push(a17);
                ar18.push(a18);
                ar19.push(a19);
                ar20.push(a20);
                ar21.push(a21);
                
            }
            // console.log(ar11)
            arr.push(ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21);
            // console.log(arr)
            return arr;
        }

        // console.log(nftHoldings())
        ////// NFT Earning 
        var nftEarning = function(revShare){
            
            var r = revShare;
            var r1 = r[12];
            var r2 = r[13];
            var holders = r[6];
            

            var ar17 = r[15];
            var ar18 = r[16];
            var ar19 = r[17];
            var ar20 = r[18];
            // console.log(holders)

            var arr = [];
            let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34;
            let ar1 = [];
            let ar2 = [];
            let ar3 = [];
            let ar4 = [];
            let ar5 = [];
            let ar6 = [];
            let ar7 = [];
            let ar8 = [];
            let ar9 = [];
            let ar10 = [];
            let ar11 = [];
            let ar12 = [];
            let ar13 = [];
            let ar14 = [];
            let ar15 = [];
            let ar16 = [];
            // let ar17 = [];
            // let ar18 = [];
            // let ar19 = [];
            // let ar20 = [];
            let ar21 = [];
            let ar22 = [];

            let ar23 = [];
            let ar24 = [];
            let ar25 = [];

            let ar26 = [];
            let ar27 = [];
            let ar28 = [];

            let ar29 = [];
            let ar30 = [];
            let ar31 = [];

            let ar32 = [];
            let ar33 = [];
            let ar34 = [];

            var mooningMonkey	 = 12000;
            var galacticGorilla	 = 3000; 
            var alienGorilla	 = 1000; 
            var eternalYeti	     = 500;
            for(let x=0;x<10;x++){
                
                a1 = x===0? 90/100:(x===1||x===2?a1-(4.5/100):a1-(5/100));
                a2 = x===0? 5/100:a2+(3/100);
                a3 = x===0? 3/100:a3+(1/100);
                a4 = x===0? 2/100:(x===1||x===2?a4+(0.5/100):a4+(1/100));
                a5 = a1 + a2 + a3 + a4;
                
                a6 = mooningMonkey * a1;
                a7 = galacticGorilla * a2;
                a8 = alienGorilla * a3;
                a9 = eternalYeti * a4;
                a10 = a6+(a7*4)+(a8*12)+(a9*24);
                
                a11 = a6 * r1[x];
                a12 = a7 * r1[x] * 4;
                a13 = a8 * r1[x] * 12;
                a14 = a9 * r1[x] * 24;
                a15 = a11 + a12 + a13 + a14;
                a16 = r2[x] - a15;

                a17 = ar17[x];
                a18 = ar18[x];
                a19 = ar19[x];
                a20 = ar20[x];
                a21 = a17 + a18 + a19 + a20;
                a22 = holders[x] - a15 - a21;

                a23 = a11/a6;
                a24 = a17/a6;
                a25 = a23+a24;

                a26 = a12/a7;
                a27 = a18/a7;
                a28 = a26+a27;

                a29 = a13/a8;
                a30 = a19/a8;
                a31 = a29+a30;

                a32 = a14/a9;
                a33 = a20/a9;
                a34 = a32+a33;

                
                    
                ar1.push(a1);
                ar2.push(a2);
                ar3.push(a3);
                ar4.push(a4);
                ar5.push(a5);
                ar6.push(a6);
                ar7.push(a7);
                ar8.push(a8);
                ar9.push(a9);
                ar10.push(a10);
                ar11.push(a11);
                ar12.push(a12);
                ar13.push(a13);
                ar14.push(a14);
                ar15.push(a15);
                ar16.push(a16);
                // ar17.push(a17);
                // ar18.push(a18);
                // ar19.push(a19);
                // ar20.push(a20);
                ar21.push(a21);
                ar22.push(a22);

                ar23.push(a23);
                ar24.push(a24);
                ar25.push(a25);

                ar26.push(a26);
                ar27.push(a27);
                ar28.push(a28);

                ar29.push(a29);
                ar30.push(a30);
                ar31.push(a31);

                ar32.push(a32);
                ar33.push(a33);
                ar34.push(a34);
                
            }
            arr.push(ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16,ar17,ar18,ar19,ar20,ar21,ar22,ar23,ar24,ar25,ar26,ar27,ar28,ar29,ar30,ar31,ar32,ar33,ar34);
            // console.log(arr)
            return arr;

        }
        ////// final calculation
        var final_calc = function(nftEarning,mm,gg,ag,ey,bets,wager){
            var r = nftEarning;
            var r1 = r[22];
            var r2 = r[23];

            var r3 = r[25];
            var r4 = r[26];

            var r5 = r[28];
            var r6 = r[29];

            var r7 = r[31];
            var r8 = r[32];
            
            let a1,a2,a4,a5,a7,a8,a10,a11,total,weekly,monthly;
            // let a3,a6,a9,a12;
            var weeklyT = 0;
            var monthlyT = 0;
            var totalT = 0;

            var weeklyArr = [];
            var monthlyArr = [];
            var totalArr = [];

            var weeklyRow = document.createElement('tr');
            var monthlyRow = document.createElement('tr');
            var totalRow = document.createElement('tr');
            appendElem('td','Weekly',weeklyRow);
            appendElem('td','Monthly',monthlyRow);
            appendElem('td','Yearly',totalRow);

            var weeklyRow1 = document.createElement('tr');
            var monthlyRow1 = document.createElement('tr');
            var totalRow1 = document.createElement('tr');
            for(let x=0;x<5;x++){
                
                
                a1 = r1[x] * mm;
                a2 = r2[x] * mm;
                // a3 = a1 + a2;

                a4 = r3[x] * gg;
                a5 = r4[x] * gg;
                // a6 = a4 + a5;

                a7 = r5[x] * ag;
                a8 = r6[x] * ag;
                // a9 = a7 + a8;

                a10 = r7[x] * ey;
                a11 = r8[x] * ey;
                // a12 = a10 + a11;

                var res1 = a1+a4+a7+a10;
                var res2 = a2+a5+a8+a11;
                total = res1 + res2;
                weekly = total/52;
                monthly = total/12;

                weeklyArr.push(weekly);
                monthlyArr.push(monthly);
                totalArr.push(total);

                totalT += total;
                monthlyT += monthly;
                weeklyT += weekly;

                if(x<5){
                    appendElem('td',total/52,weeklyRow);
                    appendElem('td',total/12,monthlyRow);
                    appendElem('td',total,totalRow);
                }
                // else{
                //     appendElem('td',total/52,weeklyRow1);
                //     appendElem('td',total/12,monthlyRow1);
                //     appendElem('td',total,totalRow1);
                // }
                
                
            }
            
            appendElem('td',weeklyT,weeklyRow1);
            appendElem('td',monthlyT,monthlyRow1);
            appendElem('td',totalT,totalRow1);
            document.querySelector('#levels-data').innerHTML = '';
            // document.querySelector('#levels-data1').innerHTML = '';

            document.querySelector('#levels-data').appendChild(weeklyRow);
            document.querySelector('#levels-data').appendChild(monthlyRow);
            document.querySelector('#levels-data').appendChild(totalRow);

            // document.querySelector('#levels-data1').appendChild(weeklyRow1);
            // document.querySelector('#levels-data1').appendChild(monthlyRow1);
            // document.querySelector('#levels-data1').appendChild(totalRow1);
            return {weekly:weeklyArr,monthly:monthlyArr,total:totalArr,totalT}

        }
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
       
        var calculateProfit = function(){
    
            var bets = document.querySelector('#bets').value.replace(/'/g,'');
            var wager = document.querySelector('#wager').value.replace(/'/g,'');
        
            var mm = document.querySelector('#mooning-monkey').value.replace(/'/g,'');
            var gg = document.querySelector('#galactic-gorilla').value.replace(/'/g,'');
            var ag = document.querySelector('#alien-gorilla').value.replace(/'/g,'');
            var ey = document.querySelector('#eternal-yeti').value.replace(/'/g,'');
        
        
            // var bets = 75000
            // var wager = 15
            // var mm = 7
            // var gg = 3
            // var ag = 1
            // var ey = 1
            // console.clear()
            // console.log(bets,wager,mm,gg,ag,ey)
        
        
            var betsWins_data = betsWins(bets,wager);
            // token(betsWins_data);
            var cBack__ = cBack(betsWins_data);
            // console.log(cBack__)
            var cBackWin = cBack_(cBack__,'win');
            var cBackLoss = cBack_(cBack__,'loss');
            
            
            
            var revShare_data = revShare(betsWins_data,cBackWin,cBackLoss);
            
            var nftEarning_data = nftEarning(revShare_data,mm,gg,ag,ey,bets,wager);
            
            // console.log(ne[24],ne[22],ne[23],ne[27],ne[25],ne[26],ne[30],ne[28],ne[29],ne[33],)
            // console.log(mm , gg , ag , ey)
        
        
        
        
            var final_calc_data = final_calc(nftEarning_data,mm,gg,ag,ey,bets,wager);
            var chartData = [final_calc_data.weekly,final_calc_data.monthly,final_calc_data.total];
            document.querySelector('#total-earned').innerHTML = final_calc_data.totalT.toLocaleString('en-US',{ style: 'currency', currency: 'USD',maximumFractionDigits: 0 });
            // console.log(final_calc_data)
            // updateChart(profitChart,chartData);

            chart.data.datasets.forEach((dataset,index) => {
                dataset.data = chartData[index];
            });
            chart.update();
            // if(mm >0 && gg>0 && ag>0 && ey>0){
            //     // document.querySelector('#chart-container').classList.remove('hidden-elem');
            //     // var data1 = generateChartData(chart,ne[24],ne[22],ne[23],ne[27],ne[25],ne[26],ne[30],ne[28],ne[29],ne[33]);
                
            // }
            // if(mm ==0 && gg==0 && ag==0 && ey==0){
            // }
        }
        
        setTimeout(()=>{
            // this.calculateProfit(this.state);
            chart = this.chartReference;
            calculateProfit();
            document.addEventListener('DOMContentLoaded',function(){
                calculateProfit();
            });
          
            document.querySelectorAll('.profit-container .calc-input ').forEach(function(elem){
                elem.addEventListener('input',  function(e){
                calculateProfit();
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
            <div className="profit-container">
             
                <div className="profit-generat-wrapper">
                    <div className="profit-input-genrat-sec">
                        <div className="profit-genrator-sec">
                           <p>Use the Profit Calculator to determine the crazy lucrative rewards you’ll be able to generate by holding “Mooning Monkeys” and other evolution stages such as “Galactic Gorillas”,  “Alien Gorillas” and “Eternal Yetis”</p>
                            <div></div>
                        </div>
                        <div className="sec-heading">
                            <span>STEP 1:</span> BET SETTINGS
                        </div>
                        <div className="profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Daily Bets</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input bets-input" id="bets"  data-slider-class="bets-slider" defaultValue="75'000" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="bets">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="bets"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="bets">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="bets"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range bets-slider" id="bets-slider"  data-input-class="bets-input" defaultValue="75000" min="75000" max="1000000"  step="5000" />
                                <div className="slider-min-max">
                                    <span>75'000</span>
                                    <span>1'000'000</span>
                                </div>
                            </div>
                        </div>
                        <div className="profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Avg wager per bet ($)</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input wager-input" id="wager"  data-slider-class="wager-slider" defaultValue="15" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="wager">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="wager"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="wager">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="wager"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range wager-slider" id="wager-slider"  data-input-class="wager-input" defaultValue="15" min="15" max="1000"  step="5" />
                                <div className="slider-min-max">
                                    <span>15</span>
                                    <span>1'000</span>
                                </div>
                            </div>
                        </div>
                        <div className="sec-heading">
                            <span>STEP 2:</span> NFT HOLDING SETTINGS
                        </div>
                        <div className="profit-genrator-sec">
                            <div className="label-container">
                                <label htmlFor="">Mooning Monkey - Level 1</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input mooning-monkey-input" id="mooning-monkey"  data-slider-class="mooning-monkey-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="mooning-monkey">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="mooning-monkey"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="mooning-monkey">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="mooning-monkey"></span>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range mooning-monkey-slider" id="mooning-monkey-slider"  data-input-class="mooning-monkey-input" defaultValue="0" min="0" max="12000"  step="1" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>12'000</span>
                                </div>
                            </div>
                        </div>
                        <div className="profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Galactic Gorilla - Level 2</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input galactic-gorilla-input" id="galactic-gorilla"  data-slider-class="galactic-gorilla-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="galactic-gorilla">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="galactic-gorilla"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="galactic-gorilla">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="galactic-gorilla"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range galactic-gorilla-slider" id="galactic-gorilla-slider"  data-input-class="galactic-gorilla-input" defaultValue="0" min="0" max="3000"  step="1" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>3'000</span>
                                </div>
                            </div>
                        </div>
                        <div className="profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Alien Gorilla - Level 3</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input alien-gorilla-input" id="alien-gorilla"  data-slider-class="alien-gorilla-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="alien-gorilla">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="alien-gorilla"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="alien-gorilla">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="alien-gorilla"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range alien-gorilla-slider" id="alien-gorilla-slider"  data-input-class="alien-gorilla-input" defaultValue="0" min="0" max="1000"  step="1" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>1'000</span>
                                </div>
                            </div>
                        </div>
                        <div className="profit-genrator-sec ">
                            <div className="label-container">
                                <label htmlFor="">Eternal Yeti - Level 4</label> 
                                <div className="input-container">
                                    <input type="text" className="calc-input input-field range-slider__input eternal-yeti-input" id="eternal-yeti"  data-slider-class="eternal-yeti-slider" defaultValue="0" />
                                    <div className="rc-input-number-handler-wrap">
                                        <span unselectable="on" role="button" aria-label="Increase Value" className="rc-input-number-handler rc-input-number-handler-up quantity__plus " data-input="eternal-yeti">
                                            <span unselectable="on" className="rc-input-number-handler-up-inner" data-input="eternal-yeti"></span>
                                        </span>
                                        <span unselectable="on" role="button" aria-label="Decrease Value" className="rc-input-number-handler rc-input-number-handler-down quantity__minus" data-input="eternal-yeti">
                                            <span unselectable="on" className="rc-input-number-handler-down-inner" data-input="eternal-yeti"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-input-sec range-slider">
                                <input type="range" className="calc-input range range-slider__range eternal-yeti-slider" id="eternal-yeti-slider"  data-input-class="eternal-yeti-input" defaultValue="0" min="0" max="500" step="1" />
                                <div className="slider-min-max">
                                    <span>0</span>
                                    <span>500</span>
                                </div>
                            </div>
                        </div>
                        <div className="sec-heading">
                            <span>STEP 3:</span> PROFIT FORECAST
                        </div>
                        
            
            
                    </div>
                    <div className="result-table-sec">
                        <table className="result-table">
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
                        {/* <!-- <table className="result-table">
                            <thead>
                                <tr>
                                    <th>Y6</th>
                                    <th>Y7</th>
                                    <th>Y8</th>
                                    <th>Y9</th>
                                    <th>Y10</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody id="levels-data1">
                        
                            </tbody>
                        </table> --> */}
                    </div>
                    <div className="footer-result-sec">
                        <div className="total-result-label">Total Earned Over <br /> 5 years:</div>
                        <div className="total-result-text" id="total-earned"></div>
                    </div>
                    <div id="chart-container"  className="">
                        <Bar ref={(reference) => this.chartReference = reference } options={profitChartOptions} data={profitChartData}  width="400" height="300" />
                    </div>
                </div>
                
            </div>
        )
    }
}


export default ProfitCalculator;
