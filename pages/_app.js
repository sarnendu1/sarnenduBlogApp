import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script';

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
  <Script strategy="lazyOnload" id='my-script'>
      {`var infolinks_pid = 3361651;
var infolinks_wsid = 0;`}
</Script>
<Script src="http://resources.infolinks.com/js/infolinks_main.js" />
  </>
  )
}

export default MyApp
