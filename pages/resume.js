import Head from 'next/head';
import Link from "next/link";

export function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

export default function Resume () {
  console.log("resume.js loaded");
  
  return (
  	<>
  	  <Head>
        <title>Resume - Hosei Nakajima</title>
      </Head>
  	  <div class="">
        <iframe src="https://docs.google.com/document/d/1ZUoj-oRuycaEYWBf08LV3g7XxPAtWNGXI_Z69U4OYR4/edit?usp=sharing" width='100%' height='1200px'></iframe>
      </div>
    </>
  )
}