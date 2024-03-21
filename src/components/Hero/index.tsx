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

export const Hero: React.FC<HeroProps> = ({className}: HeroProps) => {
	const dotSize = 4;
	const dotSpacing = 15;

	return (
    <Container className={classnames(styles.container, className)}>
      <Item columns={1} hideOnMobile hideOnTablet>
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
      </Item>
      <Item columns={2} hideOnMobile>
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
      </Item>


      <Item columns={3} className={styles.content}>
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} height=""/>
        <Text as="h1" weight="bold" size="xl" className={styles.description}>
          Most accessible analog modular synthesizer
        </Text>
        <Text size="m" className={styles.description}>
          Combine dozens of modules, play unique instruments, experiment and have fun!
        </Text>
        <Button
          className={styles.button}
          href="https://forms.gle/CgNbhLSbxbahZK8BA"
          variant="action"
          text="Join the waitlist"
        />
        
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} height=""/>
      </Item>


      <Item columns={1} hideOnMobile>
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
      </Item>
      <Item columns={4} className={styles.imageItem}>
        <Image src={image} alt="MicroRack" fill={true} className={styles.imageComponent} />
        {/* <Dots dotSize={dotSize} dotSpacing={dotSpacing} /> */}
      </Item>
      <Item columns={1}>
        <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
      </Item>
    </Container>
	);
}