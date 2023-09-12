import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  ScheduleComponent,
  Week,
  Month,
  TimelineViews,
  TimelineMonth,
  Inject,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';

const AdminCalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2018, 1, 15));

  useEffect(() => {
    const root = ReactDOM.createRoot(document.getElementById('schedule'));
    root.render(<ScheduleComponentWrapper selectedDate={selectedDate} />);
  }, [selectedDate]);

  return (
    <div>
      <ScheduleComponentWrapper selectedDate={selectedDate} />
    </div>
  );
};

const ScheduleComponentWrapper = ({ selectedDate }) => {
  const eventSettings = { dataSource: appData };

  return (
    <ScheduleComponent width="100%" height="550px" selectedDate={selectedDate} eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option="Week" />
        <ViewDirective option="TimelineWeek" />
        <ViewDirective option="Month" />
        <ViewDirective option="TimelineMonth" />
      </ViewsDirective>
      <Inject services={[Week, Month, TimelineViews, TimelineMonth]} />
    </ScheduleComponent>
  );
};

const root = document.getElementById('root'); 
ReactDOM.render(<AdminCalendarComponent />, root);

export default AdminCalendarComponent;