import React from 'react';
import classnames from 'classnames';

import Link from 'next/link';

import { Text } from '../Text';

import { MenuProps, MenuItemProps } from './menu.types';
import styles from "./menu.module.css";

/**
 * Menu navigation component
 */
export const Menu = ({
  uppercase = false,
  wide = false,
  items
}: MenuProps): JSX.Element => {
  const classNames = classnames(styles.menu, wide ? styles.wide : '');
  

  return (
    <nav className={classNames}>
      {
        items.map((item: MenuItemProps, index) => {
          const itemClassNames = classnames(styles.menuItem, item.hideOnMobile ? styles.hide : '');
      
          return (
            <div key={index} className={itemClassNames}>
              <Link
                href={item.href}
                title={item.title}
                target={item.external ? '_blank' : '_self'}
              >
                <Text size='s' as="span" uppercase={uppercase}>
                  {item.title}
                </Text>
              </Link>
              {
                item.subtitle && (
                  <Text className={styles.subtitle} size='xxs' as="span" color='secondary'>
                    {item.subtitle}
                  </Text>
                )
              }
            </div>
          );
        })
      }
    </nav>
  );
};

