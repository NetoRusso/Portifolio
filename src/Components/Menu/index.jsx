import React from "react";
import Style from "./Menu.module.css";
import logo from './assets/logo_menu.png';
import ToggleButton from "../ToggleButton";
import ToggleButtonMobile from "../ToggleButtonMobile";
import { useTranslation } from "react-i18next";


const Menu = () => {
  const { t } = useTranslation();

  const scrollTo = (e) => {
    const section = document.getElementById(e);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div className={Style.menuDesktop}>
        <div className={Style.navBar}>
          <a href onClick={() => scrollTo("home")} target="_self">
            <img src={logo} alt="logo" className={Style.logo} />
          </a>
          <div className={Style.navLinks}>
            <a href onClick={() => scrollTo("about")} target="_self" className={Style.navLink}>{t("Menu.menu1")}</a>
            <a href onClick={() => scrollTo("projects")} target="_self" className={Style.navLink}>{t("Menu.menu2")}</a>
            <a href onClick={() => scrollTo("contact")} target="_self" className={Style.navLink}>{t("Menu.menu4")}</a>
          </div>
          <ToggleButton />
        </div>
      </div>
      <div className={Style.navMobile}>
        <div className={Style.bgModal} id="bgModal" onClick={() => {
          document.getElementById("bgModal").style.display = "none";
          document.getElementById("navTab").style.left = "-100%";
        }} />
        <div className={Style.btnMobile} id="btnMobile" onClick={() => {
          document.getElementById("navTab").style.left = "0";
          document.getElementById("bgModal").style.display = "block";
        }} />
        <div className={Style.navTab} id="navTab">
          <button className={Style.closeTab} id="closeTab" onClick={() => {
            document.getElementById("bgModal").style.display = "none";
            document.getElementById("navTab").style.left = "-100%";
          }}>X</button>
          <a href onClick={() => scrollTo("home")} target="_self">
            <img src={logo} alt="logo" className={Style.logo} />
          </a>
          <div className={Style.mobileNavLinks}>
            <a href onClick={() => scrollTo("about")} target="_self" className={Style.mobileNavLink}>{t("Menu.menu1")}</a>
            <a href onClick={() => scrollTo("projects")} target="_self" className={Style.mobileNavLink}>{t("Menu.menu2")}</a>
            <a href onClick={() => scrollTo("contact")} target="_self" className={Style.mobileNavLink}>{t("Menu.menu4")}</a>
          </div>
          <div className={Style.lngMobile}>
            <ToggleButtonMobile />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Menu;
