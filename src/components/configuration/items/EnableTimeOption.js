import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const type = "enableTimeOption"

export default function Required({ value, onChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          checked={value}
          onChange={e => onChange({ name: type, value: e.target.checked })}
        />
      }
      label="Enable time option"
    />
  )
}
