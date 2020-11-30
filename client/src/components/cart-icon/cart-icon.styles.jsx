import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

CartContainer.displayName = 'CartContainer';

export const ShoppingIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';
