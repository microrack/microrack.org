'use client';

import React, { useState, useCallback, useEffect, useRef, TouchEvent } from 'react';
import classNames from 'classnames';
import styles from './slider.module.css';

interface SliderProps {
  children: React.ReactElement[];
  autoPlayInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({ children, autoPlayInterval = 6500 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % children.length);
  }, [children.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + children.length) % children.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleClick = () => {
    nextSlide();
  };

	useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, nextSlide]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    }
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaX > 50) {
      nextSlide();
    } else if (e.deltaX < -50) {
      prevSlide();
    }
  };

  return (
    <div 
      className={styles.sliderContainer} 
      ref={containerRef}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleScroll}
    >
      <div
        className={styles.sliderTrack}
        ref={trackRef}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={styles.sliderItem}
          >
            {React.cloneElement(child, {
              className: `${styles.imageComponent}`,
            })}
          </div>
        ))}
      </div>
      <div className={styles.sliderDots}>
        {children.map((_, index) => (
          <span
            key={index}
            className={classNames(styles.dot, { [styles.activeDot]: currentSlide === index })}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
