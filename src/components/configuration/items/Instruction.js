import React from 'react';
import TextField from '@material-ui/core/TextField';

const type = "instruction"

export default function Instruction({ value, onChange }) {
  return (
    <TextField
      label='Field Instruction'
      variant="outlined"
      classes={{root: "configuration-input"}}
      value={value}
      multiline
      rows={4}
      fullWidth
      onChange={(e) => onChange({ name: type, value: e.target.value })}
    />
  )
}
