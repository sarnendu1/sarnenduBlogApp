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
    <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
      <title>Purple Glib</title>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    </Head>
    <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
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
        alt=""
       
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
          <h3>{data.title}</h3>  
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

        <Footer />
     
    </>
  );
}



export default Home;