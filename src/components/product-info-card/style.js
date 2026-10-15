import styled from "styled-components";
export const DivFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -4px rgb(95, 95, 95);
  margin-top: 20px;
`;
export const ImagePlaceholder = styled.div`
  background-color: ${({ cardColor }) => cardColor};
  flex: 1 1 50%;
  min-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;
  .divImg {
    display: flex;
    flex-direction: column;
  }
  .badge {
    background-color: var(--color-accent);
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 6px 6px;
    border-radius: 999px;
    margin-top: 20px;
    display: inline-block;
  }
`;
export const WritingPlaceholder = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  /* border: 1px solid #e3e0e0; */
  border-radius: 0 15px 15px 0;
  .DivWritingPlaceholder {
    margin: 25px;
  }
  .p-category {
    display: inline;
    background-color: #ebebeb;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #3c3c3c;
  }
  .h3-name {
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
  }
  .Div-star-rating {
    display: flex;
    align-content: center;
    gap: 10px;
  }
  .p-rating {
    color: var(--color-text-body);
    font-size: 15px;
    margin-top: 3px;
  }
  .p-description {
    color: var(--color-text-body);
    font-size: 14px;
  }
  .div-Circle {
    color: var(--color-text-body);
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;

    p {
      margin-bottom: 6px;
    }
  }
  .p-price {
    font-size: 2rem;
    font-weight: bolder;
    color: var(--color-accent-hover);
    span {
      font-weight: lighter;
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
  }
  .div-Qty {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    p {
      margin-top: 4px;
    }

    .div-button {
      display: flex;
    }

    .button-Qty {
      border: 8px;
      padding: 6px 14px;
      border: 1px solid var(--color-text-muted2);
      background-color: var(--color-bg-white);
    }

    button {
      background-color: var(--color-bg-white);
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: var(--color-text-muted2);
    }
    .button-plus {
      border-radius: 0 10px 10px 0;
    }
    .button-n {
      border-radius: 10px 0 0 10px;
    }
    p {
      margin-bottom: 0px;
    }
  }
  .div-shop {
    display: flex;
    gap: 10px;

    > * {
      flex: 1;
    }
  }

  @media (max-width: 1200px) {
    .DivWritingPlaceholder {
      margin: 22px;
    }

    .div-shop {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1024px) {
    .h3-name {
      font-size: 22px;
    }

    .p-description,
    .div-Circle {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0 0 15px 15px;

    .DivWritingPlaceholder {
      margin: 20px 16px;
    }

    .div-shop {
      flex-direction: column;

      > * {
        width: 100%;
      }
    }
  }
`;
export const DivHh = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 25px;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const DivRelated = styled.div`
  /* margin: 40px 0; */
`;
export const H3Related = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 60px 20px 0 0;

  @media (max-width: 768px) {
    padding-top: 36px;
  }
`;
