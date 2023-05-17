import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar.js';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  console.log("layout.js loaded");
  return (
    <>
      <Head>
        <link rel="icon" href="/smooth_yoda.ico" />
        <meta
          name="description"
          content="You like my smooth yoda?"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}