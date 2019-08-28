import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiSwitch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Switch({
  label,
  required,
  name,
  onChange,
  instruction,
  value
}) {
  const fieldLabel = required ? `${label || name}*` : label || name;
  const helperText = instruction ? instruction : "";

  console.log('value',value)
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiSwitch
            checked={value}
            onChange={e => onChange({ name, value: e.target.checked })}
            value={value}
            color="primary"
          />
        }
        label={fieldLabel}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormGroup>
  );
}
