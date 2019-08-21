import React from 'react';
import './style.css';

export default function Item({ name, type }) {
  return <div className="item-container">{name || type}</div>
}
