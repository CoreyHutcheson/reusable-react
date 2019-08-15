import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ScrollButton } from "./ScrollButton.jsx";

const gutter = "20px";
const gridGap = "3px";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledGallery = styled.ul`
  padding: 0;
  margin: 0;
  width: 100vw;
  display: grid;
  grid-gap: ${gridGap};
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-auto-rows: 33vw;
  list-style: none;
  overflow-x: scroll;
  white-space: nowrap;
  user-select: none;

  /* Scroll Properties */
  ${props =>
    props.scroll &&
    css`
      height: 100vw;
      grid-auto-flow: column;
      grid-template-columns: ${gutter};
      grid-auto-columns: 40%;
      grid-template-rows: repeat(3, minmax(50px, 1fr));
      grid-auto-rows: auto;

      overflow-x: scroll;
      scroll-snap-type: x proximity;

      &:before,
      &:after {
        content: "";
        width: ${gutter};
        grid-row: 1 / -1;
      }

      &:before {
        grid-column: 1;
      }

      &:after {
        grid-column: auto;
      }
    `}

  /* No Scrollbar props */
  ${props =>
    props.noScrollBar &&
    css`
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `}

  /* Media Query */
  @media (min-width: 600px) {
    width: 90vw;
    max-width: 650px;
    grid-auto-rows: minmax(178px, 217px);
    scroll-snap-type: none;

    ${props =>
      props.scroll &&
      css`
        height: 90vw;
        max-height: 650px;
      `}
  }
`;

const ImageContainer = styled.li`
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const HorizontalGallery = ({
  images,
  noScrollBar = true,
  scrollDistance,
  scrollStep,
  scrollSpeed = 25
}) => {
  const renderButton = images.length > 9;
  const scroll = images.length > 9;
  const galleryRef = useRef(null);
  const [displayPrevButton, setDisplayPrevButton] = useState(false);
  const [displayNextButton, setDisplayNextButton] = useState(true);
  const [maxScrollLeft, setMaxScrollLeft] = useState(Infinity);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [buttonDistance, setButtonDistance] = useState(scrollDistance);
  const [buttonStep, setButtonStep] = useState(scrollStep);

  const handleScrollButtonClick = direction => {
    function sideScroll(elementRef, direction, speed, distance, step) {
      const setNewScrollPosition = () => {
        if (direction === "left") {
          setScrollPosition(scrollPosition - distance);
        } else {
          setScrollPosition(scrollPosition + distance);
        }
      };

      const slideAnimation = (elementRef, direction, speed, distance, step) => {
        let scrollAmount = 0;

        let slideTimer = setInterval(function() {
          if (direction === "left") {
            elementRef.current.scrollLeft -= step;
          } else {
            elementRef.current.scrollLeft += step;
          }

          scrollAmount += step;

          if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
            setScrollPosition(elementRef.current.scrollLeft);
          }
        }, speed);
      };

      setNewScrollPosition();
      slideAnimation(elementRef, direction, speed, distance, step);
    }

    sideScroll(galleryRef, direction, scrollSpeed, buttonDistance, buttonStep);
  };

  /**
   * Used to set maxScrollLeft and [buttonDistance, buttonStep] if not given default values
   */
  useEffect(() => {
    const clientWidth = galleryRef.current.clientWidth;
    const distance = clientWidth / 2;
    const step = distance / 10;

    setMaxScrollLeft(galleryRef.current.scrollWidth - clientWidth);

    if (!buttonDistance) {
      setButtonDistance(distance);
    }

    if (!buttonStep) {
      setButtonStep(step);
    }
  }, [buttonDistance, buttonStep]);

  /**
   * Show scroll button logic
   */
  useEffect(() => {
    // Prev Button Visibility Logic
    scrollPosition > 0 + parseInt(gutter, 10)
      ? setDisplayPrevButton(true)
      : setDisplayPrevButton(false);

    // Next Button Visibility Logic
    scrollPosition < maxScrollLeft - parseInt(gutter, 10)
      ? setDisplayNextButton(true)
      : setDisplayNextButton(false);
  }, [scrollPosition, maxScrollLeft]);

  return (
    <Container>
      {/* Scroll Left Button */}
      {renderButton && (
        <ScrollButton
          displayButton={displayPrevButton}
          direction="left"
          handleClick={() => handleScrollButtonClick("left")}
        />
      )}

      <StyledGallery ref={galleryRef} scroll={scroll} noScrollBar={noScrollBar}>
        {images.map((image, index) => (
          <ImageContainer key={image.key || index}>
            <Image src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </StyledGallery>

      {/* Scroll Right Button */}
      {renderButton && (
        <ScrollButton
          displayButton={displayNextButton}
          direction="right"
          handleClick={() => handleScrollButtonClick("right")}
        />
      )}
    </Container>
  );
};

HorizontalGallery.propTypes = {
  images: PropTypes.array.isRequired,
  noScrollBar: PropTypes.bool,
  scrollDistance: PropTypes.number,
  scrollStep: PropTypes.number,
  scrollSpeed: PropTypes.number
};
