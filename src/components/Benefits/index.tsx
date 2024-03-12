import React from 'react';
import classnames from 'classnames';

import { Benefit } from '../Benefit';
import { BenefitProps } from '../Benefit/benefit.types';

import styles from "./benefits.module.css";
import benefits from "./benefits.json";
import { BenefitsProps } from './benefits.types';

/**
 * Benefits section component
 */
export const Benefits = ({className}: BenefitsProps): JSX.Element => {
  return (
    <section className={classnames(className, styles.benefits)}>
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

