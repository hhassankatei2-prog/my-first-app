import styled from "styled-components";

export const QuizStyle = styled.div`
  .head-style {
    position: relative;
    background: var(--hero-gradient);
    text-align: center;
    color: var(--color-text-light);
    padding: 100px 20px;
    height: 40vh;
    overflow: hidden;
    h2 {
      font-size: 2.3rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.88rem;
    }
  }
  .head-style::after {
    position: absolute;
    background-image: var(--pattern-svg);
    opacity: var(--pattern-opacity);
    inset: 0;
    content: "";
  }
  .style-checkbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 8px;
  }
`;
