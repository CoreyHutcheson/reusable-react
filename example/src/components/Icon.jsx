import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";

export const Icon = color => (
  <FontAwesomeIcon style={{ color }} icon={faChessKing} size="2x" />
);
