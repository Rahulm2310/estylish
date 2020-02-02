import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = props => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

export default CustomButton;
