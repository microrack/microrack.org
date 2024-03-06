import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './button.types';
import styles from "./button.module.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonClasses = classNames(
    styles['storybook-button'], 
    styles[`storybook-button--${size}`], 
    mode ? styles[mode] : ''
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
