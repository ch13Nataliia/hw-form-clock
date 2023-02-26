import React, { useEffect, useState } from 'react';
import Surround from './Surround';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <Surround color="blue">
        <h1>Clock</h1>
        <div style={{ fontSize: '50px' }}>{clockState}</div>
      </Surround>
    </div>
  );
}

export default Clock;
