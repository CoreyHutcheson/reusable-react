import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import PropTypes from "prop-types";

export const Scroll = props => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = e => {
    e.preventDefault();

    // Calls link function to close LinkContainer
    props.handleLinkClick();

    let elem = 0;
    let scroll = true;

    const { type, element, offset, timeout } = props;

    if (type && element) {
      switch (type) {
        case "class":
          elem = document.getElementsByClassName(element)[0];
          scroll = !!elem;
          break;
        case "id":
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }

    scroll
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  };

  const scrollTo = (element, offSet = 0, timeout = null) => {
    if (typeof window !== "undefined") {
      const elemPos = element
        ? element.getBoundingClientRect().top + window.pageYOffset
        : 0;

      if (timeout) {
        setTimeout(() => {
          window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
        }, timeout);
      } else {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {typeof props.children === "object" ? (
        React.cloneElement(props.children, { onClick: handleClick })
      ) : (
        <span onClick={handleClick}>{props.children}</span>
      )}
    </>
  );
};

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
  handleLinkClick: PropTypes.func
};
