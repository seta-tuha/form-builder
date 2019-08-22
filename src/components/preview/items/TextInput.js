import React from 'react';
import TextField, { Input } from '@material/react-text-field';

export default function TextInput({ name, label, value, onChange }) {

  return (
    <TextField
      className="configurationItem"
      label={label}
      outlined>
      <Input
        value={value}
        onChange={(e) => onChange({ name, value: e.target.value })}
      />
    </TextField>
  )
}
