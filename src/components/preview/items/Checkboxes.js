import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function Checkboxes({ label, required, name, onChange, instruction, value, items }) {
  return (
    <FormControl component="fieldset" className="margin-tl-15">
      <FormLabel component="label">{label || name}</FormLabel>
      <FormGroup>
        {
          items.map((item) => {
            return (
              <FormControlLabel key={item.id} className="item-checkbox"
                control={
                  <Checkbox
                    value={item.value}
                    checked={value.findIndex(itemValue => itemValue === item.value) > 0}
                  />
                }
                label={item.value}
              />
            )
          })
        }
      </FormGroup>
    </FormControl>
  )
}

Checkboxes.defaultProps = {
  value: []
}
