import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const disclaimer = () => {
  return (
    <>
    <NextSeo
      title="Disclaimer"
      description="Welcome to the disclaimer page"
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        }
       
      ]}
    />
 <Head>
    <meta name="google-site-verification" content="qLTRg4l6MikI9dOSvLrarEtEhi5qI2IVrmsLmGr_zuk" />
    <meta name="keywords" content="tech,seo" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    </Head>
   <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Container>
  <img src="/logo.ico" alt="logo" className='favicon' />
  <Link passHref href="/"><span className='navbrand'>Purple Glib</span></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav className='me-auto'>
    <Link passHref  href="/about"><span className="navlink active">About</span></Link>
      <Link passHref href="/contact"><span className="navlink">Contact</span></Link>
      <Link passHref href="/categories/blog"><span className="navlink">Blog</span></Link>
      <Link passHref href="/categories/codes"><span className="navlink">Codes</span></Link>
      <Link passHref href="/categories/youtube"><span className="navlink">Youtube</span></Link>
     {/*  <Search /> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<h1 className='about-heading'>Disclaimer</h1>  
    <hr className='hr' />
    
    <Container className='hero justify-content-center'>


<p>Last updated: 2022-03-10</p>
<p><b>WEBSITE DISCLAIMER</b></p>
<p>The information provided by <b>Purple Glib</b> (“Company”, “we”, “our”, “us”) on <b>https://www.purpleglib.in</b> (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
<p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
<p><b>EXTERNAL LINKS DISCLAIMER</b></p>
<p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
<p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>



<p><b>ERRORS AND OMISSIONS DISCLAIMER</b></p>
<p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Purple Glib is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.</p> <p>In no event will Purple Glib, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>

<p><b>LOGOS AND TRADEMARKS DISCLAIMER</b></p>
<p>All logos and trademarks of third parties referenced on https://www.purpleglib.in are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Purple Glib by such owners.</p>
<p><b>CONTACT US</b></p>
<p>Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: <b>purpleglib@gmail.com</b>.</p>

</Container>
<Footer />
    </>
  )
}

export default disclaimer