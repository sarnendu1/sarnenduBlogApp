import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar"
import Link from "next/link";
import Image from "next/image";
import fetch from 'isomorphic-fetch';
import { useState } from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Head from "next/head";
import { useEffect } from "react";
import { NextSeo } from 'next-seo';
import Script from 'next/script';

/* import "./homepage.css"; */


export const getStaticProps = async() => {
  const res = await fetch("https://sarnendublogappapi.herokuapp.com/posts")
  const data = await res.json();

  return{
    props: {
      data,
    },
  };
}; 

  const Home =({data})=> {

    

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
    /* useEffect(() => {
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
    }, []) */
    
  return (
    <>
    <NextSeo
      title="Purple Glib"
      description="Welcome to Purple Glib. Here you will find tech blogs,codes and youtube videos about technology and coding."
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'favicon.ico',
        },
        {
          rel:'shortcut icon',
          href:'favicon.ico',
        }
       
      ]}
    />
    <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content="tech,seo" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
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
<Script strategy="lazyOnload" id='my-script'>
	{`atOptions = {
		'key' : '65f053a637c06f9740aa38b3849661d1',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivedisplayformats.com/65f053a637c06f9740aa38b3849661d1/invoke.js"></scr' + 'ipt>');`}
</Script>
      <Header />
      <div className="home">
      
    {post.map((data) => {
          return (
            <div key={data.id}>
              
              <div className="post">
      <Link passHref href={`/${data.id}`}>
      <img
        className="postImg"
        src={data.image.url}
        alt={data.title}
       
      />
      </Link>
      <div className="postInfo">
        <div className="postCats">
        <Link passHref href="">
          <span className="postCat">
            
              {data.category}
            
          </span>
          </Link>
          {/* <span className="postCat">
            <Link passHref className="link" href="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
        
          <Link passHref href={`/${data.id}`} className="link">
          <h2>{data.title}</h2>  
          </Link>
          
        </span>
        <hr />
       {/*  <span className="postDate">1 hour ago</span> */}
      </div>
      <Link passHref href="">
      <p className="postDesc">
        {data.desc}
      </p>
      </Link>
    </div>
      </div>
          )})}
    </div>
  

        <Footer />
        
        <Script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=4964524" />
        <Script src="https://phicmune.net/pfe/current/tag.min.js?z=4964501" data-cfasync="false" async />
    
    </>
  );
}



export default Home;