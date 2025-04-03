import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header.jsx";
import MainTheme from "./components/theme/Main.jsx";
import FooterTheme from "./components/theme/Footer.jsx";
import { useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
function AppTheme(props) {
  return (
    <>
      {/* Props Drilling */}
      {/* <HeaderTheme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainTheme darkMode={darkMode} />
      <FooterTheme darkMode={darkMode} /> */}

      {/* Context */}
      <DarkModeProvider>
        <HeaderTheme />
        <MainTheme />
        <FooterTheme />
      </DarkModeProvider>
    </>
  );
}

export default AppTheme;
