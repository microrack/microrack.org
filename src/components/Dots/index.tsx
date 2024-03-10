import React, { useRef, useState, useEffect } from 'react';

import Dot from '../Dot';
import type {DotProps} from '../Dot/dot.types';

import styles from './dots.module.css';
import { DotsProps, Configuration } from './dots.types';

// Configuration constants for the component.
const CONFIG: Configuration = {
  initialScale: 1,
  minScale: 0.25,
};

/**
 * Universal Dots component that can render both static and interactive dots.
 */
const Dots: React.FC<DotsProps> = ({
  width,
  height,
  dotSize,
  dotSpacing,
  influenceRadius,
  interactive = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Array<DotProps>>([]);

  useEffect(() => {
    // Generates the initial positions and scales for dots.
    const tempDots: Array<DotProps> = [];
    const startPositionOffset = dotSpacing / 2;
    for (let y = startPositionOffset; y < height; y += dotSpacing) {
      for (let x = startPositionOffset; x < width; x += dotSpacing) {
        tempDots.push({
          x,
          y,
          scale: CONFIG.initialScale, // Default scale for all dots
          dotSize,
        });
      }
    }
    setDots(tempDots);
  }, [width, height, dotSize, dotSpacing]);

  // Adjusts the scale of dots based on mouse or touch interaction for interactive mode.
  const handleInteraction = (x: number, y: number) => {
    if (!interactive || influenceRadius === undefined) return;
    const { initialScale, minScale } = CONFIG;
    const updatedDots = dots.map(dot => {
      const dx = dot.x - x;
      const dy = dot.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const distanceRatio = Math.min(distance / influenceRadius, 1); // Ensures the ratio does not exceed 1.
      const adjustedScale = distance < influenceRadius ? (minScale + (1 - minScale) * distanceRatio) : initialScale;
      return { ...dot, scale: adjustedScale };
    });
    setDots(updatedDots);
  };

  // Mouse movement event handler for interactive mode.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const boundingRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;
    handleInteraction(mouseX, mouseY);
  };

  // Touch movement event handler for interactive mode.
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const boundingRect = containerRef.current.getBoundingClientRect();
    const touchX = touch.clientX - boundingRect.left;
    const touchY = touch.clientY - boundingRect.top;
    handleInteraction(touchX, touchY);
  };

  // Resets dots' scales to the initial scale on mouse leave or touch end.
  const resetDotsScale = () => {
    setDots(dots.map(dot => ({ ...dot, scale: CONFIG.initialScale })));
  };

  return (
    <div
      ref={containerRef}
      className={styles.dotsContainer} // Ensure this class is defined in your CSS.
      onMouseMove={interactive ? handleMouseMove : undefined}
      onTouchMove={interactive ? handleTouchMove : undefined}
      onMouseLeave={interactive ? resetDotsScale : undefined}
      onTouchEnd={interactive ? resetDotsScale : undefined}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {dots.map((dot, index) => (
        <Dot key={index} {...dot} />
      ))}
    </div>
  );
};

export default Dots;
