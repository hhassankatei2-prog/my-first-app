import { Link } from "react-router-dom";
import styled from "styled-components";
export const StyledLink = styled(Link)`
  color: var(--color-text-muted3);
  text-decoration: none;
  font-weight: bold;
`;
export const PStyle = styled.p`
  padding: 6px 20px;
  margin-top: 8px;
`;
export const HrStyle = styled.hr`
  color: var(--color-text-muted);
  margin: 0;
`;
export const StyledLink2 = styled(Link)`
  color: var(--color-text-body);
  text-decoration: none;
  margin-bottom: 40px;
`;
export const DivContainer = styled.div`
  background-color: var(--color-bg-light);
  padding: 40px 20px 60px;

  @media (max-width: 1024px) {
    padding: 32px 16px 48px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px 40px;
  }
`;
