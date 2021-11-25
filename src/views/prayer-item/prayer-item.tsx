import CheckBox from '@react-native-community/checkbox';
import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { Text } from 'react-native';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { Prayer } from '../../store/ducks/prayers';
import { IconLineUp, IconPray, IconUser } from '../../ui/icons';

interface PrayerItemProp {
  prayer: Prayer;
}

const theme = useContext(ThemeContext);

export const PrayerItem: FC<PrayerItemProp> = ({ prayer }) => {
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={prayer.checked}
      render={({ handleSubmit }) => (
        <ViewPrayerItem>
          <IconLineUp width={25} height={25} color={theme.colors.blue} />
          <CheckBoxItem
            name="checked"
            render={({ input: { value, onChange } }) => (
              <CheckBox value={value} onValueChange={onChange} />
            )}
          />
          <TextItem>{prayer.title}</TextItem>
          <IconUser width={25} height={25} color={theme.colors.blue} />
          <TextItem>{Object.values(prayer.commentsIds || {}).length}</TextItem>
          <IconPray width={25} height={25} color={theme.colors.blue} />
          <TextItem>123</TextItem>
        </ViewPrayerItem>
      )}
    />
  );
};

const ViewPrayerItem = styled(Text)`
  margin: 10px;
  height: 50px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  justify-content: center;
  border-bottom-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-bottom-width: 1px;
  overflow: hidden;
`;

const TextItem = styled(Text)`
  ${({ theme: { typography } }) => typography.item};
  position: relative;
  height: 50px;
  top: 0px;
  bottom: 0px;
  font-size: 17px;
  align-self: center;
`;

const CheckBoxItem = styled(Field)`
  margin-top: 50px;
`;
