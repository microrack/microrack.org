import React from "react";
import classnames from "classnames";

import Image from "next/image";

import { Dots } from "../Dots";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container, Item } from "../Flex";

import styles from "./hero.module.css";

import {HeroProps} from './hero.types'
import image from "./assets/hero.jpg";

export const Hero: React.FC<HeroProps> = ({className}: HeroProps) => {
	const dotSize = 4;
	const dotSpacing = 15;

	return (
		<section className={classnames(styles.hero, className)}>
			<Container>
          <Item columns={1} hideOnMobile>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>
          <Item columns={2} hideOnMobile>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>




          <Item columns={3} className={styles.content}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} height=""/>
            {/* <Text uppercase size="xxxl" weight="bold">
              MicroRack
            </Text> */}
            <Text size="s" className={styles.text}>
              Accessible modular analog synthesizer.<br /> <br />Combine dozens of modules, play unique instruments, experiment and have fun!
            </Text>
            <Text size="m" uppercase weight="bold" className={styles.text}>
              The sound is all yours
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
          <Item columns={4} className={styles.image}>
            <Image src={image} alt="MicroRack" height="400" width="400"/>
            {/* <Dots dotSize={dotSize} dotSpacing={dotSpacing} /> */}
          </Item>
          <Item columns={1}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>
        </Container>
		</section>
	);
}