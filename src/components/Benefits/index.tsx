import React from 'react';

import { Benefit } from '../Benefit';
import { BenefitProps } from '../Benefit/benefit.types';

import { BenefitsProps } from './benefits.types';
import styles from "./benefits.module.css";

/**
 * Benefits section component
 */
export const Benefits = ({
  benefits
}: BenefitsProps): JSX.Element => {
  return (
    <section className={styles.benefits}>
      {
        benefits.map((benefit: BenefitProps, index) => {
          return (
            <Benefit
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          );
        })
      }
    </section>
  );
};

