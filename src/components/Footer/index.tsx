import React from 'react';

import { Menu } from '@/components/Menu';
import { Separator } from '@/components/Separator';
import { Copyright } from '@/components/Copyright';

import styles from "./footer.module.css";
import items from './footer.menu-items.json';

/**
 * Footer component
 */
export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Separator type="square" />
      <div className={styles.container}>
        <Copyright />
        <Menu className={styles.menu} items={items} headingColor="purple" wide />
      </div>
    </footer>
  );
};

