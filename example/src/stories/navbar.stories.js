import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Navbar } from "@corey_hutcheson/reusable-react";
import { Icon } from "../components/Icon.jsx";
import { Slider } from "../components/slider-button/Slider.jsx";

import { links } from "../App.js";
import "./navbar.css";

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
  ))
  .add("w/ SliderButton", () => (
    <Navbar
      links={links}
      extraComp={<Slider handleChange={() => action("toggled")} />}
    />
  ));
