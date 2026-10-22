import { BadgeStyle } from "./style";

const BADGE = ({ label , backgroundColor, color }) => {
  // const { label , backgroundColor, color } = props;
  return (
    <BadgeStyle backgroundColor={backgroundColor} color={color}>
      {label}
    </BadgeStyle>
  );

};
export default BADGE;