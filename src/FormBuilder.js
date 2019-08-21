import React from 'react';
import Block, { blockTypes } from './components/blocks';
import { useDrop } from 'react-dnd';
import PreviewWrapper from './components/preview/PreviewWrapper';
import BlockItem from './components/preview/items';
import FormSettings from './components/configuration';
import FormTypes from './FormTypes';
import './FormBuilder.css';

export default function FormBuilder({
  form,
  addBlock,
  swapBlock,
  updateBlock,
  removeBlock,
  selectBlock
}) {

  const [_, drop] = useDrop({
    accept: FormTypes.type,
    drop: (item) => {
      if (isNaN(item.index) && form.definition.length === 0) {
        addBlock(0, item.id);
        item.index = 0;
      }
    }
  })

  const onUpdateForm = ({ name, value }) => updateBlock(form.selected, {
    ...form.definition[form.selected],
    [name]: value
  });

  return (
    <div className="form-builder">
      <div>
        {
          blockTypes.map(block => <Block key={block.type} {...block} removeBlock={removeBlock} />)
        }
      </div>
      <div className="form-preview-container" ref={drop}>
        {
          form.definition.map((block, index) => (
            <PreviewWrapper
              index={index}
              key={block.name}
              addBlock={addBlock}
              swapBlock={swapBlock}
              updateBlock={updateBlock}
              removeBlock={removeBlock}
              selectBlock={selectBlock}
            >
              <BlockItem type={block.type} name={block.name} />
            </PreviewWrapper>
          ))
        }
      </div>
      <div>
        <FormSettings
          onChange={onUpdateForm}
          {...form.definition[form.selected]}
        />
      </div>
    </div>
  )
}