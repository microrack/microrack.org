import React from 'react';

import { Benefit } from '../Benefit';
import { BenefitProps } from '../Benefit/benefit.types';

import styles from "./benefits.module.css";
import benefits from "./benefits.json";

/**
 * Benefits section component
 */
export const Benefits = (): JSX.Element => {
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

