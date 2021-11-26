import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import { UserState } from '../../store/ducks/auth';
import { Column } from '../../store/ducks/columns';
import { Prayer } from '../../store/ducks/prayers';
import { setPrayerRequest } from '../../store/ducks/prayers/actions';
import { IconPlus } from '../../ui';
import { PrayerItem } from '../prayer-item';

interface MyPrayersProp {
  column: Column;
  prayers?: Record<string, Prayer> | Prayer;
}

interface UserSelectProp {
  auth: UserState;
}

export const MyPrayers: FC<MyPrayersProp> = ({ column, prayers }) => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const profile = useSelector((state: UserSelectProp) => state.auth);

  const initialValue = {
    columnId: column.id,
    title: '',
    token: profile.user.token,
  };

  const submit = (values: Prayer) => {
    dispatch(setPrayerRequest(values));
  };

  return (
    <View>
      <Form
        onSubmit={submit}
        initialValues={initialValue}
        validate={(values) => {
          const errors = { title: '' };
          if (values.title == '') {
            errors.title = 'Required';
          } else {
            return {};
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <ViewInputPrayer>
            <Plus onPress={handleSubmit}>
              <IconPlus width={28} height={28} color={theme.colors.blue} />
            </Plus>
            <Field
              name="title"
              render={({ input: { value, onChange } }) => (
                <Input placeholder="Add a prayer..." value={value} onChange={onChange} />
              )}
            />
          </ViewInputPrayer>
        )}
      ></Form>
      {Object.values(prayers || {}).map((prayer) => {
        if (prayer.columnId == column.id) {
          return <PrayerItem key={prayer.id} prayer={prayer} />;
        }
      })}
    </View>
  );
};

const ViewInputPrayer = styled(View)`
  margin: 10px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderBlack};
  border-radius: 10px;
  overflow: hidden;
`;

const Plus = styled(TouchableOpacity)`
  position: relative;
  top: 10px;
  left: 10px;
`;

const Input = styled(TextInput)`
  position: relative;
  top: 0px;
  left: 25px;
  font-size: 17px;
  color: ${({ theme: { colors } }) => colors.textBlack};
`;
