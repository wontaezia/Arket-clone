import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, COLOR_NAMES } from "../constants";
import { ColorFilterWheel } from "./colorwheel/colorwheel";

export const ColorFilter = ({ updateItems, colorFilter, setColorFilter }) => {

  return (
    <ColorFilterContainer>
      <ColorFilterWheel           
        updateItems={updateItems}
        colorFilter={colorFilter}
        setColorFilter={setColorFilter}/>
    </ColorFilterContainer>
  );
};

const ColorFilterContainer = styled.section`
  padding: 10px;
  font-size: 15px;
  height: 300px;
  justify-content: left;
  `;

