import React from "react";


import { FAQ } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { Separator } from "@/components/Separator";

import styles from "./page.module.css";
import faqData from "./faq.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Hero className={styles.hero}/>
        <Benefits className={styles.benefits}/>
        <Separator type="triangle" className={styles.separator} />
        <About className={styles.about} />
        {/* <Timeline className={styles.timeline}/> */}
        <Separator type="saw" className={styles.separator}/>
        <FAQ className={styles.faq} faqData={faqData}  />
      </main>
      <Footer />
    </div>
  );
}
