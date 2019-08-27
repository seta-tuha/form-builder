import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function Select({
  label,
  required,
  name,
  onChange,
  value,
  items
}) {

  return (
    <TextField
      label={label || name}
      variant="outlined"
      select
      classes={{ root: "configuration-input" }}
      fullWidth
      required={required}
      value={value}
      helperText="Select your date format"
      onChange={(e) => onChange({ name, value: e.target.value })}
    >
      {items.map(({ id, value }) => (
        <MenuItem key={id} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
}

Select.defaultProps = {
  value: []
};
