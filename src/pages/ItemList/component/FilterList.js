import React from "react";
import styled from 'styled-components';
import { FilterSections } from "./FilterSections";
import { ColorFilter } from "./ColorFilter";
import { MaterialFilter } from "./MaterialFilter";
import { FilterClearBtn } from "./FilterClearBtn";
import { FilterOkBtn } from "./FilterOkBtn";

export const FilterList = (props) => {
  const { updateItems } = props;

  return (
    <div className="Filter">
      <FilterSections type="Color">
        <ColorFilter updateItems={updateItems} />
      </FilterSections>
      <FilterSections type="Material">
        <MaterialFilter updateItems={updateItems} />
      </FilterSections>
      <FilterBtn>
        <FilterClearBtn updateItems={updateItems}/>
        <FilterOkBtn />
      </FilterBtn>
      
    </div>
  );
};

const FilterBtn = styled.div`
  display: flex;
`;
