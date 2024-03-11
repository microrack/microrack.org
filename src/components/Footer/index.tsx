import React from 'react';

import { Menu } from '../Menu';
import { Copyright } from '../Copyright';

import styles from "./footer.module.css";
import items from './footer.menu-items.json';

/**
 * Footer component
 */
export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Copyright />
      <Menu items={items}/>
    </footer>
  );
};

