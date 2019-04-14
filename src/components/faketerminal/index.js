import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import PropTypes from 'prop-types';
import styles from './faketerminal.module.scss';
import { useEvent } from '../../hooks';

export default function FakeTerminal({ toggle, setToggle }) {
  const [width, setWidth] = useState(window.innerWidth || 0);

  const keyHandler = (e) => {
    // if enter key is pressed and toggle is false
    if (!toggle && e.key === 'Enter') {
      setToggle(true);
    }
  };

  // create event handlers for whole window to prevent any issue with focus.
  useEvent('keydown', keyHandler);
  useEvent('click', () => setToggle(true));
  useEvent('resize', () => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <div
        className={styles.fakeTerminal}
      >
        <h2>
          <span>
            {'>'}
          </span>
          cal
          {
            !toggle && (
              <span
                className={styles.blinker}
              >
                {'_'}
              </span>
            )
          }
        </h2>
        {
          toggle && (
          <h2>
            <span>
              {'>'}
            </span>
            <span>
              _
            </span>
          </h2>
          )
        }
      </div>
      <Transition
        items={toggle}
        from={{ opacity: -100 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: -100 }}
      >
        {toggleCal => !toggleCal
          && (props => (
            <div
              style={props}
              className={styles.infoBox}
            >
              <h5>
                {
                  width <= 1000
                    ? 'Press screen to continue'
                    : 'Press the Enter key to continue, or alternatively, click on the screen.'
                }
              </h5>
            </div>
          ))
        }
      </Transition>
    </>
  );
}

// type checking
FakeTerminal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};
