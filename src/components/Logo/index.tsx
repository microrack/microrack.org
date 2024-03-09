import React from "react";

import Image from "next/image";

import { Text } from "../Text";

import logo from "./assets/logo.png";
import styles from "./logo.module.css";
import { LogoProps } from "./logo.types";

/**
 * Logo component
 */
export const Logo = (props: LogoProps) => {
	return (
		<div className={styles.logo}>
			<Image src={logo} height="20" alt="mR" />
			<Text as="span" uppercase size="xl">MicroRack ™</Text>
		</div>
	);
}