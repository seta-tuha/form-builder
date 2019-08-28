import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DateTimePicker
} from "@material-ui/pickers";
import FormGroup from '@material-ui/core/FormGroup';

export default function DateTime({
  enableTimeSelect,
  value,
  onChange,
  name,
  dateFormat
}) {
  const TimePicker = enableTimeSelect ? DateTimePicker : DatePicker;
  return (
    <FormGroup>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          inputVariant="outlined"
          value={value}
          fullWidth
          format={dateFormat}
          onChange={(date) => onChange({ name, value: date})}
        />
      </MuiPickersUtilsProvider>
    </FormGroup>
  )
}
