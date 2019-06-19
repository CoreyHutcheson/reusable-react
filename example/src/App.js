import React from "react";

import { Box, Navbar } from "@corey_hutcheson/reusable-react";

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
    <div>
      <Navbar links={links} />
      <Box />
    </div>
  );
};

export default App;
