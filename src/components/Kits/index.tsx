import React from 'react';
import classnames from 'classnames';

import styles from './kits.module.css';
import { KitsProps } from './kits.types';
import KitBlock from './kit-block';

export const Kits: React.FC<KitsProps> = ({ className, kitsData }) => {
  return (
    <section className={classnames(className, styles.kitsRoot)} id="kits">
      <div className={styles.kitsContainer}>
        {kitsData.map((item, index) => (
          <KitBlock key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
