import styled from "styled-components";

export const ButtonStyles = styled.div`
  button {
    width: 100%;
    width: ${(props) => props.fullWidth || "100%"};

    background-color: ${(props) =>
      props.backgroundColor ||
      (props.variant === "white"
        ? "var(--color-bg-white)"
        : "var(--color-accent)")};

    color: ${(props) =>
      props.color ||
      (props.variant === "white"
        ? "var(--color-text-body)"
        : "var(--color-bg-white)")};

    border: ${(props) =>
      props.border ||
      (props.variant === "white"
        ? "1px solid var(--color-text-muted)"
        : "1px solid var(--color-accent)")};

    border-radius: ${(props) => props.borderRadius || "8px"};
    padding: ${(props) => props.padding || "10px 14px"};
    font-weight: 600;
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;
    outline: none;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
    white-space: nowrap;
    font-size: 0.85rem;
    .icon {
      font-size: 1rem;
    }
    &:hover {
      background-color: ${(props) =>
        props.backgroundColorHover ||
        (props.variant === "white"
          ? "var(--color-bg-light)"
          : "var(--color-accent-hover2)")};
      border: 1px solid
        ${(props) =>
          props.borderHover ||
          (props.variant === "white"
            ? "var(--color-accent)"
            : "var(--color-accent-hover2)")};

      outline: none;
      color: ${(props) =>
        props.colorHover ||
        (props.variant === "white"
          ? "var(--color-accent)"
          : "var(--color-bg-white)")};
    }
  }
`;
