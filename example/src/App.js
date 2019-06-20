import React from "react";
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

const App = () => {
  return (
    <>
      <Navbar links={links} theme="dark" />

      <main>
        <section id="about">About</section>
        <section id="projects">Projects</section>
        <section id="contact">Contact</section>
      </main>
    </>
  );
};

export default App;
