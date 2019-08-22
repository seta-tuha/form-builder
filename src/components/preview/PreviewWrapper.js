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
  isSelected
}) {
  // const [{ isDragging }, drag, preview] = useDrag({
  //   item: {
  //     index,
  //     type: FormTypes.type
  //   },
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging(),
  //   })
  // });

  // const [{ isHovered }, drop] = useDrop({
  //   accept: FormTypes.type,
  //   hover: (item, monitor) => {
  //     if (isNaN(item.index)) {
  //       addBlock(index, item.id);
  //       item.index = index;
  //     }

  //     if (index === item.index) {
  //       return;
  //     }

  //     swapBlock(item.index, index);
  //     item.index = index;
  //   },
  //   collect: (monitor) => {
  //     return {
  //       isHovered: monitor.getItem() && (index === monitor.getItem().index && monitor.getItem().isBlock)
  //     }
  //   },
  //   drop: (_, monitor) => {
  //     return { index: monitor.getItem().index };
  //   }
  // })

  const [
    {
      isDragging,
      isHovered
    },
    drag,
    preview,
    drop,
  ] = useSortable(index, FormTypes.type, addBlock, swapBlock);

  return drop(
    <div ref={preview} className="preview-container" style={(isDragging || isHovered) ? { opacity: 0, height: 60 } : {}}>
      {children}
      <div ref={drag}>
        <MaterialIcon icon='drag_handle' className="preview-icon" />
      </div>
      <MaterialIcon icon='edit' onClick={() => selectBlock(index)} className="preview-icon" />
      <MaterialIcon icon='delete_outline' onClick={() => removeBlock(index)} className="preview-icon" />
    </div>
  )
}
