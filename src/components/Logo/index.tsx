import React from "react";
import classnames from "classnames";

import Link from "next/link";
import Image from "next/image";

import { Text } from "../Text";

import logo from "./assets/logo.png";
import styles from "./logo.module.css";
import { LogoProps } from "./logo.types";

/**
 * Logo component
 */
export const Logo = (props: LogoProps) => {
	const className = classnames(styles.logo, props.className);

	return (
		<Link href="/" className={className}>
			<Image src={logo} height="20" alt="mR" />
			<Text as="span" uppercase size="xl">MicroRack™</Text>
		</Link>
	);
}