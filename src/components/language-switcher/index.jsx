import { useTranslation } from "react-i18next";
import environment from "../../environment";
import { useNavigate } from "react-router-dom";
import { languages } from "../../assets/locals";
import CustomButton from "../common/Button";

const LanguageSwitcher = () => {

const {i18n} = useTranslation();
const   navigate = useNavigate();
const  currentLang = i18n.language;
const refreshPage = () => {
navigate(0);
};
const switchLanguage =(langKey)=>{
    localStorage.setItem(environment.lang,langKey);
    i18n.changeLanguage(langKey);
    // refreshPage();
};

    return (
        <>
   
        {languages.map(
          (lang) =>
            lang.key !== currentLang && (
                <CustomButton type="button" onClickFunction={() => switchLanguage(lang.key)} label={lang.label} />            
            )
        )}
      
   </>
    )
};
export default LanguageSwitcher;