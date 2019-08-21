import React from 'react';

const type = "name"

export default function Name({ value, onChange }) {
  return (
    <input value={value} onChange={(e) => onChange({ name: type, value: e.target.value })} />
  )
}
