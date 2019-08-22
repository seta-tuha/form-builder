import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import CheckboxM from '@material/react-checkbox';
// import './style.css';

export default function Checkbox({ label, required, name, onChange, instruction, value, items }) {
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div key={item.id} className="item-checkbox">
                            <CheckboxM 
                            nativeControlId={item.id}
                            checked={value} 
                            onChange={(e) => onChange({ name, value: e.target.value })}/>
                            <label htmlFor={item.id}>{label || name}</label>
                        </div>
                    )
                })
            }
        </div>
      )
}
