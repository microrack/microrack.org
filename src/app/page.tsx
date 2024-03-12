import React from "react";

import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Hero className={styles.hero}/>
          <Benefits />
        </div>
      </main>
      <Footer />
    </div>
  );
}
