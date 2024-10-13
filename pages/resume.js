import Head from 'next/head';
import styles from './resume.module.css'


const url = "https://docs.google.com/document/d/e/2PACX-1vRLih-9USPR7JFku8Qzu7Ef_G76ihRag8zWMR_PhW9682kpuy21ZUcpBayxDKtmjxqrCTg8CV7CKWQn/pub?embedded=true"


export default function Resume () {
  console.log("resume.js loaded");

  return (
  	<>
  	  <Head>
        <title>Resume - Hosei Nakajima</title>
      </Head>
  	  <div className={styles.googleDocsIframeContainer}>
        <iframe src={url} className={styles.googleDocsIframe}></iframe>
      </div>
    </>
  )
}