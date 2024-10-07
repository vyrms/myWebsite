import Head from 'next/head';


export default function About () {
  console.log("about.js loaded");
  return (
  	<>
  	  <Head>
        <title>About - Hosei Nakajima</title>
      </Head>
  	  <div>This is about page</div>
    </>
  )
}