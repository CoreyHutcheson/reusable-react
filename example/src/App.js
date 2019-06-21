import React from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "@corey_hutcheson/reusable-react";

export const links = [
  {
    element: "about",
    text: "About"
  },
  {
    element: "projects",
    text: "Projects"
  },
  {
    element: "contact",
    text: "Contact"
  }
];

const theme = {
  color_primary: "#03a9f4",
  color_primaryLight: "#67daff",
  color_primaryDark: "#007ac1",
  color_accent: "#ff9800",
  font_onPrimary1: "rgba(0, 0, 0, 0.87)"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar links={links} theme="custom" />

        <main>
          <section id="about">About</section>
          <section id="projects">Projects</section>
          <section id="contact">Contact</section>
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
