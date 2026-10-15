

import { InputTypes } from "../../../../constants/enums";
// import InputComponent from "../../input-component";
import CheckboxComponent from "../checkbox";
import InputComponent from "../input-component";



const InputProvider = ({ itemObject, ...flatProps }) => {
  // Same field config, whether the page passed itemObject or loose props
  const field = itemObject ?? flatProps;
  const type = field?.type;

  if (type === InputTypes.CHECKBOX || type === InputTypes.RADIO) {
    return <CheckboxComponent itemObject={field} />;
  }

  // Text-like controls (value is a string or number)
  if (
    type === InputTypes.TEXT ||
    type === InputTypes.EMAIL ||
    type === InputTypes.PASSWORD ||
    type === InputTypes.NUMBER ||
    type === InputTypes.TEL
  ) {
    // `field` is itemObject OR the flat props — same object the page described
    return <InputComponent itemObject={field} />;
  }

  // Unknown type → render nothing (keeps the page from crashing)
  return null;
};
export default InputProvider;
