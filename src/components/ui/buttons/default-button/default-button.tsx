import React from 'react';
import styled from 'styled-components/native';

export const DefButton = ({ ...props }) => {
  return <ButtonText {...props}>{props.title}</ButtonText>;
};

const ButtonText = styled.Text`
  font-family: SF UI Text;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  height: 30px;
  background: #bfb393;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
  position: absolute;
  text-align: center;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;
