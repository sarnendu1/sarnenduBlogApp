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
        src="https://i.pinimg.com/564x/1c/c8/cc/1cc8cc57e387fe9562395dfff50a2d1c.jpg"
        alt=""
        
        height="400"
      />
      </Link>
    </div>
  );
}
