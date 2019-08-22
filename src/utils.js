import { mapSchema, formDefaultValue } from './mapType'

export function generateSchema(formDefinition) {
  return {
    type: 'object',
    properties: formDefinition.reduce((currentForm, block) => {
      const { name, schema } = mapSchema[block.type](block);
      return {
        ...currentForm,
        [name]: schema
      }
    }, {})
  }
}

export function generateState(formDefinition) {
  return formDefinition.reduce((currentForm, { name, type }) => ({
    ...currentForm,
    [name]: formDefaultValue[type]
  }), {});
}
