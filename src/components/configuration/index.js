import React from 'react';
import configurationComponents from './items';
import typeConfiguration from '../../typeConfiguration';

export default function Configuration({ type, onChange, ...data }) {
  return (
    <>
      {
        typeConfiguration[type].map(configurationType => {
          const ConfigurationCompoent = configurationComponents[configurationType];
          return (
            <ConfigurationCompoent
              key={configurationType}
              value={data[configurationType]}
              onChange={onChange}
            />);
        })
      }
    </>
  )
}