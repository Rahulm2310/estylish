import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    
    padding: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 550px){
    flex-direction:column;
    align-items:center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
  

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  @media screen and (max-width: 550px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 550px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size:18px;
  font-weight:800;
`;

OptionLink.displayName = 'OptionLink';
