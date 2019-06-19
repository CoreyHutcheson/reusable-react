import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Scrollspy from "react-scrollspy";
import Headroom from "react-headroom";

import { ToggleButton } from "./ToggleButton.jsx";
import { Link } from "./Link.jsx";

const Header = styled.header`
  background: ${props => props.theme.color_primary};
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: ${props => props.theme.margin};
  &:active,
  &:focus {
    outline: 0;
  }
`;

const StyledToggle = styled(ToggleButton)`
  margin-left: auto;
  margin-right: ${props => props.theme.margin};
  @media (min-width: 600px) {
    display: none;
  }
`;

const LinkContainer = styled(Scrollspy)`
  background: ${props => props.theme.color_primaryDark};
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50px;
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.open ? 0 : "-100%")});
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${props => props.theme.margin};
    background: inherit;
    position: relative;
    top: 0;
    transition: none;
    transform: translateX(0%);
  }
`;

const Extra = styled.div`
  text-align: center;
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: ${props => props.theme.margin};
  }
`;

export const Navbar = props => {
  const {
    icon,
    links,
    extraComp,
    theme,
    scrollToOffset,
    spyOffset,
    className
  } = props;
  const [open, setOpen] = useState(false);

  const newTheme = parentTheme => {
    const defaultProps = {
      font_onDark: "rgba(255, 255, 255, 0.87)",
      margin: "2rem"
    };

    if (theme === "custom") {
      return { ...parentTheme, ...defaultProps };
    } else {
      return {
        color_primary: theme === "dark" ? "#121212" : "#70C1B3",
        color_primaryLight: theme === "dark" ? "#383838" : "#B2DBBF",
        color_primaryDark: theme === "dark" ? "#000000" : "#1E6585",
        color_accent: theme === "dark" ? "#FF9800" : "#FF1654",
        font_onPrimary1:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.87)"
            : "rgba(0, 0, 0, 0.87)",
        ...defaultProps
      };
    }
  };

  const handleTogglerClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const Links = links.map(node => (
    <Link
      key={node.element}
      element={node.element}
      handleLinkClick={handleLinkClick}
      scrollToOffset={scrollToOffset}
    >
      {node.text}
    </Link>
  ));

  return (
    <ThemeProvider theme={newTheme}>
      <Headroom>
        <Header className={className}>
          {/* Include Icon Component if passed in via props */}
          {icon && (
            <StyledIcon
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              {icon}
            </StyledIcon>
          )}

          <StyledToggle open={open} handleClick={handleTogglerClick} />

          <LinkContainer
            open={open}
            items={links.map(node => node.element)}
            currentClassName="is-current"
            componentTag="nav"
            offset={spyOffset}
          >
            {Links}

            {extraComp && <Extra>{extraComp}</Extra>}
          </LinkContainer>
        </Header>
      </Headroom>
    </ThemeProvider>
  );
};

Navbar.defaultProps = {
  icon: false,
  theme: "light",
  scrollToOffset: 0,
  spyOffset: -300
};

Navbar.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  links: PropTypes.array.isRequired,
  extraComp: PropTypes.node,
  theme: PropTypes.oneOf(["light", "dark", "custom"]),
  scrollToOffset: PropTypes.number,
  spyOffset: PropTypes.number,
  className: PropTypes.string
};
