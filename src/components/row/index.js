import React from 'react';
import PropTypes from 'prop-types';
import styles from './row.module.scss';


export default function Row({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
