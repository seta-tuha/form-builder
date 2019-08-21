import { useDrag, useDrop } from 'react-dnd';

export default function useSortable(index, type, addBlock, swapBlock) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      index,
      type,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [{ isHovered }, drop] = useDrop({
    accept: type,
    hover: (item, monitor) => {
      if (isNaN(item.index)) {
        addBlock(index, item.id);
        item.index = index;
      }

      if (index === item.index) {
        return;
      }

      swapBlock(item.index, index);
      item.index = index;
    },
    collect: (monitor) => {
      return {
        isHovered: monitor.getItem() && (index === monitor.getItem().index && monitor.getItem().isBlock)
      }
    },
    drop: (_, monitor) => {
      return { index: monitor.getItem().index };
    }
  });

  return [
    {
      isHovered,
      isDragging,
    },
    drag,
    preview,
    drop,
  ];
}
