import React from 'react';

import MaterialIcon from '@material/react-material-icon';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Paragraph({ name, label, value, instruction, onChange }) {
  return (
    <div className="preview-paragraph">
        <h4>{label || name}
            <MaterialIcon icon='help_outline' />
        </h4>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello word!</p>"
            onInit={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) =>  {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ editor => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ editor => {
                console.log( 'Focus.', editor );
            } }
        />
    </div>
  )
}
