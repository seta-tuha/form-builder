import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function Checkboxes({ label, required, name, onChange, instruction, value, items }) {
  return (
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
  )
}

Checkboxes.defaultProps = {
  value: []
}
