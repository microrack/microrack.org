'use client'

import React, { useState } from 'react';
import { Text } from '@/components/Text';

import styles from './faq.module.css';
import {FAQProps, FAQItem} from './faq.types';

const Item: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.faqQuestion} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text size="m" weight="bold">
          {item.question}
        </Text>
        <span className={styles.faqToggle}>{isOpen ? '×' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <Text size="s">
            {item.answer}
          </Text>
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC<FAQProps> = ({faqData}) => {
  return (
    <div className={styles.faqContainer}>
      {faqData.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};