import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import FormTypes from '../../FormTypes';
import useSortable from '../../hooks/useSortable';

import './PreviewWrapper.css';

export default function PreviewWrapper({
  children,
  index,
  swapBlock,
  addBlock,
  selectBlock,
  removeBlock,
}) {
  const dropRef = React.createRef();

  const [
    {
      isDragging,
      isHovered
    },
    drag,
    preview,
    drop,
  ] = useSortable(index, FormTypes.type, dropRef , addBlock, swapBlock);

  return drop(preview(
    <div
      ref={dropRef}
      className="preview-container"
      style={(isDragging || isHovered) ? { opacity: 0, height: 60 } : {}}
    >
      {children}
      <div ref={drag}>
        <MaterialIcon icon='drag_handle' className="preview-icon" />
      </div>
      <MaterialIcon
        icon='edit'
        onClick={() => selectBlock(index)}
        className="preview-icon"
      />
      <MaterialIcon
        icon='delete_outline'
        onClick={() => removeBlock(index)}
        className="preview-icon"
      />
    </div>
  ))
}
