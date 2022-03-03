import Link from 'next/link'
import Image from 'next/image';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import api from '../api/api';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';


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
        curElem:data
      }
    }
  }


export default function SinglePost({curElem}) {
  
  return (
      <>
      <Topbar />
     
          
          
          <div className="singlePost">
          <div className="singlePostWrapper">
    
            
            <h1 className="singlePostTitle">
            {curElem.title}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link href="/about">
                   <span className="color5">Sarnendu Das</span>
                  </Link>
                </b>
              </span>
              {/* <span>1 day ago</span> */}
            </div>
           <div dangerouslySetInnerHTML={{ __html: curElem.content }}></div>
          
          </div>
        </div>
        
       
   
      
    <Footer />
    </>
  );
}
