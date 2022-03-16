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
import Download from '../components/download';



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
    />
      <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content={data.keywords} />
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
     
          
          
          <div className="singlePost">
          <div className="singlePostWrapper">

          <h1 className="singlePostTitle">
            {data.title}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
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
           <div className='content' dangerouslySetInnerHTML={{ __html: data.content }}></div>
          
          </div>
        </div>
       
      
        
   
      
    <Footer />
    </>
  );
}
