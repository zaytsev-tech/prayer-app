import CheckBox from '@react-native-community/checkbox';
import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { Prayer } from '../../store/ducks/prayers';
import { ItemDeleteButton } from '../../ui/buttons/item-delete-button';
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
    <Swipeable renderRightActions={() => <ItemDeleteButton prayerId={prayer.id || 0} />}>
      <Form
        onSubmit={onSubmit}
        initialValues={prayer.checked}
        render={({ handleSubmit }) => (
          <Container>
            <ViewPrayerItem>
              <ViewLeft>
                <IconLineUp width={25} height={25} color={theme.colors.blue} />
                <Field
                  name="checked"
                  render={({ input: { value, onChange } }) => (
                    <CheckBox value={value} onValueChange={onChange} />
                  )}
                />
                <TextItem>{prayer.title}</TextItem>
              </ViewLeft>
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
    </Swipeable>
  );
};

const Container = styled(TouchableOpacity)`
  margin-right: 10px;
  margin-left: 10px;
  height: 50px;
  border-bottom-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-bottom-width: 1px;
  overflow: hidden;
`;

const ViewLeft = styled(View)`
  flex-direction: row;
`;

const ViewPrayerItem = styled(View)`
  flex: 1;
  top: 10px
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
