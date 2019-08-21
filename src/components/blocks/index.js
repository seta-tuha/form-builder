import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import FormTypes from '../../FormTypes';
import './Block.css';

export const blockTypes = [
  {
    type: 'textInput',
    label: 'Input Text',
    icon: 'title'
  },
  {
    type: 'paragraph',
    label: 'Paragraph',
    icon: 'notes',
  },
  {
    type: 'radio',
    label: 'Radio',
    icon: 'radio_button_checked'
  },
  {
    type: 'checkBox',
    label: 'Checkbox',
    icon: 'check_box'
  },
  {
    type: 'dateTime',
    label: 'Date Time',
    icon: 'calendar_today'
  },
  {
    type: 'rating',
    label: 'Rating',
    icon: 'star_border'
  }
];

export default function Block({ type, label, icon, removeBlock }) {
  const [{ opacity }, drag, preview] = useDrag({
    item: {
      id: type,
      type: FormTypes.type,
      isBlock: true
    },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      if (!monitor.didDrop() && !isNaN(item.index)) {
        removeBlock(item.index);
      }
    }
  });

  React.useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])
  return (
    <div ref={drag} style={{ opacity }} className="block-container">
      <MaterialIcon icon={icon} />
      <p>{label}</p>
    </div>
  )
}