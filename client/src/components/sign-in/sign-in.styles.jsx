import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  padding:30px;
  background:white;
  box-shadow:0px 0px 10px lightgrey;
  border-radius:20px;

  @media screen and (max-width:700px){
    width:90%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
`;
