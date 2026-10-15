import styled from "styled-components";

export const StyleCheckbox = styled.div`
  .class-border {
    width: 75%;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${(props) =>
      props.statusClass === "correct"
        ? "var(--color-success-light)"
        : props.statusClass === "wrong"
          ? "var(--color-error)"
          : "var(--color-bg-white)"};
    border: ${(props) =>
      props.statusClass === "correct"
        ? "2px solid var(--color-accent-hover)"
        : props.statusClass === "wrong"
          ? "2px solid var(--color-error)"
          : "2px solid var(--color-select-hover)"};
  }
  .class-border:hover {
    background-color: ${(props) =>
      !props.submitted ? "var(--color-accent1)" : "inherit"};
  }
`;
