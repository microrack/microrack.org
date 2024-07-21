'use client';

import React, { useState, useCallback, useEffect, useRef, TouchEvent } from 'react';
import classNames from 'classnames';
import styles from './slider.module.css';

interface SliderProps {
  children: React.ReactElement[];
  autoPlayInterval?: number;
  showArrows?: boolean;  // New prop for controlling arrow visibility
}

export const Slider: React.FC<SliderProps> = ({ 
  children, 
  autoPlayInterval = 6500, 
  showArrows = true  // Default value is true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % children.length);
  }, [children.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + children.length) % children.length);
  }, [children.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const stopAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  }, []);

  const handleUserInteraction = useCallback(() => {
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      stopAutoPlay();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      stopAutoPlay();
    }
  }, [nextSlide, prevSlide, stopAutoPlay]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const handleDocumentClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsAutoPlaying(true);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
    }
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, nextSlide, currentSlide]);

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleTouchMove = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  const handleScroll = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaX > 50) {
      nextSlide();
      stopAutoPlay();
    } else if (e.deltaX < -50) {
      prevSlide();
      stopAutoPlay();
    }
  }, [nextSlide, prevSlide, stopAutoPlay]);

  const handleArrowClick = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    stopAutoPlay();
  }, [prevSlide, nextSlide, stopAutoPlay]);

  return (
    <div 
      className={styles.sliderContainer} 
      ref={containerRef}
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
          transition: isAutoPlaying ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={styles.sliderItem}
            onClick={handleUserInteraction}
            onMouseDown={handleUserInteraction}
            onTouchStart={handleUserInteraction}
          >
            {React.cloneElement(child, {
              className: `${styles.imageComponent}`,
              onMouseDown: handleUserInteraction,
              onTouchStart: handleUserInteraction,
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
              stopAutoPlay();
            }}
          />
        ))}
      </div>
    </div>
  );
};