import styled from "styled-components";

export const HomeStyles = styled.div`
  .faq-hero {
    position: relative;
    background: var(--hero-gradient);
    overflow: hidden;
    text-align: center;
    color: var(--color-text-light);
    padding: 80px 20px;
  }

  .faq-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: var(--pattern-opacity);
    background-image: var(--pattern-svg);
    background-size: 80px 80px;
  }

  .faq-hero-content {
    max-width: 700px;
    margin: 12px auto;
  }

  .faq-hero-content h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .faq-hero-content p {
    font-size: 0.8rem;
    /* margin-bottom: 30px; */
  }

  .btn-primary {
    background-color: var(--color-accent);
    color: var(--color-text-light);
    margin: 20px 0;
    border-radius: var(--radius-lg);
    border: none;
    padding: 13px 28px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  .btn-primary:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
  }

  .gaq {
    background-color: var(--color-bg-light);
    text-align: center;
    padding: 50px 20px;
  }

  .gaq-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .gaq-content h2 {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }

  .gaq-content p {
    font-size: 0.8rem;
    color: var(--color-text-body);
    margin-bottom: 40px;
  }

  #faqAccordion {
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
  }

  .accordion-button {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--color-text-dark);
  }

  .accordion-button:not(.collapsed) {
    background-color: var(--color-bg-white);
    color: var(--color-accent);
  }

  .accordion-button:focus {
    box-shadow: none;
    border-color: var(--color-border);
  }

  .accordion-body {
    font-size: 0.85rem;
    color: var(--color-text-body);
  }

  .accordion-flush .accordion-item {
    border-bottom: 1px solid var(--color-border);
  }
`;
