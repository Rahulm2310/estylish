import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding:30px;
  background:white;
  box-shadow:0px 0px 10px lightgrey;
  border-radius:20px;

  @media screen and (max-width:700px){
    width:90%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
