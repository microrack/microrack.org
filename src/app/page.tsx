import React from "react";

import Image from "next/image";

import { FAQ } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Slider } from "@/components/Slider";
import { Benefits } from "@/components/Benefits";
// import { Timeline } from "@/components/Timeline";
import { Separator } from "@/components/Separator";

import styles from "./page.module.css";
import faqData from "./faq.json";

import img1 from "@/app/assets/cover-1.jpg";
import img2 from "@/app/assets/hero.jpg";
import img0 from "@/app/assets/hero.gif";
import cover from "@/app/assets/asortment.jpg";

import texts from "./texts.json";

const FORM_URL = "https://forms.gle/CgNbhLSbxbahZK8BA";
const INST_URL = "https://instagram.com/microrack.synth";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Hero className={styles.hero} formUrl={FORM_URL} instUrl={INST_URL} texts={texts}>
          <Slider>
            <Image
              fill={true}
              src={img1}
              className={styles.imageComponent}
              alt={texts.imgAlt}
            />
            <Image
              fill={true}
              src={img0}
              className={styles.imageComponent}
              alt={texts.imgAlt}
            />
            <Image
              fill={true}
              src={img2}
              className={styles.imageComponent}
              alt={texts.imgAlt}
            />
          </Slider>
        </Hero>
        <Benefits className={styles.benefits}/>
        <Separator type="triangle" className={styles.separator} />
        <About className={styles.about} cover={cover} />
        {/* <Timeline className={styles.timeline}/> */}
        <Separator type="saw" className={styles.separator}/>
        <FAQ className={styles.faq} faqData={faqData} />
      </main>
      <Footer />
    </div>
  );
}
