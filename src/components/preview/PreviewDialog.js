import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import cx from "classnames";
import BlockItems from "../../components/preview/items";
import { generateState } from "../../utils";

export default function PreviewDialog({ form, handleClose }) {
  const [formState, setFormState] = React.useState(
    generateState(form.definition)
  );
  console.log(formState);

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Form builder</DialogTitle>
        <DialogContent dividers>
          {form.definition.map((block, index) => {
            const BlockItem = BlockItems[block.type];
            return (
              <div className="item-preview">
                <BlockItem
                  key={block.name}
                  {...block}
                  value={formState[block.name]}
                  onChange={({ name, value }) =>
                    setFormState(x => ({ ...x, [name]: value }))
                  }
                />
              </div>
            );
          })}
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
