import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius:20px;
  background:white;
  box-shadow: 0px 0px 10px lightgrey;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.9;
  position: absolute;
  top: 235px;
  display: none;
  border-radius:15px;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 85%;
  background-size: cover;
  background-position: center;
  // margin-bottom: 5px;
  border-radius:20px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
BackgroundImage.displayName = 'BackgroundImage';

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding:15px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
