import React from 'react';
import classnames from 'classnames';

import type { ContainerProps, ItemProps } from './flex.types';
import styles from './flex.module.css';

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
	const classNames = classnames(styles.container, className);

	return (
		<section className={classNames}>{children}</section>
	);
}

export const Item: React.FC<ItemProps> = ({ className, children, columns = 12, hideOnMobile = false, hideOnTablet = false }) => {
	const classNames = classnames(
		className,
		styles.item,
		hideOnMobile ? styles.hideOnMobile : '',
		hideOnTablet ? styles.hideOnTablet : ''
	);

	return (
		<div
			className={classNames}
			style={{ '--cols': columns } as React.CSSProperties}
		>
			{children}
		</div>
	);
};