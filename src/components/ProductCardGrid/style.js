import styled from "styled-components";

export const CardStyles = styled.div`
  border-radius: 20px;
  height: 100%;
  margin: 10px 0px;
  .hoverCard {
    height: 100%;
    border-radius: 14px;
    transition: box-shadow 0.2s ease-in-out;
  }
  .hoverCard:hover {
    box-shadow: 0px 0px 10px -4px rgb(0, 0, 0);
  }
  h3 {
    font-size: 1.2rem;
  }
  .image-placeholder {
    position: relative;

    height: ${(props) => props.height || "160px"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b8b8b8;
    font-size: 3rem;
    background-color: ${({ cardColor }) => cardColor};
    border-radius: 14px 14px 0 0;
  }

  .badge {
    position: absolute;
    top: 12px;
    left: 12px;
  }
  .writing-placeholder {
    height: calc(100% - ${(props) => props.height || "160px"});
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 0 0 14px 14px;
    display: flex;
    flex-direction: column;

    .p1 {
      color: var(--color-text-muted);
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
      font-weight: 400 !important;
    }
    h3 {
      font-size: 0.85rem;
      margin-bottom: 0.25rem;
    }
    .p2-description {
      color: var(--color-text-body);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-size: 0.75rem;
      margin: 8px 0;
    }
    .div1 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }
    .p12 {
      color: var(--color-text-muted);
      font-size: 0.75rem;
      margin: 0;
    }
    .p3 {
      color: var(--color-accent-hover);
      font-size: 16px;
      font-weight: bold;
      margin: 0;
    }
    .div2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      /* align-items: center; */
    }
    .div3 {
      display: flex;
      gap: 8px;
    }
    a {
      text-decoration: none;
    }
  }
`;
