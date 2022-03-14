import React from 'react';
import Image from 'next/image';
import Topbar from '../components/topbar/Topbar';
import {FaFacebook, FaFacebookSquare, FaLinkedin, FaYoutube, FaYoutubeSquare} from "react-icons/fa";
import Link from 'next/link';
import Footer from '../components/footer/Footer';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Head from 'next/head';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

const About = () => {

  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
sidebar.classList.toggle("open");
menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
sidebar.classList.toggle("open");
menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
if(sidebar.classList.contains("open")){
 closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
}else {
 closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
}
}

  
    return () => {
      
    }
  }, [])
  
  return (
  <>
   <NextSeo
      title="About"
      description="Welcome to the about us page"
      
    />
      <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content="tech,seo" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    </Head>
   <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
  <Link passHref href="/"><span className='navbrand'>Purple Glib</span></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav className='me-auto'>
    <Link passHref  href="/about"><span className="navlink active">About</span></Link>
      <Link passHref href="/contact"><span className="navlink">Contact</span></Link>
      <Link passHref href="/categories/blog"><span className="navlink">Blog</span></Link>
      <Link passHref href="/categories/codes"><span className="navlink">Codes</span></Link>
      <Link passHref href="/categories/youtube"><span className="navlink">Youtube</span></Link>
     {/*  <Search /> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <h1 className='about-heading'>About</h1>  
    <hr className='hr' />
    <center>
    <Container className='hero'>
    <Image
    src="/hero.png"
    width={280}
    height={250}
    alt="Sarnendu Das"
    />
    <div>
    <ul className='social'>
        
        <li>
            <Link href="https://www.facebook.com/sarnendu28"><a className="navlinkfacebook" ><FaFacebookSquare size={50}/></a></Link>
        </li>
        <li>
            <Link href="/about"><a className="navlinkyoutube"><FaYoutubeSquare size={50}/></a></Link>
        </li>
        
        <li>
            <Link href="/about"><a className="navlinklinkedin" ><FaLinkedin size={50}/></a></Link>
        </li>
      </ul>
      </div>

    <div className='about-desc-box'>
    <p className='about-desc'>Hi Friends,My name is Sarnendu, I am a Web Developer with a passion for Web Designing And Developing, Making Videos On Youtube.

I started Sarnendu with the idea of helping Students like yourself, by giving some Tech and Educational blogs and Youtube Videos.

I know many programming languages like `<i> Html,Css,Javascript,Next Js,React Js,Node Js,Express Js,MongoDB,Php And Mysql</i>``.

Currently I am Working At Techpranee As A Web Developer

My Youtube Channels Names Are Sarnendu Official And Career Champions, You Can Visit My Channel And Check My Videos And If You Like My Videos Then You Can Subscribe.</p>
</div>

</Container>
</center>
<div className="sidebar">
    <div className="logo-details">
      {/* <i class='bx bxl-c-plus-plus icon'></i> */}
        {/* <div class="logo_name">CodingLab</div> */}
        <i className='bx bx-menu' id="btn" ></i>
    </div>
    <ul className="nav-list">
      <li>
          <i className='bx bx-search' ></i>
         <input type="text" placeholder="Search..." onChange={(e)=>search(e.target.value)}/>
         <span className="tooltip">Search</span>
      </li>
      <li>
        <Link href="/about">
        <a>
        <i className='bx bx-user-pin' ></i>
          <span className="links_name">About</span>
        
         <span className="tooltip">About</span>
         </a>
         </Link>
      </li>
      
     <li>
     <Link href="/contact">
       <a>
       <i className='bx bxs-contact' ></i>
         <span className="links_name">Contact</span>
       
       <span className="tooltip">Contact</span>
       </a>
       </Link>
     </li>
     <li>
       <Link href="/categories/blog">
       <a>
       <i className='bx bx-pen'></i>
         <span className="links_name">Blog</span>
       
       <span className="tooltip">Blog</span>
       </a>
       </Link>
     </li>
     <li>
       <Link href="/categories/codes">
       <a>
       <i className='bx bx-code-alt'></i>
         <span className="links_name">Codes</span>
       
       <span className="tooltip">Codes</span>
       </a>
       </Link>
     </li>
     <li>
       <Link href="/categories/youtube" >
       <a>
       <i className='bx bxl-youtube' ></i>
         <span className="links_name">Youtube</span>
     
       <span className="tooltip">Youtube</span>
       </a>
       </Link>
     </li>
    </ul>
  </div>
    <Footer />
  </>
  )
};

export default About;
