import React from "react";
import classnames from "classnames";

import Image from "next/image";

import { Dots } from "../Dots";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container, Item } from "../Flex";

import styles from "./hero.module.css";

import {HeroProps} from './hero.types'
import image from "./assets/cover-1.jpg";
import texts from "./text.json";

const OPT_IN_URL = "https://forms.gle/CgNbhLSbxbahZK8BA";

export const Hero: React.FC<HeroProps> = ({className}: HeroProps) => {
	const dotSize = 4;
	const dotSpacing = 15;

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
          text={texts.heroButton}
          className={styles.button}
        />
        
        <Dots
          height=""
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
        <Image
          fill={true}
          src={image}
          className={styles.imageComponent}
          alt={texts.imgAlt}
        />
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