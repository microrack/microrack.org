import React from "react";

import { Text } from "@/components/Text";
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
      {/* <Text uppercase size="xl" weight="bold" className={styles.slogan}>
          The sound is&nbsp;all&nbsp;yours
        </Text> */}
        <Hero className={styles.hero}/>
        
        <Benefits className={styles.benefits}/>
      </main>
      <Footer />
    </div>
  );
}
