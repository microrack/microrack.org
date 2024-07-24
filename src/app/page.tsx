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
import { InstagramEmbed } from "@/components/InstagramEmbed";

import styles from "./page.module.css";

import img0 from "./assets/asortment3.jpg";
import img1 from "./assets/cover-1.jpg";
import img2 from "./assets/diy2.jpg";
import cover from "./assets/asortment.jpg";

import texts from "./page.json";

const FORM_URL = "https://forms.gle/CgNbhLSbxbahZK8BA";
const INST_URL = "https://instagram.com/microrack.synth";
const EMBED_URL = "https://www.instagram.com/reel/C53Ta0dNKvy/";
const EMBED_URL2 = "https://www.instagram.com/reel/C9pl0-CtjhV/";

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
        <About className={styles.about} cover={cover}>
          <Slider>
            <InstagramEmbed url={EMBED_URL} />
            <InstagramEmbed url={EMBED_URL2} />
          </Slider>
        </About>
        {/* <Timeline className={styles.timeline}/> */}
        <Separator type="saw" className={styles.separator}/>
        <FAQ className={styles.faq} faqData={texts.faq} />
      </main>
      <Footer />
      <script src="/faq-enhance.js" async></script>
    </div>
  );
}
