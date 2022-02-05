
import Link from 'next/link'
import Image from 'next/image';

export default function Post({img}) {
  return (
    <div className="post">
      <Link href="/post1">
      <Image
        className="postImg"
        src={img}
        alt=""
        width={400}
        height={300}
      />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" href="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" href="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link href="/post1" className="link">
          <h3>How To Do Seo Correctly</h3>  
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <Link href="/post1">
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
