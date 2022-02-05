import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from '../components/topbar/Topbar'
import {FaPhoneSquareAlt,FaEnvelopeSquare, FaWhatsappSquare} from "react-icons/fa";

const Contact = () => {
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
    <Topbar />
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
                       
                       
                       
                        <div className="form-check form-checkbox-style my-3 ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        className="main-hero-para color2">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <button
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
    </>
  );
};

export default Contact;
