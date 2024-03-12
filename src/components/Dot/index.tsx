import React from 'react';

import type { DotProps } from './dot.types';
import styles from './dot.module.css';
/**
 * Renders a single dot.
 */
const Dot: React.FC<DotProps> = ({ x, y, scale = 1, dotSize }) => (
  <div
    className={styles.dot}
    style={{
      width: `${dotSize}px`,
      height: `${dotSize}px`,
      left: `${x}px`,
      top: `${y}px`,
      transform: `scale(${scale})`,
    }}
  />
);

export default Dot;
