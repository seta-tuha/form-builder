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
  const handleChange = function(e) {
    onChange({ name, value: e.target.value });
  };
  return (
    <FormGroup className="margin-tb-15">
      <FormControlLabel
        control={
          <MuiSwitch
            checked={value}
            onChange={handleChange}
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
