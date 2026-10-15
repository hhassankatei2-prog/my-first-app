import styled from "styled-components";

export const InputStyles = styled.div`
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-top: 0.5rem; */
    margin: 5px 0;

    label {
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
// display: flex;
// align-items: center;
// justify-content: center;
// padding: 0 12px;
// cursor: pointer;
// background-color: var(--color-bg-light);
//   .form-group {
//     margin-bottom: 1rem;
//   }
//   label {
//     display: block;
//     margin-bottom: 0.5rem;
//     font-weight: 600;
//   }
//   input {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #d1d5db;
//     border-radius: 6px;
//     box-sizing: border-box;
//   }
// `;
