import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import useSortable from '../../../hooks/useSortable';
import useForm from '../../../hooks/useForm';

const type = "items"

export default function ListItems({ value, onChange }) { 
  // const [
  //   form,
  //   addBlock,
  //   swapBlock,
  //   updateBlock,
  //   removeBlock,
  //   selectBlock
  // ] = useForm(value);

  // React.useEffect(() => {
  //   onChange({ name: type, value: form.definition })
  // }, [form])

  // console.log('form item',form.definition)
  // console.log(form.definition)
  // const [
  //   {
  //     isDragging,
  //     isHovered
  //   },
  //   drag,
  //   preview,
  //   drop,
  // ] = useSortable();

  // const onUpdateItem = React.useCallback(((index, value) => {
  //   updateBlock
  // }), [index])
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
    <div>
      <label>Field Items</label>
      <div className="list-items">
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
            ></Item>
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

  const [
    { isDragging },
    drag,
    preview,
    drop,
  ] = useSortable(index, type, addBlock, swapBlock);

  // const addBlockCallback = React.useCallback(() => addBlock(index), [index]);

  return drop(
    <div ref={preview} className="preview-container" style={(isDragging ) ? { opacity: 0 } : {}}>
      <TextField
        className="configurationItem"
        label={`Option-${index + 1}`}
        outlined='true'>
        <Input value={block.value} onChange={(e) => updateBlock(index, e.target.value)}/>
      </TextField>
      <div ref={drag}>
        <MaterialIcon icon='drag_handle' className="preview-icon" />
      </div>
      <MaterialIcon icon='add_circle_outline' onClick={() => addBlock(index)} className="preview-icon" />
      <MaterialIcon icon='delete_outline' onClick={() => removeBlock(index)} className="preview-icon" />
    </div>
  )

}
