import React from 'react';
import classnames from 'classnames';

import type { ContainerProps, ItemProps } from './flex.types';
import styles from './flex.module.css';

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export const Item: React.FC<ItemProps> = ({ children, columns = 12, hideOnMobile = false }) => {
	const className = classnames(styles.item, hideOnMobile ? styles.hide : '');

	return (
		<div
			className={className}
			style={{ '--cols': columns } as React.CSSProperties}
		>
			{children}
		</div>
	);
};