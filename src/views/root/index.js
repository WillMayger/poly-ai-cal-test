import React, { useState } from 'react';
import Calendar from '../../components/calendar';
import styles from '../../themes/dark.module.scss';
import FakeTerminal from '../../components/faketerminal';

export default function Root() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <FakeTerminal toggle={toggle} setToggle={setToggle} />
      {toggle && <Calendar />}
    </div>
  );
}
