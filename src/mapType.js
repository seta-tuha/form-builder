function ratingSchema(block) {
  return {
    name: block.name,
    schema: {
      minimum: block.min,
      maximum: block.max,
      type: 'integer'
    }
  }
}

function stringSchema(block) {
  return {
    name: block.name,
    schema: {
      type: 'string'
    }
  }
}

function enumSchema(block) {
  return {
    name: block.name,
    schema: {
      type: 'string',
      enum: block.items.reduce((currentEnums, { value }) => [
        ...currentEnums,
        value
      ], [])
    }
  }
}

function arraySchema(block) {
  return {
    name: block.name,
    schema: {
      type: 'array',
      items: {
        type: 'string',
        enum: block.items.reduce((currentEnums, { value }) => [
          ...currentEnums,
          value
        ], [])
      }
    }
  }
}

function booleanSchema(block) {
  return {
    name: block.name,
    schema: {
      type: 'boolean'
    }
  }
}


export const mapSchema = {
  rating: ratingSchema,
  textInput: stringSchema,
  radio: enumSchema,
  dateTime: stringSchema,
  geoPoint: stringSchema,
  ip: stringSchema,
  paragraph: stringSchema,
  checkBox: arraySchema,
  switch: booleanSchema,
  select: stringSchema
}

export const formDefaultValue = {
  rating: 0,
  textInput: '',
  radio: '',
  dateTime: new Date(),
  switch: false,
  checkBox: '',
  ip: '',
  geoPoint: '',
  select: ''
}
