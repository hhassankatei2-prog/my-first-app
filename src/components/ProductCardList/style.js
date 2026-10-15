import styled from "styled-components";

export const CardListStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  background-color: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg3);
  padding: 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95px;
    height: 95px;
    border-radius: 15px;
    background-color: ${({ cardColor }) => cardColor};
  }
  h3 {
    font-size: 1rem;
    margin: 4px 2px 0px;
  }
  .div1 {
    display: flex;
    justify-content: space-between;
  }
  .div2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  .div3 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .div4 {
    display: flex;
    gap: 8px;
    margin-left: auto;
  }
  a {
    text-decoration: none;
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* gap: 8px; */
  }
  .p1 {
    color: var(--color-accent-hover);
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #d3fbd6;
    padding: 2px 6px;
    display: inline-block;
    border-radius: 25px;
    text-align: center;
  }
  .p2 {
    color: var(--color-text-muted);
    font-size: 0.75rem;
  }
  .p3 {
    color: var(--color-accent-hover);
    font-weight: bold;
    font-size: 1.1rem;
  }
  .span {
    font-size: 0.75rem;
    font-weight: 400;
  }
  .p4 {
    color: var(--color-text-body);
    font-size: 0.87rem;
    margin-top: 8px;
  }
  .p5 {
    color: var(--color-text-body);
    font-size: 0.75rem;
    margin-top: 5px;
  }

  @media (max-width: 1200px) {
    padding: 18px;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    .p4 {
      font-size: 0.8rem;
    }

    .div4 {
      gap: 6px;
    }
  }

  @media (max-width: 768px) {
    display: none;
    padding: 16px;

    .divImg {
      width: 100%;
      height: 130px;
    }

    .div1,
    .div2 {
      gap: 12px;
      flex-wrap: wrap;
    }

    .p3 {
      margin-left: auto;
    }

    .div4 {
      width: 100%;
      margin-left: 0;

      .CustomButton {
        flex: 1;
      }
    }
  }
`;
