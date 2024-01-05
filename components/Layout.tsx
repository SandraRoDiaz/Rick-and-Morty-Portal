import { useState } from "react";
import NavBar from "./NavBar";

//TODO cambiar el any del children
const Layout = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <NavBar
        onChangeTheme={() => setIsDarkTheme(!isDarkTheme)}
        isDarkTheme={isDarkTheme}
      ></NavBar>
      {children}
    </div>
  );
};

export default Layout;
