import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes({
  label,
  required,
  name,
  onChange,
  instruction,
  value,
  items
}) {

  const handle = (e) => {
    let itemCheck = value.findIndex(itemValue => itemValue === e.target.value);
    if(itemCheck >= 0){
      onChange({name, value: value.filter(itemValue => itemValue !== e.target.value)})
    }else{
      onChange({name, value:  [...value, e.target.value]})
    }
  }
  return (
    <Box
      component="fieldset"
      className="margin-tl-15"
      borderColor="primary"
      borderRadius={5}
      css={{flex: 1}}
    >
      <Typography component="legend">{label || name}</Typography>
      <FormGroup>
        {items.map(item => {
          return (
            <FormControlLabel
              key={item.id}
              className="item-checkbox"
              control={
                <Checkbox
                  value={item.value}
                  checked={
                    value.findIndex(itemValue => itemValue === item.value) >= 0
                  }
                  onChange={handle}
                />
              }
              label={item.value}
            />
          );
        })}
      </FormGroup>
    </Box>
  )
}

Checkboxes.defaultProps = {
  value: []
};
// onChange({ name, value: e.target.value })