import React,{useState, useEffect} from 'react'
import Countdowns from '../Countdowns'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Attributes() {
    const [key, setKey] = useState('home');
	useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
      return (
        <React.Fragment>
        <div className='section attribute-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center '>
                        <h2 className='heading-big' data-aos="fade-up">Mooning Monkey Attributes</h2>
						<a class="btn btn-pink gradient top-30" href="#"  data-aos="fade-up">COLLECTION ATTRIBUTES</a>
                    </div> 
                </div>    
               
            </div>  
        </div>
		<div className='section attribute' >
            <div className='container'>
                <div className='row'>
					<div className='col-md-12 text-center '> 
					<p  data-aos="fade-up">ALL MOONING MONKEY ATTRIBUTES WILL BE REVEALED IN…</p>
					</div>
					<div className='col-md-12  text-center top-100'> 
					<div className='timer'> <Countdowns /> </div>
					</div>
				</div>
				
			</div>
        </div>
        
        </React.Fragment>
    ) 
}
