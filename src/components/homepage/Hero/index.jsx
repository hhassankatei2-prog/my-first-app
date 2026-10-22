import BADGE from "../../badge";
import { DivStyle } from "./style";

const HeroPage = () => {
    return(
        <DivStyle >
           < div className="faq-hero ">
           <section className="faq-hero-content container">
        <BADGE  label={"Welcome to DKUST"}  backgroundColor={"#7ed4a0"} color={"#7bf1a8"}/>
             <h1>
              Powering the Future with <span>Smart Technology</span>
             </h1>
             <p>
                We build AI-driven software, robotics systems,
                and intelligent hardware solutions that help
                businesses automate, scale, and innovate faster than ever before.
             </p>
             </section>
            </div>
        </DivStyle>
    )
};
export default HeroPage;