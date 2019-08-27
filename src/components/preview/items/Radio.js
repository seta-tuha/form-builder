import React from 'react';
import FormGroup from '@material-ui/core/FormControl';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';


export default function Checkboxes({ label, required, name, onChange, instruction, value, items }) {
  return (
    <FormControl component="fieldset" className="margin-tl-15">
        <FormLabel component="label">{label || name}</FormLabel>
        <FormGroup>
            <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={(e) => onChange({ name, value: e.target.value })}
            >
            {
                    items.map((item) => {
                    return (
                        <FormControlLabel 
                        keys={item.id}
                        value={item.value} 
                        control={<Radio />} 
                        label={item.value } />
                        )
                    })
                }
            </RadioGroup>
        </FormGroup>
    </FormControl>
  )
}

Checkboxes.defaultProps = {
  value: []
}
