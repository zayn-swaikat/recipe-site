import { createContext, useState, useEffect, useContext } from "react";


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  // We create a html attribute to store the dark mode setting
  useEffect(() => {
    document.documentElement.setAttribute("data-darkmode", mode);
  }, [mode]);

  // Then we create the toggle between light and dark
  const changeDarkMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, changeDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

//custom hook 
export function useTheme() {
  return useContext(ThemeContext);
}