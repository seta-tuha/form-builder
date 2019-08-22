import DateFormat from './DateFormat';
import EnableTimeOption from './EnableTimeOption';
import Instruction from './Instruction';
import Label from './Label';
import ListItems from './ListItems';
import Max from './Max';
import Min from './Min';
import Name from './Name';
import Required from './Required';
import './styles.css';

export default {
  name: Name,
  label: Label,
  instruction: Instruction,
  required: Required,
  items: ListItems,
  min: Min,
  max: Max,
  dateFormat: DateFormat,
  enableTimeOption: EnableTimeOption,
}
