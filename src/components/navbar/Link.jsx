import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Scroll } from "./Scroll";

const contentBorderMixin = color => css`
  :after,
  :before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    border-bottom: 2px solid ${props => color || props.theme.font_onPrimary1};
    transition: 0.3s ease;
  }

  :after {
    bottom: -4px;
    left: 0;
  }

  :before {
    top: -4px;
    right: 0;
  }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.font_onPrimary1};
  border-bottom: 1px solid ${props => props.theme.color_primaryLight};
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  position: relative;
  ${props =>
    props.className === "is-current" &&
    css`
      background: ${props => props.theme.color_primaryLight};
    `};

  &:first-child {
    border-top: 1px solid ${props => props.theme.color_primaryLight};
  }

  @media (min-width: 600px) {
    padding: 0;
    border-bottom: none;

    &:first-child {
      border-top: none;
    }

    &:not(:last-of-type) {
      margin-right: ${props => props.theme.margin};
    }

    &:hover {
      background: inherit;

      :after,
      :before {
        width: 100%;
      }
    }

    ${props => contentBorderMixin(props.theme.font_onPrimary1)};

    ${props =>
      props.className === "is-current" &&
      css`
        background: inherit;
        ${props => contentBorderMixin(props.theme.color_accent)};

        :after,
        :before {
          width: 100%;
        }
      `};
  }
`;

export const Link = props => {
  const {
    element,
    handleLinkClick,
    scrollToOffset,
    children,
    className
  } = props;

  return (
    <Scroll
      type="id"
      element={element}
      handleLinkClick={handleLinkClick}
      offset={scrollToOffset}
    >
      <StyledLink href="/#" className={className}>
        {children}
      </StyledLink>
    </Scroll>
  );
};

Link.propTypes = {
  element: PropTypes.string.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  scrollToOffset: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
