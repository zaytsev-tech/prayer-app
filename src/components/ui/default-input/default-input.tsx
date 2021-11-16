import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';

export const DefInput = ({ ...props }) => {
  return <Input {...props} />;
};

const Input = styled(TextInput)`
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(66, 78, 117, 0.08);
  border-radius: 10px;
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  text-align: left;
`;
