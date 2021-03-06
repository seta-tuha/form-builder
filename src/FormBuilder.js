import React from "react";
import Block, { blockTypes } from "./components/blocks";
import { useDrop } from "react-dnd";
import PreviewWrapper from "./components/preview/PreviewWrapper";
import BlockItems from "./components/preview/items";
import FormSettings from "./components/configuration";
import PreviewDialog from "./components/preview/PreviewDialog";
import FormTypes from "./FormTypes";
import { generateSchema } from "./utils";
import Grid from "@material-ui/core/Grid";
import isEqual from "lodash.isequal";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import "./FormBuilder.css";

function formEqual({ form }, { form: nextForm }) {
  return isEqual(form, nextForm);
}

export default React.memo(function FormBuilder({
  form,
  addBlock,
  swapBlock,
  updateBlock,
  removeBlock,
  selectBlock
}) {
  const [isPreview, setIsPreview] = React.useState(false);

  const [, drop] = useDrop({
    accept: FormTypes.type,
    drop: item => {
      if (isNaN(item.index) && form.definition.length === 0) {
        addBlock(0, item.id);
        item.index = 0;
      }
    }
  });

  const onUpdateForm = ({ name, value }) =>
    updateBlock(form.selected, {
      ...form.definition[form.selected],
      [name]: value
    });

  const handleClickPreview = () => {
    setIsPreview(x => !x);
  };

  return (
    <div className="form-builder">
      <Grid container spacing={3}>
        <Grid item xs>
          <div className="blocks-wrapper">
            {blockTypes.map(block => (
              <Block key={block.type} {...block} removeBlock={removeBlock} />
            ))}
          </div>
          <hr />
          {/* <FormControlLabel
            control={
              <Switch
                checked={isPreview}
                onChange={() => setIsPreview(x => !x)}
                value="Preview"
              />
            }
            label="Preview"
          /> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickPreview}
          >
            Preview
          </Button>
          {isPreview && (
            <PreviewDialog form={form} handleClose={handleClickPreview} />
          )}
        </Grid>
        <Grid item xs={6}>
          <div ref={drop}>
            {form.definition.map((block, index) => {
              const BlockItem = BlockItems[block.type];
              return (
                <PreviewWrapper
                  index={index}
                  selected={index === form.selected}
                  key={block.name}
                  addBlock={addBlock}
                  swapBlock={swapBlock}
                  updateBlock={updateBlock}
                  removeBlock={removeBlock}
                  selectBlock={selectBlock}
                >
                  <BlockItem {...block} />
                </PreviewWrapper>
              );
            })}
            {
              <pre>
                {JSON.stringify(generateSchema(form.definition), null, 2)}
              </pre>
            }
          </div>
        </Grid>
        <Grid item xs={3}>
          <FormSettings
            onChange={onUpdateForm}
            {...form.definition[form.selected]}
          />
        </Grid>
      </Grid>
    </div>
  );
},
formEqual);
