
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios';


 export const getStaticProps = async() => {
  const res = await fetch("https://sarnendu1.github.io/sarnendu-blog-app-api/api.json")
  const data = await res.json();

  return{
    props: {
      data,
    },
  };
}; 

  const Post = ({data})=> {

  return (
<>
    <div className="post">
      
    {data.map((curElem) => {
          return (
            <div key={curElem.id}>
              <Link passHref href="/[post]">
      <Image
        className="postImg"
        src={curElem.image.url}
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
        
           
          <Link passHref href={`/${curElem.id}`} className="link">
          <h3>{curElem.name}</h3>  
          </Link>
         
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
          )})}
    </div>
    </>
  );
}

export default Post;
