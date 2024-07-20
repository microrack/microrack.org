
import React from "react";

import { Text } from "../Text";

import {Props} from "./about.types";
import styles from "./about.module.css";

export const About: React.FC<Props> = ({className}) => {
	return (
		<section id="about" className={className}>
			<Text uppercase size="l" weight="bold" className={styles.title}>
				About
			</Text>
			<Text size="xs" className={styles.text}>
			MICRORACK is <b>the most accessible</b> modular synthesizer placed right on the breadboard. It is offering an <b>impressive sound variability</b> while being  affordable and easy to learn.
			</Text>
			<Text size="xs" className={styles.text}>
			MICRORACK is <b>super portable</b>. Its compact design, DC and <b>USB-C power</b> compatibility mean you can easily pack it in a bag and <b>take it anywhere</b>. Use a power bank to enjoy <b>modular synthesis on the go</b> - it`&apos;s like having a <b>portable rave!</b>. 
			</Text>
			<Text size="xs" className={styles.text}>
				We want to make modular synthesis accessible and <b>not expensive</b>, while promoting education in sound and electronics. Our goal is to <b>lower the learning curve</b> of synthesis for newcomers by providing tutorials and <b>step-by-step guides</b>. 
			</Text>
			<Text size="xs" className={styles.text}>
				To further expand MICRORACK within the community, we plan to <b>open-source our platform and modules</b> shortly after our crowdfunding campaign.
			</Text>
		</section>
	);
}
