import React from "react";
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare} from "react-icons/fa";

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
        <div className="footer-div">
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
            <FaPhoneSquareAlt size={30}/>
            <FaPhoneSquareAlt size={30}/>
            <FaPhoneSquareAlt size={30}/>
            
        </div>
        <div className="footer-div2">
            <h2>Contact</h2>
            <FaPhoneSquareAlt size={30}/>
            <FaPhoneSquareAlt size={30}/>
            <FaPhoneSquareAlt size={30}/>
            
        </div>
        
    </div>
    
    </>
  );
}

export default Footer;