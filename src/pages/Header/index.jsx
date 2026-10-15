import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/language-switcher";
import { useTheme } from "../../context/Theme/useTheme";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
const [isNavOpen, setIsNavOpen] = useState(false);

  return (
     <header>
        <div className="container header__container">
          <h1 className="h1">DKUST</h1>
          <LanguageSwitcher />
          <button
            className="theme-toggle"
            type="button"
            aria-label={t(
              theme === "light" ? "switchToDarkMode" : "switchToLightMode",
            )}
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-label={t(isNavOpen ? "closeNavigation" : "openNavigation")}
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((isOpen) => !isOpen)}
          >
            {isNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`header__nav ${isNavOpen ? "is-open" : ""}`}>
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("navHome")}
            </NavLink>
            <NavLink
              to="/a"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("navAbout")}
            </NavLink>
            <NavLink
              to="/p"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("navPortfolio")}
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("navProducts")}
            </NavLink>
            <NavLink
              to="/s"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("navServices")}
            </NavLink>
            <NavLink to="/b">{t("navBlog")}</NavLink>
            <NavLink to="/r">{t("navResources")}</NavLink>
            <NavLink to="quiz">{t("navQuiz")}</NavLink>
            <NavLink to="/c">{t("navContact")}</NavLink>
            <NavLink to="login" id="login">
              {t("navLogin")}
            </NavLink>
            <NavLink to="register" id="login">
              {t("navRegister")}
            </NavLink>
          </nav>
        </div>
      </header>
  );
};

export default Header;