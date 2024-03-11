import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

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
      href={href}
      className={classnames(classNames, styles.link)}
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
      {text}
    </button>
  );
}
