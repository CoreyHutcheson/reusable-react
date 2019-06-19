import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 500px;
  height: 200px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = () => <StyledBox>Box!!!</StyledBox>;
