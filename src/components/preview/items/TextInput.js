import React from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';

export default function TextInput({ label, required, name, onChange, instruction, value }) {
    const fieldLabel = required ? `${label || name}*` : label || name;
    const helperText = instruction ? (<HelperText>{instruction}</HelperText>) : ''
    return (
      <div className="item-container">
        <TextField 
          className="configurationItem"
          label={fieldLabel}
          helperText = {helperText}
          outlined='true'>
           <Input
            value={value}
            onChange={(e) => onChange({ name, value: e.target.value })}
          />
        </TextField>
      </div>
        
      )
}
