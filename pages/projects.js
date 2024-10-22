import Head from 'next/head';
import Link from "next/link";
import styles from './projects.module.css'


export default function Projects () {
  console.log("projects.js loaded");

  return (
  	<>
  	  <Head>
        <title>Projects - Hosei Nakajima</title>
      </Head>
      <div className="mx-10">
        <h1 className="mt-5 mb-0 text-3xl font-semibold tracking-tight text-center">Personal Projects</h1>

        <div className={styles.publicationList}>
          <div className={styles.publicationContainer}>
            <Link href="https://github.com/vyrms/myWebsite" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>My Website</p>
                <p className={styles.publicationAuthors}>This is the source code for this website.</p>
                <p className={styles.publicationJournal}>Made with NextJs</p>
              </div>
            </Link>
          </div>
          <div className={styles.publicationContainer}>
            <Link href="https://sherronthomas.itch.io/hotpot-team-12-public" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>Hotpot</p>
                <p className={styles.publicationAuthors}>A 2D side scrolling platformer game. Escape the hot pot and save the world!</p>
                <p className={styles.publicationJournal}>Made with Javascript and Phaser</p>
              </div>
            </Link>
          </div>
          <div className={styles.publicationContainer}>
            <Link href="https://github.com/vyrms/Discord_bot1" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>3000IQ Discord Bot</p>
                <p className={styles.publicationAuthors}>A discord bot that can learn conversations, pickup and read haiku, wiki search/ suggest, and many other things.</p>
                <p className={styles.publicationJournal}>Made with Python</p>
              </div>
            </Link>
          </div>
          <div className={styles.publicationContainer}>
            <Link href="https://github.com/vyrms/loto_analysis" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>Loto6/ 7 Analysis</p>
                <p className={styles.publicationAuthors}>Analyzed Loto data to take a shortcut to becoming a millionaire.</p>
                <p className={styles.publicationJournal}>Analyzed with R and Python</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}