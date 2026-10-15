import styled from "styled-components";

export const InputStyles = styled.div`
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;
    /* margin-bottom: 0.5rem; */

    .Form.Label {
      color: var(--color-text-dark);
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 6px;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: stretch;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    overflow: hidden;
  }

  .input-wrapper input {
    flex: 1;
    // border: none;
    padding: 10px 17px;
    outline: none;
    font-family: var(--font-primary);
  }

  .input-wrapper input:focus {
    outline: 1px solid var(--color-accent);
  }

  .toggle-password {
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0 12px;
    // cursor: pointer;
    // background-color: var(--color-bg-light);
    color: var(--color-text-muted);
    font-size: 1rem;
  }
`;
