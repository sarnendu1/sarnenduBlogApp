import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from '../components/topbar/Topbar'
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare} from "react-icons/fa";
import Footer from "../components/footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Head from "next/head";
import { useEffect } from "react";
import { NextSeo } from 'next-seo';
import Script from 'next/script';


const Contact = () => {

  const [isVerified,setIsVerified] = useState(false);

  function onChange(value) {

  console.log("Captcha value:", value);

  setIsVerified(true);

}

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;

    if (firstName && lastName && phone && email  && message) {
      const res = fetch(
        "https://sarnendu-blog-app-contact-form-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
           
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          
          message: "",
        });
        toast.success("Form Submitted Successfully");
      } else {
        toast.error("Please provide value in each input field");
      }
    } else {
      toast.error("Please provide value in each input field");
    }
  };

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
      title="Contact"
      description="Welcome to the contact us page"
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.png',
        }
       
      ]}
    />
        <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content="tech,seo" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    <meta name="propeller" content="c90b9aaf2437c245c17d36d5b95a9b9d" />
    </Head>
    <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
  <img src="/favicon.png" alt="" className='favicon' />
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
    <Link passHref  href="/about"><span className="navlink">About</span></Link>
      <Link passHref href="/contact"><span className="navlink active">Contact</span></Link>
      <Link passHref href="/categories/blog"><span className="navlink">Blog</span></Link>
      <Link passHref href="/categories/codes"><span className="navlink">Codes</span></Link>
      <Link passHref href="/categories/youtube"><span className="navlink">Youtube</span></Link>
     {/*  <Search /> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4 color">Send message</h3>
                    <form
                     method="POST"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              id=""
                              placeholder="First Name"
                              value={userData.firstName}
                          onChange={postUserData}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              id=""
                              placeholder="Last Name"
                              value={userData.lastName}
                          onChange={postUserData}
                            />
                          </div>
                          </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id=""
                              placeholder="Email"
                              value={userData.email}
                          onChange={postUserData}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              id=""
                              placeholder="Phone"
                              value={userData.phone}
                          onChange={postUserData}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              
                              className="form-control"
                              name="message"
                              id=""
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              value={userData.message}
                              onChange={postUserData}
                            ></textarea>
                          </div>
                        </div>
                       
                       
                       
                       
                    <ReCAPTCHA

                      className="recapcha"

                      sitekey="6LfHN3ceAAAAAG5ad-jUhtGOHviJbjHcsRJzEZm5"

                      onChange={onChange}

                    />
                     
                        <div className="col-md-12">
                          <div className="form-group">
                            <button
                              disabled={!isVerified}
                              type="submit"
                              onClick={submitData}
                              
                              className="btn btn-primary"
                            >Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3 className="color3">Contact us</h3>
                    
                    <div className="dbox w-100 d-flex align-items-start my-5 ">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                     
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                        <FaPhoneSquareAlt size={50}/>
                          <Link passHref href="tel:+918013024559"><span className="color4">+91 8013024559</span></Link>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <FaEnvelopeSquare size={50}/>
                          <Link passHref href="mailto:sarnendu1@gmail.com">
                          <span className="color4">sarnendu1@gmail.com</span> 
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                         <FaWhatsappSquare size={50}/>
                          <Link passHref href="https://wa.me/+918013024559"><span className="color4">+91 8013024559</span></Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="sidebar-display">
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
  </div>
    <Footer />

    <Script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=4964524" />
        <Script src="https://phicmune.net/pfe/current/tag.min.js?z=4964501" data-cfasync="false" async />
   
        <Script async="async" data-cfasync="false" src="//pl17128038.effectivecpmcontent.com/a00d94f18094a0b051bc5d781da76fa3/invoke.js" />
        <Script type='text/javascript' src='//pl17130463.effectivecpmcontent.com/1f/33/de/1f33de69dc7f152dc60061b2fedffc3a.js' />
    </>
  );
};

export default Contact;
