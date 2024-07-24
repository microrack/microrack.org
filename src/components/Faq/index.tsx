// src/components/Faq/index.tsx

import React from 'react';
import { Text } from '@/components/Text';
import styles from './faq.module.css';
import { FAQProps, FAQItemType } from './faq.types';

const FAQItem: React.FC<{ item: FAQItemType }> = ({ item }) => (
  <details className={styles.faqItem}>
    <summary className={styles.faqQuestion}>
      <Text size="m" weight="bold">
        {item.question}
      </Text>
      <span className={styles.faqToggle}>+</span>
    </summary>
    <div className={styles.faqAnswer}>
      <Text size="s">
        {item.answer}
      </Text>
    </div>
  </details>
);

export const FAQ: React.FC<FAQProps> = ({className, faqData}) => {
  return (
    <section className={className} id="faq">
      <Text uppercase size="l" weight="bold" className={styles.title}>
        FAQ
      </Text>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};