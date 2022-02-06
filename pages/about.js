import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Topbar from '../components/topbar/Topbar';
import {FaFacebook, FaFacebookSquare, FaLinkedin, FaYoutube, FaYoutubeSquare} from "react-icons/fa";
import Link from 'next/link';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
  <>
   <Topbar />
    <h1 className='about-heading'>About</h1>  
    <hr className='hr' />
    <center>
    <Container className='hero'>
    <Image
    src="/hero.png"
    width={280}
    height={250}
    alt=""
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
    <Footer />
  </>
  )
};

export default About;
