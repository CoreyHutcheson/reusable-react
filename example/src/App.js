import React from "react";

import { Box, Navbar } from "@corey_hutcheson/reusable-react";

const App = () => {
  const links = [
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

  return (
    <div>
      <Navbar links={links} />
      <Box />
    </div>
  );
};

export default App;
