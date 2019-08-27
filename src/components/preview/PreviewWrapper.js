import React from "react";
import MaterialIcon from "@material/react-material-icon";
import FormTypes from "../../FormTypes";
import useSortable from "../../hooks/useSortable";
import cx from "classnames"

import "./PreviewWrapper.css";

export default function PreviewWrapper({
  isPreview,
  selected,
  children,
  index,
  swapBlock,
  addBlock,
  selectBlock,
  removeBlock
}) {
  const dropRef = React.createRef();

  const [{ isDragging, isHovered }, drag, preview, drop] = useSortable(
    index,
    FormTypes.type,
    dropRef,
    addBlock,
    swapBlock
  );

  return drop(
    preview(
      <div
        ref={dropRef}
        className={cx("preview-container", { "preview-container--selected": selected && isPreview })}
        style={isDragging || isHovered ? { opacity: 0, height: 60 } : {}}
      >
        <div className="preview-content">{children}</div>
        {
          isPreview && (
            <div className="preview-action">
              <div ref={drag}>
                <MaterialIcon icon="drag_handle" className="preview-icon" />
              </div>
              <MaterialIcon
                icon="edit"
                onClick={() => selectBlock(index)}
                className="preview-icon"
              />
              <MaterialIcon
                icon="delete_outline"
                onClick={() => removeBlock(index)}
                className="preview-icon"
              />
            </div>
          )
        }
      </div>
    )
  );
}

PreviewWrapper.defaultProps = {
  isPreview: true
}
