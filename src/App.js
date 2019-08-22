import React from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragLayer from './components/DragLayer';

import FormBuilder from './FormBuilder';
import useForm from './hooks/useForm';

function App() {
  const [
    form,
    addBlock,
    swapBlock,
    updateBlock,
    removeBlock,
    selectBlock
  ] = useForm([
    {
      name: 'textInput-1234',
      type: 'textInput'
    },
    {
      name: 'paragraph-2345',
      type: 'paragraph'
    },
    {
      name: 'checkBox-3456',
      type: 'checkBox',
      items: [
        {
          value: 'option 1',
          id: '1'
        },
        {
          value: 'option 2',
          id: '2'
        },
        {
          value: 'option 3',
          id: '3'
        }
      ]
    }
  ]);
  console.log(form.definition)
  return (
    <DndProvider backend={HTML5Backend}>
      <DragLayer />
      <FormBuilder
        form={form}
        addBlock={addBlock}
        swapBlock={swapBlock}
        updateBlock={updateBlock}
        removeBlock={removeBlock}
        selectBlock={selectBlock}
      />
    </DndProvider>
  );
}

export default App;
