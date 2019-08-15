import React from "react";
import { ThemeProvider } from "styled-components";
import { Navbar, HorizontalGallery } from "@corey_hutcheson/reusable-react";

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

const images = [];

const App = () => {
  for (let i = 0; i < 20; i++) {
    images.push({
      src:
        "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      alt: "Kitten"
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar links={links} theme={theme} />

        <main>
          <section id="about">About</section>
          <section id="projects">
            <HorizontalGallery images={images} />
          </section>
          <section id="contact">Contact</section>
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
