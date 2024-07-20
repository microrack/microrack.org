
import React from "react";

import { Text } from "../Text";

import {Props} from "./timeline.types";
import styles from "./timeline.module.css";

export const Timeline: React.FC<Props> = ({className}) => {
	return (
		<section className={className} id="timeline">
			<Text uppercase size="l" weight="bold" className={styles.title}>
				Timeline
			</Text>
			<ul className={styles.timeline}>
				<li><Text size="s" className={styles.point}>Late 2024: First modules and learning guides available to the public, opening our shop</Text></li>
				<li><Text size="s" className={styles.point}><b>Summer 2024: Official launch and Kickstarter campaign</b></Text></li>
				<li><Text size="s" className={styles.point}>Q3 2024: More improvements, forum and crowdfunding preparation</Text></li>
				<li><Text size="s" className={styles.point}>Q2 2024: More redesigns, beta version and amazing debut at SuperBooth 2024</Text></li>
				<li><Text size="s" className={styles.point}>Q1 2024: Two more prototypes, first public feedback</Text></li>
				<li><Text size="s" className={styles.point}>Q4 2023: Complete platform redesign, breadboard introduced</Text></li>
				<li><Text size="s" className={styles.point}>...</Text></li>
				<li><Text size="s" className={styles.point}><em>A lot of thought and changes</em></Text></li>
				<li><Text size="s" className={styles.point}>...</Text></li>
				<li><Text size="s" className={styles.point}>Q2 2019: Second prototype</Text></li>
				<li><Text size="s" className={styles.point}>Q1 2019: Idea and first modules prototypes (VCO, EG, VCA)</Text></li>
			</ul>
		</section>
	);
}
