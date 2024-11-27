import Head from 'next/head';
import Link from "next/link";
import styles from './projects.module.css'
import data from './projects.json';

function Project(project_json){
  return (
    <div className={styles.projectContainer}>
      <Link href={project_json.link} style={{ textDecoration: 'none' }}>
        <div className={styles.projectInfo}>
          <p className={styles.projectTitle}>{project_json.title}</p>
          <p className={styles.projectAuthors}>{project_json.description}</p>
          <p className={styles.projectJournal}>{project_json.madewith}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Projects () {
  console.log("projects.js loaded");

  let projects = [];
  for (let i = 0; i < data.length; i++) {
    const project_json = data[i];
    console.log(project_json);

    projects.push(Project(project_json));
  }

  return (
  	<>
  	  <Head>
        <title>Projects - Hosei Nakajima</title>
      </Head>
      <div className="mx-10">
        <h1 className="mt-5 mb-0 text-3xl font-semibold tracking-tight text-center">Personal Projects</h1>

        <div className={styles.projectList}>
          {projects}
        </div>
      </div>
    </>
  )
}