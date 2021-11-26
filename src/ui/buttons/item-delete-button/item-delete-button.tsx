import { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { deletePrayerRequest } from '../../../store/ducks/prayers';

interface DeleteButtonProp {
  prayerId: number;
}

export const ItemDeleteButton: FC<DeleteButtonProp> = ({ prayerId }) => {
  const dispatch = useDispatch();
  return (
    <ViewDelete onPress={() => dispatch(deletePrayerRequest(prayerId))}>
      <TextDelete>Delete</TextDelete>
    </ViewDelete>
  );
};

const ViewDelete = styled(TouchableOpacity)`
  background-color: ${({ theme: { colors } }) => colors.red};
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const TextDelete = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 400;
  font-size: 13px;
  padding-horizontal: 10px;
  align-self: center;
  align-items: center;
`;
