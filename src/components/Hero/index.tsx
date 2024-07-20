'use client'

import React from "react";
import classnames from "classnames";

import Image from "next/image";

import { Dots } from "../Dots";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container, Item } from "../Flex";
import { Slider } from "@/components/Slider";

import styles from "./hero.module.css";

import {HeroProps} from './hero.types'
import img1 from "./assets/cover-1.jpg";
import img2 from "./assets/hero.jpg";
import img0 from "./assets/hero.gif";
import texts from "./text.json";

const OPT_IN_URL = "https://forms.gle/CgNbhLSbxbahZK8BA";
const INST_URL = "https://instagram.com/microrack.synth";

export const Hero: React.FC<HeroProps> = ({className}: HeroProps) => {
	const dotSize = 4;
	const dotSpacing = 15;

  const images = [
    <Image
      key='0'
      fill={true}
      src={img0}
      className={styles.imageComponent}
      alt={texts.imgAlt}
    />,
    <Image
      key='1'
      fill={true}
      src={img1}
      className={styles.imageComponent}
      alt={texts.imgAlt}
    />,
    <Image
      key='2'
      fill={true}
      src={img2}
      className={styles.imageComponent}
      alt={texts.imgAlt}
    />
  ];

	return (
    <Container className={
      classnames(styles.container, className)
    }>
      <Item
        columns={1}
        hideOnMobile
        hideOnTablet
      >
        <Dots
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
      </Item>
      <Item
        columns={2}
        hideOnMobile
      >
        <Dots
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
      </Item>
      <Item
        columns={3}
        className={styles.content}
      >
        <Dots
          height=""
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
        <Text
          as="h1"
          size="xl"
          weight="bold"
          className={styles.description}
        >
          {texts.heroTitle}
        </Text>
        <Text
          size="m"
          className={styles.description}
        >
          {texts.heroDescription}
        </Text>
        <Button
          variant="action"
          href={OPT_IN_URL}
          text={texts.listButton}
          className={styles.button}
        />
        <Button
          variant="promo"
          href={INST_URL}
          text={texts.instButton}
          className={styles.button}
        />
        <Dots
          height="10px"
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
      </Item>
      <Item
        columns={1}
        hideOnMobile
      >
        <Dots
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
      </Item>
      <Item
        columns={4}
        className={styles.imageItem}
      >
        <Slider children={images} />
        {/* <Dots dotSize={dotSize} dotSpacing={dotSpacing} /> */}
      </Item>
      <Item columns={1}>
        <Dots
          dotSize={dotSize}
          dotSpacing={dotSpacing}
        />
      </Item>
    </Container>
	);
}