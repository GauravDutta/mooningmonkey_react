import React from 'react'
import { MenuList } from "../Navbar/MenuList";
import { Link } from 'react-router-dom';
function Footer() {
    const getFooterMenuList = MenuList[0].left_side.map(({url,title},i) => {
       
        return(
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    
    const getFooterRightMenu = MenuList[0].right_side.map(({url,title},i) => {
       
        return(
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    return (
        <div className='footer'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={process.env.PUBLIC_URL + '/img/logo-footer.png'} className='footer-logo img-responsive' /> 
            </div> 
            <div className='col-md-6 text-right'>
            <div className='social '>
                <a href='https://t.me/MooningMonkeyOfficial' target='blank' rel='noopener'>
                <img src={process.env.PUBLIC_URL + '/img/telegram.png'} className='img-responsive' /></a> 
                <a href='https://discord.gg/mooningmonkeyofficial' target='blank' rel='noopener'>
                <img src={process.env.PUBLIC_URL + '/img/discord-icon-white.png'} className='img-responsive' /></a> 
                <a href='https://twitter.com/MooningMonkeys' target='blank' rel='noopener'>
                <img src={process.env.PUBLIC_URL + '/img/twitter-1.png'} className='img-responsive' /></a> 
                <a href='https://www.youtube.com/channel/UCpaA-PONHvinHR22cLbTLvg' target='blank' rel='noopener'>
                <img src={process.env.PUBLIC_URL + '/img/you-icon.png'} className='img-responsive' />
                </a>
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-md-12 text-center'>
                <h3>MOONING MONKEY</h3>
            <ul className='footer_menu top-30'>{getFooterMenuList}{getFooterRightMenu}</ul>
                <p className='copyright'>Copyright © 2021 MOONING MONKEY </p>
                </div>
        </div>               
        </div> 
                  
    </div> 
    )
}

export default Footer
