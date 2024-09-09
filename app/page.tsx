"use client";

import React from "react";
import styles from "./page.module.css";
import Chat from "./examples/basic-chat/page";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        <Chat />
      </div>
    </main>
  );
};

export default Home;
