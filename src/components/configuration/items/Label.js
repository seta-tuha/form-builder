import React from 'react';
import TextField from '@material-ui/core/TextField';

const type = "label";

export default function Label({ value, onChange }) {
  return (
    <TextField
      label='Field Label'
      variant="outlined"
      classes={{root: "configuration-input"}}
      fullWidth
      value={value}
      onChange={(e) => onChange({ name: type, value: e.target.value })}
    />
  )
}
