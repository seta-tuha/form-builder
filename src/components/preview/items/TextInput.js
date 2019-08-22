import React from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';

// import './style.css';

export default function TextInput({ block, name }) {
    const required = block.required ? '*' : '';
    console.log('Field Label' + required);
    const label = block.label ? block.label + required : 'Field Label' + required;
    const helperText = block.instruction ? (<HelperText>{block.instruction}</HelperText>) : ''
    return (
      <div className="item-container">
        <TextField 
          className="configurationItem"
          label={label}
          helperText = {helperText}
          outlined='true'>
          <Input name={name}/>
        </TextField>
      </div>
        
      )
}
