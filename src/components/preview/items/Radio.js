import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';


export default function Checkboxes({ label, required, name, onChange, instruction, value, items }) {
  return (
    <Box
      component="fieldset"
      className="margin-tl-15"
      borderColor="primary"
      borderRadius={5}
      css={{flex: 1}}
    >
      <Typography component="legend">{label || name}</Typography>
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
                label={item.value} />
            )
          })
        }
      </RadioGroup>
    </Box>
  )
}

Checkboxes.defaultProps = {
  value: []
}
