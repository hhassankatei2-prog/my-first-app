import styled from "styled-components";

export const CheckboxStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  .form-check-label {
    color: var(--color-Ptag);
  }

  .form-check-label a {
    color: var(--color-accent);
    font-weight: 600;
    text-decoration: none;
  }

  .form-check-label a:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }
`;
