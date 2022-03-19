import React from 'react'
import Head from "next/head";
import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';


const Download = () => {

  

    useEffect(() => {
        const downloadBtn = document.querySelector(".download-btn");
        const countdown = document.querySelector(".countdown");
        const pleaseWaitText = document.querySelector(".pleaseWait-text");
        const manualDownloadText = document.querySelector(".manualDownload-text");
        const manualDownloadLink = document.querySelector(".manualDownload-link");
        var timeLeft = 30;
      
        downloadBtn.addEventListener("click", () => {
          downloadBtn.style.display = "none";
          countdown.innerHTML = "Your download will start in <span>" + timeLeft + "</span> seconds."  //for quick start of countdown
      
          var downloadTimer = setInterval(function timeCount() {
            timeLeft -= 1;
            countdown.innerHTML = "Your download will start in <span>" + timeLeft + "</span> seconds.";
      
            if(timeLeft <= 0){
              clearInterval(downloadTimer);
              pleaseWaitText.style.display = "block";
              let download_href = ""; //enter the downlodable file link here
              window.location.href = download_href;
              manualDownloadLink.href = download_href;
      
              setTimeout(() => {
                pleaseWaitText.style.display = "none";
              manualDownloadText.style.display = "block"
              }, 4000);
            }
          }, 1000);
        });
    }, [])
    

  return (
    <>
<Head>
  
</Head>

  <div className="download-container">
    <Link href="#" className="download-btn">Download Now</Link>
    <div className="countdown"></div>
    <div className="pleaseWait-text">Please Wait...</div>
    
  </div>
  <Script src="https://kit.fontawesome.com/e48d166edc.js" crossorigin="anonymous" />
    </>
  )
}

export default Download