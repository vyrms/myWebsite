import Head from 'next/head';
import React, { useState } from "react";
import styles from './index.module.css';


function Character(onClick) {
  return (
    <div className={styles.character}></div>
  );
}

function Wall(onClick) {
  return (
    <div className={styles.block}></div>
  );
}

function jump() {
  return (
    <div className={styles.animate}></div>
  );
}

function GameContainer() {
  return (
    <div className={styles["game-container"]} onClick={jump}>
      <Character></Character>
      <Wall></Wall>
    </div>
  );
}

export default function Game () {
  console.log("JumpyStar.js loaded");

  return (
  	<>
  	  <Head>
        <title>JumpyStar - Hosei Nakajima</title>
      </Head>
      <GameContainer />
    </>
  )
}