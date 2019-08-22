import React from 'react';
import Checkbox from '@material/react-checkbox';
const type = "required"

export default function Required({ value, onChange }) {
  return (
    <div>
      <div className="configurationItem" >
        <Checkbox 
        nativeControlId='required'
        checked={value}
        onChange={(e) => onChange({ name: type, value: e.target.checked })}
        />
        <label htmlFor='required'>Required</label>
      </div>
    </div>
  )
}
