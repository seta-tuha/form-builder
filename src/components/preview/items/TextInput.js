import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextInput({ label, required, name, onChange, instruction, value }) {
    const fieldLabel = required ? `${label || name}*` : label || name;
    const helperText = instruction ? instruction : ''
    return (
      <div className="item-container">
        <TextField
          className="configurationItem"
          label={fieldLabel}
          helperText = {helperText}
          variant="outlined"
          value={value}
          onChange={(e) => onChange({ name, value: e.target.value })}>
        </TextField>
      </div>
  )
}
