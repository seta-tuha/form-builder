import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function Select({
  label,
  required,
  name,
  onChange,
  instruction,
  value,
  items
}) {
  const fieldLabel = required ? `${label || name}*` : label || name;

  return (
    <FormControl component="fieldset" className="margin-tb-15">
      <InputLabel htmlFor={name}>{fieldLabel}</InputLabel>
      <MuiSelect value={value} name={name} id={name}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map(item => {
          return (
            <MenuItem key={item.id} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </MuiSelect>
      <FormHelperText>{instruction}</FormHelperText>
    </FormControl>
  );
}

Select.defaultProps = {
  value: []
};
