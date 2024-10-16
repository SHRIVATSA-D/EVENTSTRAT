import React, { useState } from 'react';
import EventSchedule from './Eventdays';

const Schedule = () => {
    const totalDays = 10;
  return (
<div className="schedule">

  <EventSchedule totalDays={totalDays} />
</div>
  );
};

export default Schedule;
