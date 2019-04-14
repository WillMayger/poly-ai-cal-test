import React from 'react';
import { getYear } from '../../helpers/dates';
import styles from './year.module.scss';

export default function Year() {
  return (
    <h1 className={styles.year}>
      {getYear()}
    </h1>
  );
}
