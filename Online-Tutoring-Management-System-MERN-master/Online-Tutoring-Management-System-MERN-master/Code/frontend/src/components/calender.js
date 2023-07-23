import React, { useState } from "react";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import '../css/calender.css'

export const Calender = () => {

    // const [date, setDate] = useState(new Date());

    // const onChange = () =>{
    //     setDate(date);
    // };

  return (
    <div>
        <CalendarComponent></CalendarComponent>
    </div>
  )
}

export default Calender;
