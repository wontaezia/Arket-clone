import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../../config';

export const FilterClearBtn = ({ updateItems }) => {

    return (
            <ClearButton
            onClick = {() => axios.get(`${API}/products`).then((res) => updateItems(res.data.data))}> CLEAR
                </ClearButton> 

    )
}

const ClearButton = styled.button`
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  background: white;
`;