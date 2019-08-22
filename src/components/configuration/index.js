import React from 'react';
import configurationComponents from './items';
import typeConfiguration from '../../typeConfiguration';

export default function Configuration({ type, onChange, ...data }) {
  return (
    <div>
      {
        typeConfiguration[type].map(configurationType => {
          const ConfigurationComponent = configurationComponents[configurationType];
          return (
            <ConfigurationComponent
              key={configurationType}
              value={data[configurationType]}
              onChange={onChange}
            />);
        })
      }
    </div>
  )
}