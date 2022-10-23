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

import {FaFacebook, FaFacebookSquare, FaLinkedin, FaYoutube, FaYoutubeSquare} from "react-icons/fa";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";



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
    let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
sidebar.classList.toggle("open");
menuBtnChange();//calling the function(optional)
});

/* searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
sidebar.classList.toggle("open");
menuBtnChange(); //calling the function(optional)
}); */

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

  
  let url = `https://www.purpleglib.in/${data.slug}`;
  
      
  
  return (
      <>
        <NextSeo
      title={data.metatitle}
      description={data.desc}
      author={data.author}
      openGraph={{
        type: 'website',
        url: `${data.slug}`,
        title: `${data.title}`,
        description: `${data.desc}`,
        images: [
          {
            url: `${data.image.url}`,
            width: 800,
            height: 600,
            alt: `${data.title}`,
          }
        ],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel:'shortcut icon',
          href:'/favicon.ico',
        }
       
      ]}
    />
    
      <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content={data.keywords} />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    <meta name="propeller" content="c90b9aaf2437c245c17d36d5b95a9b9d" />
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
       <div>
          
          
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
                  <Link passHref href="https://sarnendu1.github.io/portfolio/">
                   <span className="color5">Eshita Dey</span>
                  </Link>
                </b>
              </span>
              {/* <span>1 day ago</span> */}
            </div>

           {/*  <FacebookButton url={url} appId={341856284569268} className="social-share">
        <FacebookCount url={url} />
        {" Share " }<FaFacebookSquare className='facebook' size={40} />
      </FacebookButton> */}

      <div className='social-share'>
      <div className='social-share-text'>Sharing is caring ❤️</div>
      
            <FacebookShareButton url={url} >
          <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton url={url} >
            <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <WhatsappShareButton url={url} >
            <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>

            <FacebookMessengerShareButton url={url} appId={341856284569268} >
            <FacebookMessengerIcon size={32} round={true} />
            </FacebookMessengerShareButton>

            <LinkedinShareButton url={url} >
            <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <TelegramShareButton url={url} >
            <TelegramIcon size={32} round={true} />
            </TelegramShareButton>

            <PinterestShareButton url={url} >
            <PinterestIcon size={32} round={true} />
            </PinterestShareButton>

            <EmailShareButton url={url} >
            <EmailIcon size={32} round={true} />
            </EmailShareButton>
</div>



            <div id="container-a00d94f18094a0b051bc5d781da76fa3" className='adsterra-ads'></div>
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



  <div className='social-share2'>
  <div className='social-share-text'>Sharing is caring ❤️</div>
  
<FacebookShareButton url={url} >
<FacebookIcon size={32} round={true} />
</FacebookShareButton>

<TwitterShareButton url={url} >
<TwitterIcon size={32} round={true} />
</TwitterShareButton>

<WhatsappShareButton url={url} >
<WhatsappIcon size={32} round={true} />
</WhatsappShareButton>

<FacebookMessengerShareButton url={url} appId={341856284569268} >
<FacebookMessengerIcon size={32} round={true} />
</FacebookMessengerShareButton>

<LinkedinShareButton url={url} >
<LinkedinIcon size={32} round={true} />
</LinkedinShareButton>

<TelegramShareButton url={url} >
<TelegramIcon size={32} round={true} />
</TelegramShareButton>

<PinterestShareButton url={url} >
<PinterestIcon size={32} round={true} />
</PinterestShareButton>

<EmailShareButton url={url} >
<EmailIcon size={32} round={true} />
</EmailShareButton>

</div>
  </div>

  <div className='ads-section'>
    <div>
    
    </div>
  </div>
  </div>

  <div className="sidebar-display">
    <div className="sidebar">
    <div className="logo-details">
     
        <i className='bx bx-menu' id="btn" ></i>
    </div>
    <ul className="nav-list">

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
        
        <Script src="https://kit.fontawesome.com/e48d166edc.js" crossorigin="anonymous" />
    </>
  );
}
