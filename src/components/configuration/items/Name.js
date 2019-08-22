import React from 'react';
import TextField, {Input} from '@material/react-text-field';
const type = "name"

export default function Name({ value, onChange }) {
  return (
    <TextField 
      className="configurationItem"
      label='Field Name'
      outlined='true'>
      <Input value={value} onChange={(e) => onChange({ name: type, value: e.target.value })} />
    </TextField>
  )
}
