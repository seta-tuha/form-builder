import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DateTimePicker
} from '@material-ui/pickers';


export default function DateTime({ enableTimeSelect, value, onChange, name, format }) {
  const TimePicker = enableTimeSelect ? DateTimePicker : DatePicker;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        inputVariant="outlined"
        value={value}
      />
    </MuiPickersUtilsProvider>
  )
}
