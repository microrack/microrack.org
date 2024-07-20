'use client';

import classnames from 'classnames';
import React, { useState } from 'react';

import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { Separator } from '@/components/Separator';

import { HeaderProps } from "./header.types";
import styles from "./header.module.css";
import items from './header.menu-items.json';

export const Header = ({ className }: HeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const classNames = classnames(styles.header, className);
  const burgerIcon = isMenuOpen ? '✖' : '☰';

  return (
    <header className={classNames}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.burgerIcon} onClick={toggleMenu}>
          {burgerIcon}
        </div>
        <Menu uppercase items={items} isOpen={isMenuOpen} />
      </div>
      <Separator type="sin" />
    </header>
  );
};
