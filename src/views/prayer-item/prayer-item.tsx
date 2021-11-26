import CheckBox from '@react-native-community/checkbox';
import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { Prayer } from '../../store/ducks/prayers';
import { IconLineUp, IconPray, IconUser } from '../../ui/icons';

interface PrayerItemProp {
  prayer: Prayer;
}

export const PrayerItem: FC<PrayerItemProp> = ({ prayer }) => {
  const theme = useContext(ThemeContext);
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={prayer.checked}
      render={({ handleSubmit }) => (
        <Container>
          <ViewPrayerItem>
            <IconLineUp width={25} height={25} color={theme.colors.blue} />
            <Field
              name="checked"
              render={({ input: { value, onChange } }) => (
                <CheckBox value={value} onValueChange={onChange} />
              )}
            />
            <TextItem>{prayer.title}</TextItem>
            <ViewIcons>
              <ViewComments>
                <IconUser width={25} height={25} color={theme.colors.blue} />
                <TextItem>{Object.values(prayer.commentsIds || {}).length}</TextItem>
              </ViewComments>
              <ViewPrayers>
                <IconPray width={25} height={25} color={theme.colors.blue} />
                <TextItem>123</TextItem>
              </ViewPrayers>
            </ViewIcons>
          </ViewPrayerItem>
        </Container>
      )}
    />
  );
};

const Container = styled(Text)`
  margin: 10px;
  width: 100%;
  align-self: stretch;
  height: 50px;
  border-bottom-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-bottom-width: 1px;
  overflow: hidden;
`;

const ViewPrayerItem = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const ViewIcons = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

const ViewPrayers = styled(View)`
  flex-direction: row;
  right: 0;
  left: 10px;
`;

const ViewComments = styled(View)`
  flex-direction: row;
  left: 0;
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
