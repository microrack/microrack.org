import React from "react";
import Image from "next-image-export-optimizer";
import { FAQ } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Kits } from "@/components/Kits";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Separator } from "@/components/Separator";
import { InstagramEmbed } from "@/components/InstagramEmbed";

import styles from "./page.module.css";

import img1 from "./assets/cover-1.jpg";
import cover from "./assets/asortment.jpg";

import texts from "./page.json";
import { KitsData } from "@/components/Kits/kits.types";

const FORM_URL = "https://forms.gle/CgNbhLSbxbahZK8BA";
const EMBED_URL = "https://www.instagram.com/reel/C53Ta0dNKvy/";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Hero className={styles.hero} formUrl={FORM_URL} texts={texts}>
          <Image
            fill={true}
            src={img1}
            className={styles.imageComponent}
            alt={texts.imgAlt}
            objectFit="cover"
          />
          {/* <Slider>
            
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
          </Slider> */}
        </Hero>
        <Benefits className={styles.benefits}/>
        <Separator type="saw" className={styles.separator}/>
        <Kits className={styles.kits} kitsData={texts.kits as KitsData} />
        <Separator type="triangle" className={styles.separator} />
        <About className={styles.about} cover={cover}>
          <InstagramEmbed url={EMBED_URL} />
        </About>
        <Separator type="triangle" className={styles.separator}/>
        <FAQ className={styles.faq} faqData={texts.faq} />
      </main>
      <Footer />
      <script src="/enhance.js" async></script>
    </div>
  );
}