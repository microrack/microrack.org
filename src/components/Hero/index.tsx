import React from "react";
import Image from "next/image";

import { Dots } from "../Dots";
import { Text } from "../Text";
import { Button } from "../Button";
import { Container, Item } from "../Flex";

import styles from "./hero.module.css";

import image from "./assets/hero.jpg";

export const Hero: React.FC = () => {
	const dotSize = 4;
	const dotSpacing = 15;

	return (
		<section className={styles.hero}>
			<Container>
          <Item columns={1}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>
          <Item columns={2}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>
          <Item columns={3}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} height="00px"/>
            <Text size="xxxl" weight="bold" uppercase className={styles.text}>
              MicroRack™
            </Text>
            <Text size="xxl" weight="bold" uppercase className={styles.text}>
              The sound is all yours
            </Text>
            <Button
              className={styles.button}
              href="https://forms.gle/CgNbhLSbxbahZK8BA"
              variant="action"
              text="Join the waitlist"
            />
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} height="100px"/>
          </Item>
          <Item columns={1}>
            <Dots dotSize={dotSize} dotSpacing={dotSpacing} />
          </Item>
          <Item columns={4}>
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