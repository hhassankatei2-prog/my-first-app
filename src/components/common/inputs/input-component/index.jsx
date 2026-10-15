
import { Form } from "react-bootstrap";
// import { InputStyles } from "./style";
import { InputStyles } from "../../input-component/styles";


const InputComponent = ({ itemObject, ...flatProps }) => {
  // Support both APIs: a packed itemObject, or individual props from older pages
  const {
    type,
    name,
    onChangeFunction,
    onBlurFunction,
    fieldValue,
    fieldLabel,
    placeholder,
    inputRef,
    errorMessage,
  } = itemObject ?? flatProps;

  return (
    <InputStyles>
    <div className="form-group">
      <Form.Group className="form-group" controlId={name}>
        <Form.Label className="Form.Label">{fieldLabel}</Form.Label>
         <div className="input-wrapper">
        <Form.Control
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          type={type}
          // ?? "" keeps the input "controlled" even before the parent sets a value
          value={fieldValue ?? ""}
          isInvalid={Boolean(errorMessage)}
          onChange={(event) => onChangeFunction?.(event.target.value)}
          onBlur={() => onBlurFunction?.()}
        />
        </div>
        {/* Yup / Formik text — only rendered when the parent passed a message */}
        {errorMessage ? (
          <p className="field-error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </Form.Group>
      </div>
    </InputStyles>
  );
};
export default InputComponent;
