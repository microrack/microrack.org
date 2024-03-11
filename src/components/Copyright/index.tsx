import React from "react";
import classnames from "classnames";

import { Text } from "../Text";

import styles from "./copyright.module.css";
import { CopyrightProps } from "./copyright.types";

/**
 * Copyright component with name and year
 */
export const Copyright = (props: CopyrightProps) => {
	const className = classnames(styles.copyright, props.className);
	const currentYear = (new Date().getFullYear());

	return (
		<div className={className}>
			<Text as="span" uppercase size="m">©</Text>
			<Text as="span" uppercase size="m">MicroRack</Text>
			<>
				<Text as="span" uppercase size="m">2019&nbsp;</Text>
				<Text as="span" uppercase size="m">&ndash;&nbsp;{currentYear}</Text>
			</>
		</div>
	);
}