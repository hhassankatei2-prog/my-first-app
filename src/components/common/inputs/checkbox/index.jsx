
import { Form } from "react-bootstrap";
import { CheckboxStyles } from "./style";


const CheckboxComponent = ({ itemObject, ...flatProps }) => {
  const {
    type,
    id,
    name,
    fieldLabel,
    fieldValue,
    onChangeFunction,
    onBlurFunction,
    errorMessage,
  } = itemObject ?? flatProps;

  return (
    <CheckboxStyles>
      <Form.Check
        type={type}
        id={id || name}
        name={name}
        label={fieldLabel}
        checked={Boolean(fieldValue)}
        onChange={(event) => onChangeFunction?.(event.target.checked)}
        onBlur={() => onBlurFunction?.()}
      />
      {errorMessage ? (
        <p className="field-error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </CheckboxStyles>
  );
};
export default CheckboxComponent;
