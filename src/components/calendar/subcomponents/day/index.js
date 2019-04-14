import React from 'react';
import PropTypes from 'prop-types';
import styles from './day.module.scss';

export default function Day({
  highlight,
  day,
  display,
  style,
}) {
  return (
    <div
      style={style}
      className={
        highlight
          ? styles.currentDay
          : styles.day
      }
    >
      {display && day}
    </div>
  );
}

// type checking
Day.propTypes = {
  highlight: PropTypes.bool,
  display: PropTypes.bool,
  day: PropTypes.number,
  style: PropTypes.object,
};

// type checking fall back values
Day.defaultProps = {
  highlight: false,
  display: false,
  day: 0,
  style: {},
};
