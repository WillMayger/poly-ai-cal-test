import React from 'react';
import styles from './month.module.scss';
import { getMonth } from '../../helpers/dates';

export default function Month() {
  return (
    <h1 className={styles.month}>
      {getMonth()}
    </h1>
  );
}
