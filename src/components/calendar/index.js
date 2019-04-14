import React from 'react';
import { Transition } from 'react-spring/renderprops';
import styles from './calendar.module.scss';
import Row from '../row';
import WeekDays from './subcomponents/weekdays';
import Day from './subcomponents/day';
import Month from './subcomponents/month';
import Year from './subcomponents/year';
import { getDate, getToday } from './helpers/dates';

export default function Calendar() {
  const weeks = getDate();
  const today = getToday();
  return (
    <div className={styles.container}>
      <Transition
        items={[0]}
        keys={day => day}
        from={{ opacity: 0, transform: 'translate3d(100vw,0,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(100vw,0,0)' }}
      >
        {() => props => (
          <div style={props}>
            <Row>
              <Month />
              <Year />
            </Row>
            <Row>
              <WeekDays />
            </Row>
          </div>
        )}
      </Transition>
      {
        // loop over each week
        weeks.map((week, index) => (
          <Row>
            <Transition
              items={week}
              trail={100}
              keys={
                /* using the index for the key due to structure of arrays */
                (day, i) => (index + i)
              }
              from={{ opacity: 0, transform: 'translate3d(100vw,0,0)' }}
              enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              leave={{ opacity: 0, transform: 'translate3d(100vw,0,0)' }}
            >
              {
                day => props => (
                  <Day
                    style={props}
                    display={day > -1 /* if the day is in this month */}
                    highlight={today === day + (index * 7) /* if the day is today */}
                    day={day + (index * 7) /* calculate actual day */}
                  />
                )
              }
            </Transition>
          </Row>
        ))
        }
    </div>
  );
}
