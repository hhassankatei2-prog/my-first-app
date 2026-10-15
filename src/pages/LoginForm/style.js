import styled from "styled-components";
export const LoginStyle = styled.div`
  .login-hero-user {
    background-color: var(--color-primary-light);
    text-align: center;
    padding: 80px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .login-form-user {
    background-color: var(--color-bg-white);
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    border-radius: var(--radius-lg3);
    border-top: 6px solid var(--color-accent);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--color-Ptag);
    }
    p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin-bottom: 32px;
    }
  }
  a {
    display: inline-block;
    margin-top: 30px;
    color: var(--color-text-muted);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
  }
  .login-success-card {
    padding: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .success-icon {
      text-align: center;
      background-color: #e6ffe6;
      color: var(--color-accent);
      border-radius: 100%;
      /* height: 30px; */
      margin: 0 170px 18px;
      padding: 25px;
      font-weight: lighter;
    }
  }
`;

export const DivFlix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PasswordField = styled.div`
  .form-group > label {
    /* display: none; */
  }
`;
