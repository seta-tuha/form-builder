import React from 'react';
import TextField, {Input} from '@material/react-text-field';
const type = "instruction"

export default function Instruction({ value, onChange }) {
  return (
    <TextField 
      className="configurationItem"
      label="Field Instruction"
      outlined
      textarea
      >
      <Input value={value} onChange={(e) => onChange({ name: type, value: e.target.value })} />
    </TextField>
  )
}
