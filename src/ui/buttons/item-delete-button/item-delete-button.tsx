import { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { UserState } from '../../../store/ducks/auth';
import { DeletePrayer, deletePrayerRequest } from '../../../store/ducks/prayers';

interface UserSelectProp {
  auth: UserState;
}

export const ItemDeleteButton: FC<DeletePrayer> = ({ prayerId, token }) => {
  const dispatch = useDispatch();
  return (
    <ViewDelete onPress={() => dispatch(deletePrayerRequest({ prayerId, token }))}>
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
