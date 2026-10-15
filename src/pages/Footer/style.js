import styled from "styled-components";

export const DivBcColor = styled.div`
  background-color: var(--color-bg-light2);

  .footer {
    background-color: var(--color-bg-white);
  }

  .footer-container {
    padding: 60px 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    input {
      height: 35px;
      width: 85%;
    }
  }

  .footer-column h4 {
    color: var(--color-text-dark);
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .footer-column p {
    color: var(--color-text-body);
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column ul li {
    margin-bottom: 6px;
  }

  .footer-column ul li a {
    color: var(--color-text-body);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s ease;
  }

  .footer-column ul li a:hover {
    color: var(--color-accent);
  }
  .newsletter-input {
    border-radius: 4px 0 0 4px;
    padding: 8px 10px;
    width: 180px;
    border: 1px solid var(--color-border);
    outline: none;
  }
  .newsletter-input:focus {
    border-color: var(--color-accent);
  }
  .newsletter-btn {
    background-color: var(--color-accent);
    color: var(--color-bg-white);
    border: none;
    padding: 0px 10px;
    height: 34.5px;
    width: 38px;
    border-radius: ${(props) =>
      props.currentLang === "ar" ? "4px 0 0 4px" : "0 4px 4px 0"};
    transition: background-color 0.3s ease;
  }
  .newsletter-btn:hover {
    background-color: var(--color-accent-hover);
  }
  /* السطر السفلي */
  .footer-bottom {
    /* margin-top: 35px; */
    padding: 24px 0px;
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-bottom p {
    color: var(--color-text-muted);
    font-size: 0.7rem;
    margin: 0;
  }

  .footer-social {
    display: flex;
    gap: 12px;
  }

  .footer-social a {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-bg-light);
    color: var(--color-text-body);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .footer-social a:hover {
    background-color: #65e3ec;
    color: var(--color-bg-white);
  }

  @media (max-width: 1200px) {
    .footer-container,
    .footer-bottom {
      width: min(1000px, calc(100% - 48px));
    }

    .footer-container {
      gap: 28px;
    }
  }

  @media (max-width: 1024px) {
    .footer-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 32px 40px;
    }

    .footer-bottom {
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding-top: 35px;
    }

    .footer-container,
    .footer-bottom {
      width: calc(100% - 32px);
    }

    .footer-container {
      grid-template-columns: 1fr;
      gap: 28px;
      padding-top: 0;
    }

    .newsletter-input {
      width: calc(100% - 48px);
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
      padding: 20px 0;
    }
  }
`;
