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
import { WhatsappIcon } from 'react-share';
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare,FaInstagram} from "react-icons/fa";

const About = () => {

  
  
  return (
  <>
   <NextSeo
      title="About"
      description="Welcome to the about us page"
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        }
       
      ]}
    />
      <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content="tech,seo" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    </Head>
   <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
  <img src="/logo.ico" alt="logo" className='favicon' />
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
   
   <div className='flex'>
      <div>
    
    <Container className='hero'>
   

    <div className='about-desc-box'>
    <p className='about-desc'>Hi Friends,Welcome to Purple Glib, It is a blog and codes website, Here you will find tech blogs and free codes of designs and projects which all written and coded by Mr.Sarnendu Das(Founder). He is a Professional Web Developer with a passion for Web Designing And Developing, and he also Makes Videos On Youtube.

He started Purple Glib with the idea of helping Students like yourself, by giving some Tech and Educational blogs, Free codes and Youtube Videos.

He knows many programming languages like Html,Css,Javascript,Next Js,React Js,Node Js,Express Js,MongoDB,Php And Mysql.

His Youtube Channels Names Are Sarnendu Official And Career Champions, You Can Visit his Channel And Check his Videos And If You Like his Videos Then You Can Subscribe.</p>
</div>

</Container>

  </div>

  <div className='author-card'>
    <div className='author'>
      <center>
  <Image
    src="/hero.png"
    width={280}
    height={250}
    alt="Sarnendu Das"
    className='hero-img'
    />
    <h3 className='mt-2'>Sarnendu Das</h3>
    <p>Founder</p>
    <h5>Follow</h5>
    <div>
    <ul className='social'>
        
        <li>
            <Link href="https://www.facebook.com/sarnendu28"><a className="navlinkfacebook" ><FaFacebookSquare size={40}/></a></Link>
        </li>
        <li>
            <Link href="/about"><a className="navlinkyoutube"><FaYoutubeSquare size={40}/></a></Link>
        </li>

        <li>
            <Link href="/about"><a className="navlinkyoutube"><FaInstagram size={40}/></a></Link>
        </li>
        
        <li>
            <Link href="/about"><a className="navlinklinkedin" ><FaLinkedin size={40}/></a></Link>
        </li>

      </ul>

      <h5>Contact</h5>
      <ul className='social'>
        
        <li>
            <Link href="tel:+918013024559"><a className="navlinkyoutube"><FaPhoneSquareAlt size={40}/></a></Link>
        </li>
        <li>
            <Link href="mailto:sarnendu1@gmail.com"><a className="navlinkyoutube"><FaEnvelopeSquare size={40}/></a></Link>
        </li>
        

        <li>
            <Link href="https://wa.me/+918013024559"><a className="navlinkyoutube"><FaWhatsappSquare size={40}/></a></Link>
        </li>
      </ul>

      </div>
    </center>

  </div>
  </div>

  </div>
    <Footer />
  </>
  )
};

export default About;
