import React from "react";

import { HelpOutline } from "@material-ui/icons";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Tooltip from "@material-ui/core/Tooltip";
import FormGroup from '@material-ui/core/FormGroup';

export default function Paragraph({
  name,
  label,
  value,
  instruction,
  onChange
}) {
  return (
    <FormGroup>
      <div>
        <p className="title-paragraph">
          {label || name}
          <Tooltip title={instruction || name}>
            <HelpOutline className="help-icon" />
          </Tooltip>
        </p>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello word!</p>"
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange({ name, value: data })
          }}
        />
      </div>
    </FormGroup>
  );
}
