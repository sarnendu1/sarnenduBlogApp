import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from '../components/topbar/Topbar'
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare} from "react-icons/fa";
import Footer from "../components/footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';



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

  return (
    <>
    <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
  <Link passHref href="/"><span className='navbrand'>Sarnendu</span></Link>
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
    <Footer />
    </>
  );
};

export default Contact;
