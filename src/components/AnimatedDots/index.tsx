import React, { useRef, useState, useEffect, memo } from 'react';

import type { Configuration, DotType } from './dots.types'
import styles from './dots.module.css';

/**
 * Configuration constants for the component.
 */
const CONFIG: Configuration = {
  spacing: 16,
  width: 320,
  height: 80,
  influenceRadius: 100,
  initialScale: 1,
  minScale: 0.25
};

/**
 * A memoized Dot component to avoid unnecessary re-renders.
 * Renders a single dot based on provided properties.
 */
const Dot: React.FC<DotType> = memo(({ x, y, scale }) => (
  <div
    className={styles.dot}
    style={{
      left: `${x}px`,
      top: `${y}px`,
      transform: `scale(${scale})`,
    }}
  />
));

/**
 * Renders a background filled with dots. The dots' scale will change based on mouse or touch interaction.
 */
const DottedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<DotType[]>([]);

  useEffect(() => {
    /**
     * Generates the initial positions and scales for a set of dots within the component.
     */
    const generateDots = () => {
      const { spacing, width, height, initialScale } = CONFIG;
      const tempDots: DotType[] = [];
      const startPositionOffset = spacing / 2; // Center the starting position of dots.
      for (let y = startPositionOffset; y < height; y += spacing) {
        for (let x = startPositionOffset; x < width; x += spacing) {
          tempDots.push({ id: `${x}-${y}`, x, y, scale: initialScale });
        }
      }
      setDots(tempDots);
    };

    generateDots();
  }, []);

  /**
   * Handles interactions (mouse or touch) to adjust the scale of dots based on proximity to the event.
   * @param {number} x - The x-coordinate of the interaction.
   * @param {number} y - The y-coordinate of the interaction.
   */
  const handleInteraction = (x: number, y: number) => {
    const { influenceRadius, initialScale, minScale } = CONFIG;
    const updatedDots = dots.map((dot) => {
      const dx = dot.x - x;
      const dy = dot.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const distanceRatio = distance / influenceRadius; // Ratio of distance to the radius of influence
      const adjustedScale = distance < influenceRadius ? (minScale + (1 - minScale) * distanceRatio) : initialScale;

      return { ...dot, scale: adjustedScale };
    });
  
    setDots(updatedDots);
  };
  

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const boundingRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;

    handleInteraction(mouseX, mouseY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const boundingRect = containerRef.current.getBoundingClientRect();
    const touchX = touch.clientX - boundingRect.left;
    const touchY = touch.clientY - boundingRect.top;

    handleInteraction(touchX, touchY);
  };

  const resetDotsScale = () => setDots(dots.map(dot => ({ ...dot, scale: CONFIG.initialScale })));

  return (
    <div
      ref={containerRef}
      className={styles.dottedBackground}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={resetDotsScale}
      onTouchEnd={resetDotsScale}
    >
      {dots.map((dot) => (
        <Dot key={dot.id} {...dot} />
      ))}
    </div>
  );
};

export default DottedBackground;
