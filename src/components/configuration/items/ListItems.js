import React from 'react';
import useSortable from '../../../hooks/useSortable';
import TextField from '@material-ui/core/TextField';
import { AddCircleOutline, DeleteOutlined, DragHandleOutlined } from '@material-ui/icons';

const type = "items"

export default function ListItems({ value, onChange }) {
  const swapBlock = (from, to) => {
    onChange({ name: type, value: value.map((valueBlock, index) => {
      if (index === from) {
        return value[to];
      }
      if (index === to) {
        return value[from];
      }
      return valueBlock;
    })})
  }

  const addBlock = (index) => {
    onChange({ name: type, value: [
      ...value.slice(0, index + 1),
      { value: `option-${(new Date()).getTime()}`, id: (new Date()).getTime()},
      ...value.slice(index + 1)
    ]})
  }

  const removeBlock = (index) => {
    onChange({ name: type, value: value.filter((_, vIndex) => vIndex !== index )})
  }

  const updateBlock = (index, newValue) => {
    onChange({ name: type, value: value.map((blockValue, blockIndex) => {
      if (blockIndex !== index) {
        return blockValue;
      }
      return {
        ...blockValue,
        value: newValue
      }
    })})
  }

  return (
    <div className="list-items-container">
      <label>Field Items</label>
      <div>
        {
          value.map((block, index) => (
            <Item
              key = {block.id}
              block = {block}
              index = {index}
              swapBlock = {swapBlock}
              addBlock = {addBlock}
              removeBlock = {removeBlock}
              updateBlock = {updateBlock}
            />
          ))
        }

      </div>
    </div>
  )
}

const Item = function Item({
  block,
  index,
  swapBlock,
  addBlock,
  removeBlock,
  updateBlock
}) {

  const dropRef = React.createRef();

  const [
    { isDragging },
    drag,
    preview,
    drop,
  ] = useSortable(index, type, dropRef, addBlock, swapBlock);

  return drop(preview(
    <div ref={dropRef} className="item-container" style={(isDragging ) ? { opacity: 0 } : {}}>
      <TextField
        label={`Option-${index + 1}`}
        variant="outlined"
        value={block.value}
        onChange={(e) => updateBlock(index, e.target.value)}
        fullWidth
      />
      <div ref={drag}>
        <DragHandleOutlined className="preview-icon" />
      </div>
      <AddCircleOutline onClick={() => addBlock(index)} className="preview-icon" />
      <DeleteOutlined onClick={() => removeBlock(index)} className="preview-icon" />
    </div>
  ))
}
