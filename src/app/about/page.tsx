import React from "react";

import { FAQ } from "@/components/Faq";
import { Text } from "@/components/Text";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import styles from "./page.module.css";
import faqData from "./faq.json";

export default function About() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        
        <section className={styles.section}>
          <Text uppercase size="xl" weight="bold" className={styles.sectionTitle}>
            About
          </Text>
          <Text size="s" className={styles.sectionContent}>
          MICRORACK is <b>the most accessible</b> modular synthesizer right on the breadboard. It is offering an <b>impressive sound variability</b> while being <b>super portable</b>, easy to learn, and affordable.
          </Text>
          <Text size="s" className={styles.sectionContent}>
            We want to make modular synthesis accessible and <b>not expensive</b>, while promoting education in sound and electronics. Our goal is to <b>lower the learning curve</b> of synthesis for newcomers by providing tutorials and <b>step-by-step guides</b>. 
          </Text>
          <Text size="s" className={styles.sectionContent}>
            To further expand MICRORACK within the community, we plan to <b>open-source our platform and modules</b> shortly after our crowdfunding campaign.
          </Text>
        </section>

        <section className={styles.section}>
          <Text uppercase size="l" weight="bold" className={styles.sectionTitle}>
            Timeline & History
          </Text>
          <ul className={styles.timeline}>
            <li><Text size="s" className={styles.timelinePoint}>Late 2024: First modules and guides available to the public</Text></li>
            <li><Text size="s" className={styles.timelinePoint}><b>Summer 2024: Official launch and Kickstarter campaign</b></Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q3 2024: New design concepts, forum and crowdfunding preparation</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q2 2024: Two more redesigns, successful debut at SuperBooth 2024</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q1 2024: New prototypes, first public feedback</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q4 2023: Complete redesign, breadboard introduced</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>...</Text></li>
            <li><Text size="s" className={styles.timelinePoint}><em>A lot of thought</em></Text></li>
            <li><Text size="s" className={styles.timelinePoint}>...</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q2 2019: Second version prototype</Text></li>
            <li><Text size="s" className={styles.timelinePoint}>Q1 2019: Idea and first modules prototypes (VCO, EG, VCA)</Text></li>
          </ul>
        </section>
        <section className={styles.faqSection}>
          <Text uppercase size="xl" weight="bold" className={styles.sectionTitle}>
            FAQ
          </Text>
          <FAQ faqData={faqData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}