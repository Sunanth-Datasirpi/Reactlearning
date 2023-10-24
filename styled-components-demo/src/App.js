import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import {
  AnimatedLogo,
  DarkButton,
  FancyButton,
  StyledButton,
} from "./Components/Buttons/ButtonStyles";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

function App() {
  const [themes, setThemes] = useState("violet");

  const toggleThemes = () => {
    setThemes((curr) => (curr === "white" ? "violet" : "white"));
  };

  return (
    <ThemeContext.Provider id={themes} value={{ themes, toggleThemes }}>
      <div id={themes}>
        <ThemeProvider theme={theme}>
          <AnimatedLogo src={logo} />
          <StyledButton>Button</StyledButton>
          <br />
          <FancyButton>Fancy Button</FancyButton>
          <br />
          <DarkButton>Dark Button</DarkButton>
          <br />
          <label> {themes === "white" ? "White Mode" : "Violet Mode"}</label>
          <ReactSwitch onChange={toggleThemes} checked={themes === "violet"} />
        </ThemeProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
