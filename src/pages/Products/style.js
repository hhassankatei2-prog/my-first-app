import styled from "styled-components";
export const BackgroundColor = styled.div`
  background-color: var(--color-bg-light);
  position: sticky;
  top: 60px;
  z-index: 1000;
`;
export const StyleDivHeader = styled.div`
  background: linear-gradient(
    135deg,
    rgb(13, 27, 62) 0%,
    rgb(26, 58, 110) 50%,
    rgb(13, 27, 62) 100%
  );
  /* background-color: var(--color-primary-light); */
  color: var(--color-bg-light);
  height: 25vh;
  text-align: center;

  h1 {
    padding-top: 55px;
    font-weight: bold;
    font-size: 2.2rem;
  }
  p {
    margin-top: 10px;
    color: #c0c7ce;
    font-size: 0.9rem;
  }
`;

export const PageContainer = styled.div`
  /* max-width: 1400px; */
  /* margin: 0 auto; */
  padding: 40px 0px;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 16px; */
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 0px;
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 4px 16px;
    border-radius: 999px;
    border: 1px solid var(--color-text-muted1);
    background-color: var(--color-bg-white);
    color: black;
    cursor: pointer;
    font-size: 0.8rem;
    transition:
      border-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  button.active {
    background-color: var(--color-accent-hover);
    color: white;
  }
  button:not(.active):hover {
    border-color: var(--color-accent);
    color: var(--color-accent-hover);
  }

  @media (max-width: 1200px) {
    gap: 6px;

    button {
      padding: 4px 12px;
    }
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    row-gap: 8px;

    button {
      padding: 6px 12px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 6px;

    button {
      flex: 1 1 auto;
      min-width: 90px;
      padding: 7px 10px;
      font-size: 0.75rem;
    }
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  border: 1px solid var(--color-text-muted1);
  border-radius: var(--radius-lg3);
  overflow: hidden;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 33px;
    border: none;
    background-color: var(--color-bg-white);
    color: var(--color-text-body);
    cursor: pointer;
  }

  button.active {
    background-color: var(--color-accent-hover);
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ResultsCount = styled.p`
  color: var(--color-text-muted);
  font-size: 0.75rem;
  margin-bottom: 20px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  gap: 25px;

  @media (max-width: 1200px) {
    /* display: none; */
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
export const HrMargin = styled.hr`
  margin: 0;
  color: #93949e;
`;

export const DivContainer = styled.div`
  background-color: var(--color-bg-light);
  /* width: auto; */
`;
