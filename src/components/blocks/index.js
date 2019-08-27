import React from 'react';
import {
  Title,
  RadioButtonChecked,
  CheckBoxOutlined,
  CalendarToday,
  StarBorderOutlined,
  Notes
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import FormTypes from '../../FormTypes';

import './Block.css';

export const blockMaps = {
  textInput: {
    label: 'Input Text',
    icon: <Title />
  },
  paragraph: {
    label: 'Paragraph',
    icon: <Notes />,
  },
  radio: {
    label: 'Radio',
    icon: <RadioButtonChecked />
  },
  checkBox: {
    label: 'Checkbox',
    icon: <CheckBoxOutlined />
  },
  dateTime: {
    label: 'Date Time',
    icon: <CalendarToday />
  },
  rating: {
    label: 'Rating',
    icon: <StarBorderOutlined />
  },
  select: {
    label: 'Select',
    icon: <MenuIcon />
  },
  switch: {
    label: 'Switch',
    icon: <EditAttributesIcon />
  }
}

export const blockTypes = [
  {
    type: 'textInput',
    label: 'Input Text',
    icon: <Title />
  },
  {
    type: 'paragraph',
    label: 'Paragraph',
    icon: <Notes />,
  },
  {
    type: 'radio',
    label: 'Radio',
    icon: <RadioButtonChecked />
  },
  {
    type: 'checkBox',
    label: 'Checkbox',
    icon: <CheckBoxOutlined />
  },
  {
    type: 'dateTime',
    label: 'Date Time',
    icon: <CalendarToday />
  },
  {
    type: 'rating',
    label: 'Rating',
    icon: <StarBorderOutlined />
  },
  {
    type: 'select',
    label: 'Select',
    icon: <MenuIcon />
  },
  {
    type: 'switch',
    label: 'Switch',
    icon: <EditAttributesIcon />
  }
];

export function BlockPreview({ type }) {
  return (
    <div className="drag-preview-container">
      {blockMaps[type].icon}
      {blockMaps[type].label}
    </div>
  )
}

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
      {icon}
      <p>{label}</p>
    </div>
  )
}