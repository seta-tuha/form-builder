import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiRating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import { HelpOutline } from '@material-ui/icons';

export default function Rating({ label, required, name, onChange, instruction, min, max, value }) {
  const fieldLabel = required ? `${label || name}*` : label || name;
  const maxValue = max ? parseInt(max) : 0;

  return (
    <Box mb={3} borderColor="transparent">
      <Typography component="legend">{fieldLabel}
        <Tooltip title={instruction || name}>
          <HelpOutline className="help-icon" />
        </Tooltip>
      </Typography>
      <MuiRating
        name="simple-controlled"
        value={value}
        max={maxValue}
        onChange={(e) => onChange({ name, value: e.target.value })}
      />
    </Box>
  )
}
