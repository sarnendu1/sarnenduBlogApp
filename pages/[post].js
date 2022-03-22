import Link from 'next/link'
import Image from 'next/image';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import { useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import ReCAPTCHA from "react-google-recaptcha";
import Download from '../components/download/download';
import { useEffect } from 'react';
import Script from 'next/script';




export const getStaticPaths = async()=>{
  const res = await fetch("https://sarnendublogappapi.herokuapp.com/posts")
  const data = await res.json();

  const paths = data.map(curElem=>{
    return{
      params: {
        post: curElem.id.toString()
      }
    }
  });

  return{
    paths,
      fallback:false
    }
  }

  export const getStaticProps = async(context) => {
    const id = context.params.post;
    const res = await fetch("https://sarnendublogappapi.herokuapp.com/posts/" + id);
    const data = await res.json();
  
    return{
      props: {
        data,
      }
    }
  }


export default function SinglePost({data}) {


  useEffect(() => {
   
    const downloadBtn = document.querySelector(".download-btn");
    const countdown = document.querySelector(".countdown");
    const pleaseWaitText = document.querySelector(".pleaseWait-text");
    const manualDownloadText = document.querySelector(".manualDownload-text");
    
    var timeLeft = 60;
  
    downloadBtn.addEventListener("click", () => {
      downloadBtn.style.display = "none";
      countdown.innerHTML = "Your download will start in <span>" + timeLeft + "</span> seconds."  //for quick start of countdown
  
      var downloadTimer = setInterval(function timeCount() {
        timeLeft -= 1;
        countdown.innerHTML = "Your download link will generate in <span>" + timeLeft + "</span> seconds.";
  
        if(timeLeft <= 0){
          clearInterval(downloadTimer);
          pleaseWaitText.style.display = "block";
          let download_href = "#"; //enter the downlodable file link here
          window.location.href = download_href;
          
  
          setTimeout(() => {
            pleaseWaitText.style.display = "none";
          manualDownloadText.style.display = "block"
          }, 4000);
        }
      }, 1000);
    });
  }, [])

 
  


  /* useEffect(() => {
    var sec = 15;
    var myTimer = document.getElementById('myTimer');
    var myBtn = document.getElementById('myBtn');
    window.onload = countDown;

    
    function countDown() {
        if (sec < 10) {
            myTimer.innerHTML = "0" + sec;
        } else {
            myTimer.innerHTML = sec;
        }
        if (sec <= 0) {
            $("#myBtn").removeAttr("disabled");
            $("#myBtn").removeClass().addClass("btnEnable");
            $("#myTimer").fadeTo(2500, 0);
            myBtn.innerHTML = "Submit";
            return;
        }
        sec -= 1;
        window.setTimeout(countDown, 1000);
    }
  }, []) */
  

  const [isVerified,setIsVerified] = useState(false);

  function onChange(value) {

  console.log("Captcha value:", value);

  setIsVerified(true);

}

  const search=(category)=>{
    console.warn(category);
    
    setPost(post);
  }

  const [post,setPost] = useState(data);

  const filterPost =(category)=>{
    const updatePost= data.filter((data) =>{
        return data.category === category;
      })
      setPost(updatePost);
  }

  
 
  
  return (
      <>
        <NextSeo
      title={data.metatitle}
      description={data.desc}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.png',
        }
       
      ]}
    />
    
      <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content={data.keywords} />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    
    <Script dangerouslySetInnerHTML={{ __html: (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com/tag.min.js',4964243,document.body||document.documentElement) }} />
    <meta name="propeller" content="c90b9aaf2437c245c17d36d5b95a9b9d" />
    </Head>
    <Script async="async" data-cfasync="false" src="//pl17128038.effectivecpmcontent.com/a00d94f18094a0b051bc5d781da76fa3/invoke.js" />
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
      <Link passHref href="/contact"><span className="navlink">Contact</span></Link>
      <Link passHref href="/categories/blog"><span className="navlink">Blog</span></Link>
      <Link passHref href="/categories/codes"><span className="navlink">Codes</span></Link>
      <Link passHref href="/categories/youtube"><span className="navlink">Youtube</span></Link>
     {/*  <Search /> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

     <div className='flex'>
          
          
          <div className="singlePost">
          <div className="singlePostWrapper">

          <h1 className="singlePostTitle">
            {data.title}
              
          </h1>
          <div >
          <img

          src={data.image.url}
          className="feature-img"
          alt={data.title}
          />
          </div>
          
            <div className="singlePostInfo mt-5">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link passHref href="/about">
                   <span className="color5">Sarnendu Das</span>
                  </Link>
                </b>
              </span>
              {/* <span>1 day ago</span> */}
            </div>
            <div id="container-a00d94f18094a0b051bc5d781da76fa3"></div>
           <div className='content' dangerouslySetInnerHTML={{ __html: data.content }}></div>
          
          </div>
        </div>
       {/* <center>
      <div className={data.recapcha}>
        <Download

                      className="recapcha"           

                      

                      onChange={onChange}

                    />
      </div> 
      </center>             
      <div className="col-md-12">
                          <div className="form-group">
                            <button
                              disabled={!isVerified}
                              type="submit"
                              
                              
                              className="btn btn-primary"
                            ><Link href={data.downloadlink}>Submit</Link>
                            </button>
                          </div>
                        </div> */}
                     {/*    <div id="wrapper">
    <div id="myTimer"></div>
    <Link href={data.downloadlink}><button type="button" id="myBtn" class="btnDisable" >
   
    </button>
    </Link>
</div> */}
      <div className={data.visibility}>
      <div className="download-container">
    <a href="#" className="download-btn">Click here to download code</a>
    <div className="countdown"></div>
    <div className="pleaseWait-text">Please Wait...</div>
    <div className="manualDownload-text"><a href={data.downloadlink} className="manualDownload-link"> <i className="fas fa-cloud-download-alt "></i> Download Code</a></div>
  </div>
  </div>

  <div className='ads-section'>
    <div>
      
    </div>
  </div>
  </div>
    <Footer />
    <Script type='text/javascript' src='//pl17130463.effectivecpmcontent.com/1f/33/de/1f33de69dc7f152dc60061b2fedffc3a.js' />
    <Script src="https://kit.fontawesome.com/e48d166edc.js" crossorigin="anonymous" />
    </>
  );
}
