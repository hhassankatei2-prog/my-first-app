import { useEffect } from "react";
import { ThemeProvider } from "./Theme/ThemeProvider"
import { useTranslation } from "react-i18next";

export const AppProvider = ({children}) => {
	const {i18n} = useTranslation();
	useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	);
};