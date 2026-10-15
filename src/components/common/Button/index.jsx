import { ButtonStyles } from "./styles";

const CustomButton = (props) => {
 const { onClickFunction, label, variant, icon: Icon, fullWidth, className, padding, type = "button" } = props;


  return (
    <ButtonStyles variant={variant} fullWidth={fullWidth} className={className} padding={padding} 
    backgroundColor={props?.backgroundColor} color={props?.color} 
    border={props?.border} backgroundColorHover={props?.backgroundColorHover} 
    colorHover={props?.colorHover} borderHover={props?.borderHover}
    borderRadius={props?.borderRadius}
    >
      <button type={type} onClick={onClickFunction}>
        {Icon && < Icon className="icon" /> }
        {label}
        </button>
    </ButtonStyles>
  );
};

export default CustomButton;