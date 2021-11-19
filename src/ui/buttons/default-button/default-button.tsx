import { AnyObject } from 'final-form';
import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface DefaultButtonProps {
  title: string;
  onPress: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ ...props }) => {
  return (
    <ButtonBlock onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonBlock>
  );
};

const ButtonBlock = styled(TouchableOpacity)`
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

const ButtonText = styled(Text)`
  ${({ theme: { typography } }) => typography.body.button};
`;
