
import Link from 'next/link'
import Image from 'next/image';
import api from '../../pages/api/api';


export const getStaticProps= async()=>{
  const res = await fetch("https://sarnendu-blog-app.vercel.app/api/api")
  const data = await res.json();

  return{
    props: {
      data,
    },
  };
};

export default function Post({data}) {
  return (
    <div className="post">
      <Link passHref href="/post">
      <Image
        className="postImg"
        src=""
        alt=""
        width={400}
        height={300}
      />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link passHref className="link" href="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link passHref className="link" href="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
        {
        data.map((curElem)=>{
          return (
            <div key={curElem.id}>
          <Link passHref href={`/${curElem.id}`} className="link">
          <h3>{curElem.title}</h3>  
          </Link>
          </div>
          )})}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <Link passHref href="">
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      </Link>
    </div>
  );
}
