import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../config';

const COLOR_WHITE = "1";
const COLOR_BLACK = "2";
const COLOR_BEIGE = "3";
const COLOR_YELLOW = "4";

const COLORS = [COLOR_WHITE, COLOR_BLACK, COLOR_BEIGE, COLOR_YELLOW];

const COLOR_NAMES = {
  [COLOR_WHITE]: 'White',
  [COLOR_BLACK]: 'Black',
  [COLOR_BEIGE]: 'Beige',
  [COLOR_YELLOW]: 'Yellow',
}

export const ColorFilter = ({ updateItems }) => {
    const [selected, setSelected] = useState({
        [COLOR_WHITE]: false,
        [COLOR_BLACK]: false,
        [COLOR_BEIGE]: false,
        [COLOR_YELLOW]: false,
      });

    useEffect(() => {
      const selectedOptions = Object.keys(selected).filter(el => !!selected[el])
      const queryString = selectedOptions.map(el => "color=" + el).join("&")

      axios.get(`${API}/products?${queryString}`).then((res) => updateItems(res.data.data));
    }, [selected])

    return (
        <ColorFilterContainer>
        {COLORS.map((color) => {
          const id = `${COLOR_NAMES[color]}-checkbox`;
          return (
            <div key={id}>
              <label htmlFor={id}>{COLOR_NAMES[color]}</label>
              <input
              id={id}
              type="checkbox"
              onClick={(event) => {
                setSelected({ ...selected, [color]: event.target.checked })
              }}
            />
            </div>
          );
        })}
      </ColorFilterContainer>
    )
}

const ColorFilterContainer = styled.section`
 padding: 10px;
`;
