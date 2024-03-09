import React from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';

import styles from "./header.module.css";
import items from './header.menu-items.json';

/**
 * Menu navigation component
 */
export const Header = (): JSX.Element => {
  return (
    <section className={styles.header}>
      <Logo />
      <Menu uppercase items={items}/>
    </section>
  );
};

