import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { HorizontalGallery } from "@corey_hutcheson/reusable-react";

const images = [];
for (let i = 0; i < 20; i++) {
  images.push({
    src:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    alt: "Kitten"
  });
}

storiesOf("Horizontal Scroll Gallery", module)
  .add("Default", () => <HorizontalGallery images={images} />)
  .add("<= 9 images", () => <HorizontalGallery images={images.slice(0, 9)} />)
  .add("More than 9 images", () => <HorizontalGallery images={images} />)
  .add("Custom scrollDistance", () => (
    <HorizontalGallery images={images} scrollDistance={50} />
  ))
  .add("Custom scrollSpeed", () => (
    <HorizontalGallery images={images} scrollSpeed={100} />
  ));
