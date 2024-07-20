'use client';

import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Text } from '../Text';
import { MenuProps, MenuItemProps } from './menu.types';
import styles from "./menu.module.css";

export const Menu = ({
  className,
  headingColor = "primary",
  uppercase = false,
  wide = false,
  items,
  isOpen
}: MenuProps): JSX.Element => {
  const menuRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const menuElement = menuRef.current;
    const contentElement = contentRef.current;
    if (!menuElement || !contentElement) return;

    const checkOverflow = () => {
      const isOverflowing = contentElement.scrollWidth > menuElement.clientWidth;
      setShouldAnimate(isOverflowing);
      
      if (isOverflowing) {
        // Clone items for seamless loop
        const clone = contentElement.cloneNode(true);
        menuElement.appendChild(clone);
      } else {
        // Remove clone if exists
        const clone = menuElement.querySelector(`.${styles.menuContent}:nth-child(2)`);
        if (clone) menuElement.removeChild(clone);
      }
    };

    const stopAnimation = () => {
      menuElement.style.animationPlayState = 'paused';
    };

    if (isOpen) {
      checkOverflow();
      menuElement.style.animationPlayState = 'running';
      menuElement.addEventListener('touchstart', stopAnimation);
      menuElement.addEventListener('mouseover', stopAnimation);
      menuElement.addEventListener('scroll', stopAnimation);
    }

    window.addEventListener('resize', checkOverflow);

    return () => {
      if (menuElement) {
        menuElement.removeEventListener('touchstart', stopAnimation);
        menuElement.removeEventListener('mouseover', stopAnimation);
        menuElement.removeEventListener('scroll', stopAnimation);
      }
      window.removeEventListener('resize', checkOverflow);
    };
  }, [isOpen, items]);

  const classNames = classnames(
    className, 
    styles.menu, 
    wide ? styles.wide : '',
    isOpen ? styles.menuOpen : '',
    shouldAnimate ? styles.animate : ''
  );

  return (
    <nav ref={menuRef} className={classNames}>
      <div ref={contentRef} className={styles.menuContent}>
        {items.map((item: MenuItemProps, index) => {
          const itemClassNames = classnames(styles.menuItem, {
            [styles.hideOnMobile]: item.hideOnMobile
          });
  
          return (
            <div key={index} className={itemClassNames}>
              <Link
                href={item.href}
                title={item.title}
                target={item.external ? '_blank' : '_self'}
              >
                <Text size='s' as="span" uppercase={uppercase} color={headingColor}>
                  {item.title}
                </Text>
              </Link>
              {item.subtitle && (
                <Text className={styles.subtitle} size='xxs' as="span" color='secondary'>
                  {item.subtitle}
                </Text>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};