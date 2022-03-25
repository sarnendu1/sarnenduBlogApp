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
                    <Link href="/"><li className="pointer">Home</li></Link>
                    <Link href="categories/blog"><li className="pointer">Blog</li></Link>
                    <Link href="categories/codes"><li className="pointer">Codes</li></Link>
                    <Link href="categories/youtube"><li className="pointer">Youtube</li></Link>
                    <Link href="/about"><li className="pointer">About</li></Link>
                    <Link href="/contact"><li className="pointer">Contact</li></Link>
                    <Link href="/term"><li className="pointer">Terms And Conditions</li></Link>
                    <Link href="/policy"><li className="pointer">Privacy Policy</li></Link>
                    <Link href="/disclaimer"><li className="pointer">Disclaimer</li></Link>
                </ul>
            
        </div>
        <div className="footer-div2">
            <h2>Follow Us</h2>
         <Link href=""><FaInstagramSquare size={30}/></Link>
         <Link href="https://www.facebook.com/purpleglib"><FaFacebookSquare size={30}/></Link>
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
            <Link href="mailto:purpleglib@gmail.com"><FaEnvelopeSquare size={30}/></Link>
            <p>sarnendu1@gmail.com</p>
            </div>
        </div>
        
    </div>
    
    </>
  );
}

export default Footer;