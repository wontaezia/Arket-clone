import React, { useState } from 'react'
import Popover from 'react-popover';
import styled from 'styled-components';

export const FilterOkBtn = (closePopover) => {
    const [popover, setPopover] = useState(false);

    return (
    <>
        <OkButton>
        <Popover onClick={() => setPopover(!popover)}>
            OK
        </Popover>
      </OkButton>
    </>
    )
}

const OkButton = styled.button`
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  background: white;
`;