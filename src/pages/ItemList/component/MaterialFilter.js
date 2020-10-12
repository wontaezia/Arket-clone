import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../../config';

const MATERIAL_LEATHER = "1";
const MATERIAL_COTTON = "2";
const MATERIAL_WOOL = "3";
const MATERIAL_LINEN = "4";

const MATERIALS = [MATERIAL_LEATHER, MATERIAL_COTTON, MATERIAL_WOOL, MATERIAL_LINEN];

const MATERIAL_NAMES = {
  [MATERIAL_LEATHER]: 'Leather',
  [MATERIAL_COTTON]: 'Cotton',
  [MATERIAL_WOOL]: 'Wool',
  [MATERIAL_LINEN]: 'Linen',
}
export const MaterialFilter = ({ updateItems }) => {
    const [selected, setSelected] = useState({
        [MATERIAL_LEATHER]: false,
        [MATERIAL_COTTON]: false,
        [MATERIAL_WOOL]: false,
        [MATERIAL_LINEN]: false,
      });

      useEffect(() => {
        const selectedOptions = Object.keys(selected).filter(el => !!selected[el])
        const queryString = selectedOptions.map(el => "material=" + el).join("&")
  
        axios.get(`${API}/products?${queryString}`).then((res) => updateItems(res.data.data));
      }, [selected])

    return (
      <MaterialFilterContainer>
        {MATERIALS.map((material) => {
          const id = `${MATERIAL_NAMES[material]}-checkbox`;
          return (
            <div key={id}>
              <label htmlFor={id}>{MATERIAL_NAMES[material]}</label>
              <input
              id={id}
              type="checkbox"
              onClick={(event) => {
                setSelected({ ...selected, [material]: event.target.checked })
              }}
            />
            </div>
          );
        })}
      </MaterialFilterContainer>
    )
}

const MaterialFilterContainer = styled.section`
 padding: 10px;
`;