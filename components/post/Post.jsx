
import Link from 'next/link'

export default function Post({img}) {
  return (
    <div className="post">
      <Image
        className="postImg"
        src={img}
        alt=""
        width={100}
        height={50}
      />
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
          <Link href="/post" className="link">
          <h3>Lorem ipsum dolor sit amet</h3>  
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
