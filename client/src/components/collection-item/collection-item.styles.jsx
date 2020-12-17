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
    width: 45vw;

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
  // width: 80%;
  opacity: 1;
  position: absolute;
  top: 235px;
  display: none;
  padding:3px 5px;
  border-radius:50%;
  backgroud:white;
  color:black;
  min-width: auto;
  width: 35px !important;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  border: none;
  font-size: 20px;

  & i:hover{
    font-size:20px;
  }


  // @media screen and (max-width: 800px) {
  //   display: block;
  //   opacity: 0.9;
  //   min-width: unset;
  //   padding: 0 10px;
  // }
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
  width: 75%;
  margin-bottom: 15px;

  & p{
    margin: 0px;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
