import React from 'react';
import styles from './weekday.module.scss';
import { days } from '../../helpers/dates';

export default function WeekDays() {
  return days.map(day => (
    <div className={styles.day}>
      {day}
    </div>
  ));
}
