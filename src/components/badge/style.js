import styled from "styled-components";

export const BadgeStyle = styled.span`
  display: inline-block;
  background-color: ${(props) =>
    props.backgroundColor || "var(--color-accent)"};
  color: ${(props) => props.color || "white"};
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
`;
