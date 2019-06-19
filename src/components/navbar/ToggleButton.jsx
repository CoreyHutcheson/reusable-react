import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const btnSize = `40px`;
const barThickness = `6px`;
const shift = `20%`;
const margin = `5.5px`;
const newBarLength = `33.2415536259px`;
const rotateAngle = `43.7462446217deg`;

const Container = styled.div`
  width: ${btnSize};
  height: ${btnSize};
  & > span {
    display: block;
    width: 100%;
    height: ${barThickness};
    position: relative;
    left: 0px;
    margin-top: ${margin};
    background: ${props => props.theme.font_onPrimary1};
    transition: 0.5s ease-in-out;
    transform-origin: left center;
  }
  ${props =>
    props.open &&
    css`
      & > span:nth-child(1),
      & > span:nth-child(3) {
        width: ${newBarLength};
        left: ${shift};
      }

      & > span:nth-child(1) {
        transform: rotate(${rotateAngle});
      }

      & > span:nth-child(2) {
        width: 0%;
        opacity: 0;
        left: ${shift};
      }

      & > span:nth-child(3) {
        transform: rotate(calc(-1 * ${rotateAngle}));
      }
    `}
`;

export const ToggleButton = ({ open, handleClick, className }) => (
  <Container open={open} onClick={handleClick} className={className}>
    <span />
    <span />
    <span />
  </Container>
);

ToggleButton.defaultProps = {
  open: false
};

ToggleButton.propTypes = {
  open: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
