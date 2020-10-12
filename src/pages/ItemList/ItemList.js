import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimpleSlider from './component/SimpleSlider';
import Popover from 'react-popover';
import styled from 'styled-components';
import { API } from '../../config';
import { Heading } from './component/Heading';
// import { FilterCount } from './component/FilterCount';
import { ItemsData } from './component/ItemsData';
import { FilterList } from './component/FilterList';

export default function ItemList(props) {
  const [popover, setPopover] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/products`).then((res) => setListData(res.data.data));
  }, []);

  return (
    <>
      <Heading />
      <SimpleSlider />
      <FilterContainer>
        {/* <FilterCount /> */}
        <Popover isOpen={popover} place="below" body={<FilterList updateItems={setListData} closePopover ={setPopover}/>}>
          <button className="filter" onClick={() => setPopover(!popover)}>
            Filter
          </button>
        </Popover>
      </FilterContainer>
      <ItemsData data={listData} onButtonClick={setListData} />
    </>
  );
}

const FilterContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

const filter = styled.div``;
