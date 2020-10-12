import React from 'react';
import styled from 'styled-components';
import { Items } from './Items';

export const ItemsData = ({ data }) => {

  return (
    <SingleItem>

      {data?.map(({ itemName, itemPrice, itemImage }, itemId) => {

          return (
            <Items
              key={itemId}
              name={itemName}
              price={itemPrice}
              imageUrl={itemImage}
            />
          );
        })}
    </SingleItem>
  );
};

const SingleItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
