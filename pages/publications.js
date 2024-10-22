import Head from 'next/head';
import Link from "next/link";
import styles from './publications.module.css'

export default function Publications(){
  console.log("publications.js loaded");

  return (
    <>
      <Head>
        <title>Publications - Hosei Nakajima</title>
      </Head>
      <div className="mx-10">
        <h1 className="mt-5 mb-3 text-3xl font-semibold tracking-tight text-center">Publications</h1>

        <div className={styles.publicationList}>
          <div className={styles.publicationContainer}>
            <Link href="https://doi.org/10.1016/j.ygeno.2021.04.020" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>Loss of coordinated expression between ribosomal and mitochondrial genes revealed by comprehensive characterization of a large family with a rare Mendelian disorder</p>
                <p className={styles.publicationAuthors}>Brendan Panici, Hosei Nakajima, Colleen M. Carlston, Hakan Ozadam, Can Cenik, Elif Sarinay Cenik</p>
                <p className={styles.publicationJournal}>Genomics. 2021 Apr;:.doi: https://doi.org/10.1016/j.ygeno.2021.04.020</p>
              </div>
            </Link>
          </div>
          <div className={styles.publicationContainer}>
            <Link href="https://iovs.arvojournals.org/article.aspx?articleid=2779820" style={{ textDecoration: 'none' }}>
              <div className={styles.publicationInfo}>
                <p className={styles.publicationTitle}>Artificial neural network-based classification of Age-related Macular Degeneration using gene expression profiles.</p>
                <p className={styles.publicationAuthors}>Rinki Ratnapriya, Hosei Nakajima, Daniel Christl</p>
                <p className={styles.publicationJournal}>Invest. Ophthalmol. Vis. Sci. 2022 Jun;:.doi:</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
