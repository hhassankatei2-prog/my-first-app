import styled from "styled-components";

export const RegisterHero = styled.div`
  background-color: var(--color-primary-light);
  padding: 64px 20px;
  text-align: center;
  a {
    text-decoration: none;
    color: var(--color-accent);
  }
`;

export const RegisterForm = styled.div`
  background-color: var(--color-bg-white);
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 15px;
  border-top: 6px solid var(--color-accent);
  text-align: left;
  margin-bottom: 40px;
  // box-shadow: 0 2px 10px rgba(24, 34, 12, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  h3 {
    text-align: center;
    margin-bottom: 0px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-Ptag);
  }
  p {
    text-align: center;
    margin-bottom: 20px;
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }
`;

export const NameRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;

  & > * {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px;
  font-size: 0.8rem;
  color: var(--color-text-body);

  a {
    color: #07e40f;
    text-decoration: none;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;

  justify-content: center;
  /* margin-top: 200px; */
  .button {
    background-color: var(--color-bg-white);
    color: red;
  }
`;

export const HelperText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 16px;
  a {
    color: #07e40f;
    text-decoration: none;
    font-size: 1rem;
  }
`;
export const ALink = styled.a`
  a {
    color: var(--color-text-muted);
    // text-decoration: none;
    font-size: 1rem;
    margin-top: 16px;
  }
`;
export const HrMargin = styled.hr`
  margin: 0;
  color: #93949e;
`;
