import CheckBox from '@react-native-community/checkbox';
import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { Prayer, updatePrayerRequest } from '../../store/ducks/prayers';
import { ItemDeleteButton } from '../../ui/buttons/item-delete-button';
import { IconLineUp, IconPray, IconUser } from '../../ui/icons';

interface PrayerItemProp {
  prayer: Prayer;
}

export const PrayerItem: FC<PrayerItemProp> = ({ prayer }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const onSubmit = (value: Prayer) => {
    dispatch(updatePrayerRequest({ id: value.id || 0, prayer: value }));
  };
  const titleCutter = (title: string) => {
    if (title.length > 15) {
      return title.substr(0, 14) + '...';
    } else {
      return title;
    }
  };
  return (
    <Swipeable renderRightActions={() => <ItemDeleteButton prayerId={prayer.id || 0} />}>
      <Form
        onSubmit={onSubmit}
        initialValues={prayer}
        render={({ handleSubmit }) => (
          <Container>
            <ViewPrayerItem>
              <ViewLeft>
                <IconLineUp width={25} height={25} color={theme.colors.blue} />
                <Field
                  name="checked"
                  render={({ input: { value = prayer.checked, onChange } }) => (
                    <CheckBox
                      value={value}
                      tintColors={{ true: `${theme.colors.textBlack}` }}
                      onValueChange={(value) => {
                        onChange(value);
                        handleSubmit();
                      }}
                    />
                  )}
                />
                {prayer.checked == false ? (
                  <TextItem>{titleCutter(prayer.title)}</TextItem>
                ) : (
                  <StrikeText>{titleCutter(prayer.title)}</StrikeText>
                )}
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

const StrikeText = styled(TextItem)`
  text-decoration-line: line-through;
`;
