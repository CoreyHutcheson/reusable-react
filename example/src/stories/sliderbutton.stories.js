import React from "react";
import { storiesOf } from "@storybook/react";

import { SliderButton } from "../components/slider-button/SliderButton.jsx";

storiesOf("Slider Button", module).add("Default", () => (
  <SliderButton handleChange={() => console.log("changed")} />
));
