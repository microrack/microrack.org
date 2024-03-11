import React from 'react';
import classnames from 'classnames';

import { Logo } from '../Logo';
import { Menu } from '../Menu';

import {HeaderProps} from "./header.types";
import styles from "./header.module.css";
import items from './header.menu-items.json';

/**
 * Header component
 */
export const Header = ({className}: HeaderProps): JSX.Element => {
  const classNames = classnames(styles.header, className);

  return (
    <header className={classNames}>
      <Logo />
      <Menu uppercase items={items}/>
    </header>
  );
};

