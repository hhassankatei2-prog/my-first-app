
// import { InputStyles } from "./styles";
// import { useState } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputStyles } from "./styles";

const InputComponent = (props) => {
 const { type, onChangeFunction, fieldValue, fieldLabel, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const actualType = isPasswordField && showPassword ? "text" : type;

  return (
    <InputStyles>
      <div className="form-group">
        <label>{fieldLabel}</label>
        <div className="input-wrapper">
          <input
            placeholder={placeholder}
            type={actualType}
            value={fieldValue}
            onChange={(event) => onChangeFunction(event.target.value)}
          />
          {isPasswordField && (
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
      </div>
    </InputStyles>
  );

















  // const { type, onChangeFunction, fieldValue, fieldLabel, placeholder } = props;

  // return (
  //   <InputStyles>
  //     <div className="form-group">
  //       <label>{fieldLabel}</label>
  //       <input
  //         placeholder={placeholder}
  //         type={type}
  //         value={fieldValue}
  //         onChange={(event) => onChangeFunction(event.target.value)}
  //       />
  //     </div>
  //   </InputStyles>
  // );
};

export default InputComponent;