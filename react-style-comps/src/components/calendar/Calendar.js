import { Component } from "react";
import moment from "moment";

export class Calendar extends Component {

  createDaysOfMonth(refDate) {
    const date = moment(refDate).endOf('month');
    const lastDate = date.date();
    const firstWeekday = date.startOf('month').day();
  
    const calendarDays = [];
  
    const today = moment();
  
    for (let w=0; w<firstWeekday; w++) {
      calendarDays.push(<div key={Math.random()}/>); // empty days
    }
  
    for (let d=1; d<lastDate; d++) {
      calendarDays.push(<div key={d} today={date.date(d).isSame(today, 'day')}>{d}</div>);
    }
  
    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(<div key={Math.random()}/>);
    }
  
    return calendarDays;
  }
  
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    };
  }
}
