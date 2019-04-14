import React, { useState } from 'react';
import Calendar from '../../components/calendar';
import styles from '../../themes/dark.module.scss';
import FakeTerminal from '../../components/faketerminal';
import { useEvent } from '../../hooks';

export default function Root() {
  const [toggle, setToggle] = useState(false);
  const keyHandler = (e) => {
    // if enter key is pressed and toggle is false
    if (!toggle && e.key === 'Enter') {
      setToggle(true);
    }
  };

  const clickHandler = () => {
    if (!toggle) setToggle(true);
  };

  // create event handlers for whole window to prevent any issue with focus.
  useEvent('keydown', keyHandler);

  return (
    <div
      className={styles.container}
      onClick={clickHandler}
      onKeyDown={keyHandler}
      role="button"
      tabIndex={0}
    >
      <FakeTerminal toggle={toggle} setToggle={setToggle} />
      {toggle && <Calendar />}
    </div>
  );
}
