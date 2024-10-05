'use client'

import React from "react";
import classnames from "classnames";

import { Dots } from "../Dots";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container, Item } from "../Flex";

import {HeroProps} from './hero.types'

import styles from "./hero.module.css";

export const Hero: React.FC<HeroProps> = ({className, children, formUrl, texts}: HeroProps) => {
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
          variant="link"
          href={formUrl}
          text={texts.formButton}
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
        {children}
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