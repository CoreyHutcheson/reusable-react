import React from "react";
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "@corey_hutcheson/reusable-react";
import { links } from "../App.js";

const Icon = color => (
  <FontAwesomeIcon style={{ color }} icon={faChessKing} size="2x" />
);

const setup = storyFn => (
  <main>
    {storyFn()}

    <section id="about">About</section>
    <section id="projects">Projects</section>
    <section id="contact">Contact</section>
  </main>
);

storiesOf("Navbar", module)
  .addDecorator(storyFn => setup(storyFn))
  .add("Default", () => <Navbar links={links} />)
  .add("Light", () => <Navbar links={links} theme="light" />)
  .add("Light w/ Icon", () => <Navbar links={links} icon={Icon("black")} />)
  .add("Dark", () => <Navbar links={links} theme="dark" />)
  .add("Dark w/ Icon", () => (
    <Navbar links={links} theme="dark" icon={Icon("white")} />
  ));
