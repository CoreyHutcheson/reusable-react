import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const chevronColor = "rgba(255, 255, 255, 0.87)";
const chevronThickness = "7px";
const chevronHeight = "40px";

const Arrow = styled.div`
  display: none;

  @media (min-width: 600px) {
    visibility: ${props => (props.displayButton ? "visible" : "hidden")};
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 0.87);
    min-width: 40px;
    min-height: 150px;
    user-select: none;
    border-radius: ${({ direction }) =>
      direction === "left" ? "0 5px 5px 0" : "5px 0 0 5px"};
    transform: ${({ direction }) =>
      direction === "left" ? "translateX(100%)" : "translateX(-100%)"};
  }
`;

const Chevron = styled.div`
  position: relative;
  text-align: center;
  height: ${chevronThickness}; /* Changes line thickness */
  width: ${chevronHeight}; /* Changes arrow height */
  transform: ${props =>
    props.direction === "left" ? "rotate(90deg)" : "rotate(-90deg)"};

  :before,
  :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    background: ${chevronColor};
  }

  :before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  :after {
    transform: skew(0deg, -30deg);
  }
`;

export const ScrollButton = ({ displayButton, direction, handleClick }) => {
  return (
    <Arrow
      onClick={handleClick}
      displayButton={displayButton}
      direction={direction}
    >
      <Chevron direction={direction} />
    </Arrow>
  );
};

ScrollButton.propTypes = {
  displayButton: PropTypes.bool,
  direction: PropTypes.oneOf(["left", "right"]),
  handleClick: PropTypes.func
};
