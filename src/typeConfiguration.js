export default {
  textInput: ['name', 'label', 'instruction', 'required'],
  paragraph: ['name', 'label', 'instruction', 'required'],
  radio: ['name', 'label', 'items', 'instruction', 'required'],
  checkBox: ['name', 'label', 'items', 'instruction', 'required'],
  dateTime: ['name', 'label', 'dateFormat', 'instruction', 'required', 'enableTimeOption'],
  rating: ['name', 'label', 'min', 'max', 'instruction', 'required'],
};

export const initData = {
  name: '',
  label: '',
  instruction: '',
  required: false,
  items: [],
  dateFormat: 'dd-mm-yyyy',
  enableTimeOption: true
}
