import Head from 'next/head';
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Publications({ allPostsData }){
  console.log("publications.js loaded");

  return (
    <>
      <Head>
        <title>Blog - Hosei Nakajima</title>
      </Head>
      <div className="mx-10">
        <h1 className="mt-5 mb-3 text-3xl font-semibold tracking-tight text-center">Blog</h1>

        {/* TODO add descriptions */}
        <div className="py-3 text-lg">
          <p>I'll be adding some blogs here.</p>
          <p></p>
        </div>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Table of Contents</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        </section>
      </div>
    </>
  );
}
