import React from 'react';
import classNames from 'classnames';

import { TextProps } from './text.types';
import styles from "./text.module.css";

/**
 * Common text component
 */
export const Text = ({
  size = 's',
  as: Tag = 'p',
  weight = 'normal',
  color = 'primary',
  uppercase = false,
  children,
  ...props
}: TextProps) => {
  const className = classNames(
    styles.text,
    styles[size],
    styles[color],
    styles[weight],
    props.className,
    {
      [styles.uppercase]: uppercase,
    },
  );

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
