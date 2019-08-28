import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const dateFormats = [
  'dd-MM-yyyy',
  'MM-dd-yyyy',
  'yyyy-MM-dd'
];

const type = 'dateFormat';

export default function DateFormat({ value, onChange }) {
  return (
    <TextField
      label='Date format'
      variant="outlined"
      select
      classes={{ root: "configuration-input" }}
      fullWidth
      value={value}
      helperText="Select your date format"
      onChange={(e) => onChange({ name: type, value: e.target.value })}
    >
      {dateFormats.map(format => (
        <MenuItem key={format} value={format}>
          {format}
        </MenuItem>
      ))}
    </TextField>
  )
}
