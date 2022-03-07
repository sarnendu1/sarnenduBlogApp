import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        
        <span className="headerTitleLg">BLOG</span>
      </div>
    <Link href="" passHref><img
        className="headerImg"
        src="https://i.pinimg.com/564x/dc/f8/db/dcf8db43a7d5c2d94d8a291aa4b3337a.jpg"
        alt=""
        width="100%"
        height="400"
      />
      </Link>
    </div>
  );
}
