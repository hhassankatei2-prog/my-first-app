import styled from "styled-components";

export const DivStyle = styled.div`
  .faq-hero {
    position: relative;
    background: var(--hero-gradient2);
    /* overflow: hidden; */
    text-align: center;
    padding: 80px 20px;
    height: 75vh;
  }
  .faq-hero ::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.022;
    background-image: var(--pattern-svg);
    background-size: 80px 80px;
  }
  .faq-hero-content {
    color: var(--color-text-light);
    h1 {
      font-size: 3rem;
      font-weight: bold;
      span {
        color: var(--color-accent-hover);
      }
    }
  }
`;
