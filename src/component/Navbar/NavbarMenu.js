import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MenuList } from "./MenuList";
import {Navbar,Container,Nav,NavDropdown,Offcanvas,Form,FormControl,Button} from 'react-bootstrap'


function NavbarMenu() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 50)
          );
        }
      }, []);

    const getMenuList = MenuList[0].left_side.map(({url,title},i) => {
       
        return(
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    const getMenuListMobile = MenuList[0].left_side.map(({url,title},i) => {
       
        return(
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    const getRightMenuMobile = MenuList[0].right_side.map(({url,title},i) => {
       
        return(
           
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    const getRightMenu = MenuList[0].right_side.map(({url,title},i) => {
       
        return(
           
            <li key={i}>
            
            <Link  to={url}>{title}</Link>
          
            </li>
        );
    });
    return (
<div  className={` navigation ${
        small ? "small" : ""
      }`}> 
<div className='container'>
        <div className='row desktop-menu'>
                    <div className='col-5 left-menu'> 
                    <nav className=''>
                        <ul> {getMenuList}       </ul>
                         </nav>  
                    </div>
                    <div className='col-2 header-logo text-center'> 
                       <a href='#' >
                       <img src={require('../img/logo-final-rocket2.png')} className='logo-img img-responsive' alt='stage-1'/>                        
                       </a>
                       <p><a href='https://t.me/MooningMonkeyOfficial' target='blank' rel='noopener'><img src={require('../img/telegrams.png')} className='img-responsive' alt=''/></a>  
<a href='https://discord.gg/mooningmonkeyofficial' target='blank' rel='noopener'><img src={require('../img/discord-icon3.png')} className='img-responsive' alt=''/></a>  
<a href='https://twitter.com/MooningMonkeys' target='blank' rel='noopener'><img src={require('../img/twitter-2.png')} className='img-responsive' alt=''/></a></p>
                    </div>
                    <div className='col-5 right-menu'> 
                        <nav className=''>
                        <ul> {getRightMenu}  </ul>
                         </nav>  
                    </div>
                
                    </div>

                    <Navbar expand={false} id='mobile'>
  <Container fluid>
    <Navbar.Brand href="#"><img src={require('../img/logo-final-rocket2.png')} className='logo-img img-responsive' alt='stage-1'/>                        
                       </Navbar.Brand>
                       <p><a href='https://t.me/MooningMonkeyOfficial' target='blank' rel='noopener'><img src={require('../img/telegrams.png')} className='img-responsive' alt=''/></a>  
<a href='https://discord.gg/mooningmonkeyofficial' target='blank' rel='noopener'><img src={require('../img/discord-icon3.png')} className='img-responsive' alt=''/></a>  
<a href='https://twitter.com/MooningMonkeys' target='blank' rel='noopener'><img src={require('../img/twitter-2.png')} className='img-responsive' alt=''/></a></p>     
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Mooning Monkey</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <ul>
            {getMenuListMobile}
         {getRightMenuMobile}
            </ul>
      
        </Nav>
       </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div> 

       
    </div> 
    )
}

export default NavbarMenu


