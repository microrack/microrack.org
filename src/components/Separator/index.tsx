'use client';

import React from 'react';
import classNames from 'classnames';
import styles from './separator.module.css';

interface SeparatorProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  type?: 'sin' | 'square' | 'saw' | 'triangle';
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  color = '#000000',
  height = 25,
  type = 'sin',
}) => {
  const wavePeriod = 25;

  const separatorStyles = classNames(styles.separator, className);

  return (
    <div className={separatorStyles}>
      <svg width="100%" height={height} preserveAspectRatio="none">
        {type === 'sin' && (
          <>
            <defs>
              <pattern id="sin" x="0" y="0" width={wavePeriod} height={height} patternUnits="userSpaceOnUse">
                <path 
                  d={`M0,${height/2} Q${wavePeriod/4},0 ${wavePeriod/2},${height/2} T${wavePeriod},${height/2}`}
                  fill="none" 
                  stroke={color} 
                  strokeWidth="2"
                  strokeLinecap='square'
                />
              </pattern>
            </defs>
            <rect width="100%" height={height} fill="url(#sin)" />
          </>
        )}
        {type === 'triangle' && (
          <>
            <defs>
              <pattern id="triangle" x="0" y="0" width={wavePeriod} height={height} patternUnits="userSpaceOnUse">
                <path 
                  d={`M0,${height/2} L${wavePeriod/2},0 L${wavePeriod},${height/2}`}
                  fill="none" 
                  stroke={color} 
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height={height} fill="url(#triangle)" />
          </>
        )}
        {type === 'square' && (
          <>
            <defs>
              <pattern id="square" x="0" y="0" width={wavePeriod} height={height} patternUnits="userSpaceOnUse">
                <path 
                  d={`M0,${height/2} h${wavePeriod/2} v${-height/2} h${wavePeriod/2} v${height/2}`}
                  fill="none" 
                  stroke={color} 
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height={height} fill="url(#square)" />
          </>
        )}
        {type === 'saw' && (
          <>
            <defs>
              <pattern id="saw" x="0" y="0" width={wavePeriod} height={height} patternUnits="userSpaceOnUse">
                <path 
                  d={`M0,${height/2} L${wavePeriod},0 V${height/2} M0,${height/2}`}
                  fill="none" 
                  stroke={color} 
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height={height} fill="url(#saw)" />
          </>
        )}
      </svg>
    </div>
  );
};