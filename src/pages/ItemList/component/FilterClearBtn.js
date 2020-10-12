import React, { useState, useEffect } from "react";
import styled from "styled-components";




export const FilterClearBtn = ({ updateItems, colorFilter, setColorFilter, materialFilter, setMaterialFilter}) => {
 
 const clearBtn = () => {
  setColorFilter(!colorFilter); setMaterialFilter(!materialFilter);
 }
  return (
    <ClearButton
      onClick={clearBtn}
    >
      {" "}
      CLEAR
    </ClearButton>
  );
};

const ClearButton = styled.button`
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  background: white;
`;
