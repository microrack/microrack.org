import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { Text } from '@/components/Text';

import { ButtonProps } from './button.types';
import styles from "./button.module.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className,
  variant = 'secondary',
  href,
  text,
  ...props
}: ButtonProps) => {
  const classNames = classnames(styles.button, styles[variant], className);

  return href
    ? (
      <Link
        className={classnames(variant === 'link' && styles.link, classNames)}
        href={href}
        {...props}
      >
        {text}
      </Link>
    )
    : (
      <button
        type="button"
        className={classNames}
        {...props}
      >
        <Text className={styles.text} size="s">{text}</Text>
      </button>
    );
}
