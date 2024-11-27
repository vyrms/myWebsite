// `pages/_app.js`
import '../styles/global.css';
import Layout from '../components/layout.js';
import Footer from '../components/footer.js';
import Head from 'next/head.js';

export default function MyApp({ Component, pageProps  }) {
  console.log("_app.js loaded");
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9642727049332066" crossorigin="anonymous"></script>
      </Head>
      <Layout />
      <main><Component {...pageProps} /></main>
      <Footer />
    </>
  );
}