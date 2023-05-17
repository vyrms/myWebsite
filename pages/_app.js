// `pages/_app.js`
import '../styles/global.css';
import Layout from '../components/layout.js';
import Footer from '../components/footer.js';

export default function MyApp({ Component, pageProps  }) {
  console.log("_app.js loaded");
  return (
    <>
      <Layout />
      <main><Component {...pageProps} /></main>
      <Footer />
    </>
  );
}