import Link from 'next/link'
import Image from 'next/image';
import Topbar from '../components/topbar/Topbar';

export default function SinglePost() {
  return (
      <>
      <Topbar />
    <div className="singlePost">
      <div className="singlePostWrapper">

        <Image
          className="singlePostImg"
          src="https://i.pinimg.com/originals/15/26/3f/15263f971e5b2b99e49a9855f4f810a0.jpg"
          alt=""
          
         
        />
        <h1 className="singlePostTitle">
        How To Do Seo Correctly
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" href="/posts?username=Sarnendu">
                Sarnendu Das
              </Link>
            </b>
          </span>
          {/* <span>1 day ago</span> */}
        </div>
        <p className="singlePostDesc">
         
Assuming that you have a blog, odds are you as of now comprehend the significance of business publishing content to a blog and its SEO benefits. In any case, do you have any idea how to advance your blog entries to make them more internet searcher well disposed?



Truly, numerous bloggers neglect to exploit the huge promoting capability of their online journals. Indeed, a new report by blogger.com shows that albeit generally 60% of organizations have web journals, 65% of those blog proprietors have not refreshed in the previous year! By giving new, applicable substance and performing fundamental blog entry improvement, you can exploit the many advantages writing for a blog offers.



<h3 className='subheading'>The following are six simple site improvement (SEO) tips to assist with getting your blog taken note.</h3>

<h2 className='points'>Do your exploration</h2>
Catchphrase research is fundamental for on page advancement. Odds are good that you are normally including catchphrases without acknowledging it essentially by giving important substance on a subject. Nonetheless, there are an assortment of apparatuses and procedures for finding related catchphrases pertinent to your blog entry that you might not have thought of. The Google Adwords Keyword Tool and semrush.com both deal extraordinary instruments that permit you to observe catchphrases connected with your point and even government agent on your opposition to see what words and expressions they are focusing to carry traffic to their locales.



<h2 className='points'>Use watchwords all through your post</h2>
Whenever you have designated a few significant, applicable watchwords, it is essential to put them where they will have the most effect for people and web search tool crawlers ordering your substance. Attempt to remember them for the accompanying spots:


<ul className='lists'>
<li>Title</li>
<li>Headings and subheadings</li>
<li>Initial sentence</li>
<li>Finishing up passage</li>
<li>Anchor (text you hyperlink to other related pages on your site)</li> 
<li>Title labels and meta portrayals</li> 
</ul>

<h2 className='points'>An expression of alert</h2>
 Do not participate in watchword stuffing, which is the demonstration of filling your substance with such countless catchphrases that it becomes hard to peruse. Not exclusively will this bother your blog supporters, it will likewise get you punished by Google. A few decisively positioned catchphrases will get the job done.



 <h2 className='points'>Improve your pictures</h2>
At whatever point you transfer a photograph to your blog, make certain to remember catchphrases for the document name and finish up the other text field with a concise, watchword rich depiction of the photograph.



<h2 className='points'>Reference others with joins</h2>
At the point when you notice one more blogger or article in your blog entry, incorporate a connection to the data you are referring to. In addition to the fact that it is great contributing to a blog decorum, however you may likewise luck out and get a connection back. Quality connections are an important product for any site hoping to rank higher in web search tool results pages.



<h2 className='points'>Offer perusers the chance to prefer your blog</h2>
Incorporate unmistakably positioned RSS or Feed Subscription Buttons and proposition watchers the capacity to prefer your posts through email whenever the situation allows. This permits your blog devotees to have moment warning of your most recent presents without having on intermittently look at your website for new substance.



<h3 className='subheading'>Utilize online media to widen the span of your blog entries</h3>
As an independent company, you might be using Facebook, Twitter, Google+, or other online media locales to make associations with potential and current clients. Why not advance your blog content on these destinations for much more web openness? Free projects like Hootsuite make it simple to present connections on your most recent blog entry on each of your web-based media destinations with only two or three ticks. You can even timetable your posts early!



By following these basic SEO tips, you can empower higher rankings in SERPS, expanded web traffic, and higher client change rates.


        </p>
      </div>
    </div>
    </>
  );
}
