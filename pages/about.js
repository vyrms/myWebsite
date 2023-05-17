import Head from 'next/head';


export default function About () {
  console.log("about.js loaded");
  return (
  	<>
  	  <Head>
        <title>Hosei Nakajima - About</title>
      </Head>
  	  <div>This is about page</div>
    </>
  )
}