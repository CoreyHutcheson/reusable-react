import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #70c1b3;
  @media (min-width: 600px) {
    padding: 0;
    border-bottom: none;
  }
`;

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 10px;
`;

const Slider = styled.span`
  background: #70c1b3;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    background: #ff1654;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Text = styled.span`
  color: rgba(0, 0, 0, 0.87);
`;

export const SliderButton = props => {
  const { handleChange, preText, postText, className } = props;

  return (
    <SliderButtonContainer className={className}>
      <Text>{preText}</Text>
      <Container htmlFor="slider">
        <Checkbox
          type="checkbox"
          id="slider"
          aria-label="theme toggle button"
          onChange={e => handleChange(e)}
        />
        <Slider />
      </Container>
      <Text>{postText}</Text>
    </SliderButtonContainer>
  );
};

SliderButton.defaultProps = {
  preText: "Off",
  postText: "On"
};

SliderButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  preText: PropTypes.node,
  postText: PropTypes.node,
  className: PropTypes.string
};
