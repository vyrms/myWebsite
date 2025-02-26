import Head from 'next/head';
import styles from './resume.module.css'


const url = "https://docs.google.com/document/d/e/2PACX-1vSpPvVE5-U18xmVVx8CNSu6RzS5uGv1hq5HElUI8mPt_s5cFYt1XWSr6uRXAAFO3hrmC7W0J5KZcrqh/pub?embedded=true"


export default function Resume () {
  console.log("resume.js loaded");

  return (
  	<>
  	  <Head>
        <title>Resume - Hosei Nakajima</title>
      </Head>
      <div className={styles.mainContainer}>
        <h1 className="mt-5 mb-0 text-3xl font-semibold tracking-tight text-center">Resume</h1>
        <div className={styles.googleDocsIframeContainer}>
          <iframe src={url} className={styles.googleDocsIframe}></iframe>
        </div>
      </div>
    </>
  )
}