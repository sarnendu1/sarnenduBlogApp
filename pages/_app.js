import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script';
import Head from 'next/head';

/* <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KCR7Z3Z830"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KCR7Z3Z830');
</script>
 */
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="msvalidate.01" content="39AD84BB96D73990686FDB08CC51BE5A" />
  </Head>
  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-KCR7Z3Z830`} />
  <Script strategy="lazyOnload" id='my-script'>
  {
    `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KCR7Z3Z830');`
  }
  
  </Script>  


 
  <Component {...pageProps} />
  
<Script src="http://resources.infolinks.com/js/infolinks_main.js" />
<Script src='//pl17130463.safestgatetocontent.com/1f/33/de/1f33de69dc7f152dc60061b2fedffc3a.js' />

  </>
  )
}

export default MyApp
