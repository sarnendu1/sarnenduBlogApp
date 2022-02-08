import Link from 'next/link'
import Image from 'next/image';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import api from './api/api';
import { useRouter } from 'next/router';

export default function SinglePost() {
  
  return (
      <>
      <Topbar />
      {
        data.map((curElem)=>{
          return (
          <div key={curElem.id}>
          <div className="singlePost">
          <div className="singlePostWrapper">
    
            <img
              className="singlePostImg"
              src={curElem.image.url}
              alt=""
              
             
            />
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
           {curElem.content}
          </div>
        </div>
        </div>
          )
        } )
   
      }
    <Footer />
    </>
  );
}
