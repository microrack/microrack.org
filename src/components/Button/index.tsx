import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { ButtonProps } from './button.types';
import styles from "./button.module.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'secondary',
  href,
  text,
  ...props
}: ButtonProps) => {
  const className = classNames(styles.button, styles[variant]);

  return href
  ? (
    <Link
      href={href}
      className={classNames(className, styles.link)}
      {...props}
    >
      {text}
    </Link>
  )
  : (
    <button
      type="button"
      className={className}
      {...props}
    >
      {text}
    </button>
  );
}
