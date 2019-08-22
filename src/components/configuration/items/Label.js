import React from 'react';
import TextField, {Input} from '@material/react-text-field';
const type = "label"

export default function Label({ value, onChange }) {
  return (
    <TextField 
      className="configurationItem"
      label='Field Label'
      outlined>
      <Input value={value} onChange={(e) => onChange({ name: type, value: e.target.value })} />
    </TextField>
  )
}
