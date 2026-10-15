
import { useTranslation } from "react-i18next";
import { HomeStyles } from "./style";

const Home = () => {
  const { t } = useTranslation();
  return (
    <HomeStyles>
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h2>{t("homeHeroTitle")}</h2>

          <p>{t("homeHeroText")}</p>
          <button className="btn-primary">
            <strong>{t("homeAskButton")}</strong>
          </button>
        </div>
      </section>

      <section className="gaq">
        <div className="gaq-content">
          <h2>{t("homeGaqTitle")}</h2>
          <p>{t("homeGaqText")}</p>
        </div>

        <div className="accordion accordion-flush" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                {t("homeAccordionItem1")}
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{t("homeAccordionBody1")}</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                {t("homeAccordionItem2")}
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{t("homeAccordionBody2")}</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                {t("homeAccordionItem3")}
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{t("homeAccordionBody3")}</div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/>  */}

    </HomeStyles>
  );
};

export default Home;