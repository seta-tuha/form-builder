import React from 'react';
import { useTheme, withTheme } from '@material-ui/styles';

function OutlinedWrapper({ outlined, ...remainProps }) {
  const theme = useTheme();
  return <div>outlined wrapper</div>
}

export default withTheme(OutlinedWrapper);
