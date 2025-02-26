import Head from 'next/head';
import Navbar from '../components/navbar.js';

const name = 'Hosei Nakajima';
export const siteTitle = "Welcome to Hosei Nakajima's Website";

export default function Layout({ children }) {
  console.log("layout.js loaded");
  return (
    <>
      <Head>
        <link rel="icon" href="/profile1.ico" />
        <meta
          name="description"
          content="Welcome to Hosei Nakajima's Website"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}