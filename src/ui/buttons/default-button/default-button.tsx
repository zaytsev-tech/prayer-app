import { FC } from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

interface DefaultButtonProps {
  title: string;
  onPress: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ title, onPress }) => {
  return (
    <ButtonBlock onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonBlock>
  );
};

const ButtonBlock = styled(Pressable)`
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
