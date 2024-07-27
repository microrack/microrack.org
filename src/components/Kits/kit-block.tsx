'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import styles from './kits.module.css';
import { KitType } from './kits.types';

const KitBlock: React.FC<{ item: KitType }> = ({ item }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const checkScroll = () => {
    const content = contentRef.current;
    if (content) {
      const isScrollable = content.scrollHeight > content.clientHeight;
      const isScrolledToBottom = Math.abs(content.scrollHeight - content.scrollTop - content.clientHeight) < 1;
      setShowScrollButton(isScrollable && !isScrolledToBottom);
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      // Initial check
      checkScroll();

      return () => {
        content.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [overlayVisible]);

  const totalModulesQuantity = item.modules.reduce((acc, module) => acc + module.quantity, 0);
  const containsEndingOne = totalModulesQuantity % 10 === 1 && totalModulesQuantity % 100 !== 11;

  return (
    <div className={styles.kitBlock}>
      <Image src={item.imageUri} alt={item.title} width={400} height={300} className={styles.kitImage} />
      <div className={styles.kitInfo}>
        <Text size="l" weight="bold" className={styles.title}>{item.title}</Text>
        <div className={styles.price}>
          {item.earlyPrice && (
            <Text size="s" weight='bold' className={styles.earlyPrice}>{item.earlyPrice}</Text>
          )}
          <Text size="s" weight='bold' className={styles.fullPrice}>{item.fullPrice}</Text>
        </div>
        {item.earlyPrice && (
          <Text size="xxs" weight='light' className={styles.priceSubtitle}>{item.priceSubtitle}</Text>
        )}
        <Text size="s" weight='light' className={styles.description}>{item.description}</Text>
        <Button text="What's Inside" variant='secondary' onClick={toggleOverlay} />
      </div>
      <div className={`${styles.overlayContainer} ${overlayVisible ? styles.overlayVisible : ''}`}>
        <div className={styles.kitHeading}>
          <div className={styles.kitHeadingHeader}>
            <h3 className={styles.kitHeadingTitle}><Text size="m" weight="bold">{item.title}</Text></h3>
            <Text className={styles.kitHeadingDescription} size="xxs" weight='light'>Breadboards and wires are included</Text>
          </div>
          <div className={styles.closeButton} onClick={toggleOverlay}>×</div>
        </div>
        <div className={styles.overlayContent} ref={contentRef} onScroll={checkScroll}>
          <Text size="s" className={styles.quantityTitle}>{totalModulesQuantity} module{containsEndingOne ? '' : 's'}:</Text>
          <ul>
            {item.modules.map((module, index) => (
              <li key={index} className={styles.modulesListItem}>
                <Text className={styles.moduleQuantity} size="xxs" weight='light'>{module.quantity}x</Text>
                <Text className={styles.moduleName} size="s" weight='light'>{module.name}</Text>
              </li>
            ))}
          </ul>
        </div>
        {showScrollButton && (
          <div className={styles.scrollButtonContainer}>
            <Button text="More" variant='floating' onClick={scrollToBottom} className={styles.scrollButton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default KitBlock;