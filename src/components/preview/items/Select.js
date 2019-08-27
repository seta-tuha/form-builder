import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';


export default function Select({ label, required, name, onChange, instruction, value, items }) {
  return (
    <FormControl component="fieldset" className="margin-tl-15">
      <InputLabel htmlFor="age-required">Age</InputLabel>
        <Select
          value={value}
        //   onChange={handleChange}
          name={name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
    </FormControl>
  )
}

Select.defaultProps = {
  value: []
}
