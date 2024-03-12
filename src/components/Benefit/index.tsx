import React from 'react';

/* Common components */
import { Text } from '../Text';

/* Local types and styles */
import { BenefitProps } from './benefit.types';
import styles from "./benefit.module.css";

/**
 * Common text component
 */
export const Benefit = ({
  title,
  description
}: BenefitProps) => {

  return (
    <div className={styles.benefit}>
      <Text className={styles.heading} as='h1' size='m' uppercase={true} weight='bold'>{title}</Text>
      <Text as='p'size='xs'>{description}</Text>
    </div>
  );
}
