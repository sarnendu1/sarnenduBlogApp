import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
    <Link href="" passHref><Image
        className="headerImg"
        src=""
        alt=""
        width="200"
        height="400"
      />
      </Link>
    </div>
  );
}
