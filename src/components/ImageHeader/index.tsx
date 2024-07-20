
import React from "react";
import classNames from "classnames";

import Image from "next/image";

import {Props} from "./image-header.types";
import styles from "./image-header.module.css";

export const ImageHeader: React.FC<Props> = ({className, image, alt, id}) => {
	const containerClassName = classNames(styles.container, className);
	return (
		<section className={containerClassName} id={id}>
			<Image src={image} alt={alt}/>
		</section>
	);
}
