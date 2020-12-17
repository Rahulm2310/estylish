import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')}
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
  // border: 1px solid black;
  position:relative;
  margin: 0 7.5px 15px;
  border-radius:20px;
  overflow: hidden;
  box-shadow:0px 0px 10px lightgrey;

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }

  @media screen and (max-width: 700px) {
    min-width:40%;
    height:260px;
  }

  @media screen and (max-width: 500px) {
    min-width:90%;
    height:320px;
  }
`;

MenuItemContainer.displayName = 'MenuItemContainer';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius:20px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export const ContentContainer = styled.div`
  // height: 90px;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  background-color: white;
  opacity: 0.9;
  position: absolute;
  bottom:0px;
  width:100%;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
