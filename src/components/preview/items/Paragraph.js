import React from 'react';
import TextField, {Input} from '@material/react-text-field';

// import './style.css';

export default function Paragraph({ name }) {
    return (
        <TextField 
          className="configurationItem"
          label='Field Name'
          outlined='true'>
          <Input name={name}/>
        </TextField>
      )
}
