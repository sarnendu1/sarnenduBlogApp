import React from "react";
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaLinkedinIn, FaLinkedin, FaMailBulk, FaMailchimp} from "react-icons/fa";
import Link from "next/link";

  const Footer =()=> {
  
  
  return (
    <>
    <div className="footer-container">
        <div className="footer-div">
            <h2>About</h2>
               <p>
               Hi Friends,My name is Sarnendu, I am a Web Developer with a passion for Web Designing And Developing, Making Videos On Youtube.
               </p>
            
        </div>
        <div className="footer-div3">
            <h2>Links</h2>
                <ul>
                    <li>Home</li>
                    
                    <li>Blog</li>
                    <li>Codes</li>
                    <li>Youtube</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            
        </div>
        <div className="footer-div2">
            <h2>Follow me</h2>
         <Link href=""><FaInstagramSquare size={30}/></Link>
         <Link href="https://www.facebook.com/sarnendu28"><FaFacebookSquare size={30}/></Link>
         <Link href=""><FaTwitterSquare size={30}/></Link>
         <Link href="https://www.linkedin.com/in/sarnendudas/"><FaLinkedin size={30}/></Link>
            
        </div>
        <div className="footer-div2">
            <h2>Contact</h2>
            <div className="footer-contact">
            <Link href="tel:8013024559"><FaPhoneSquareAlt size={30}/></Link>
            <p>8013024559</p>
            </div>
            <div className="footer-contact">
            <Link href="mailto:sarnendu1@gmail.com"><FaEnvelopeSquare size={30}/></Link>
            <p>sarnendu1@gmail.com</p>
            </div>
        </div>
        
    </div>
    
    </>
  );
}

export default Footer;