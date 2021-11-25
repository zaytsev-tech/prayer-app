import { useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styled, { ThemeContext } from 'styled-components';

import { IconPlus } from '..';

const initialValue = {
  body: '',
};

const theme = useContext(ThemeContext);

export const InputPrayer = (onSubmit) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue}
      render={(handleSubmit) => (
        <Field
          name="inputprayer"
          render={({ input: { value, onChange } }) => (
            <ViewInputPrayer>
              <Plus onPress={() => handleSubmit}>
                <IconPlus width={28} height={28} color={theme.colors.blue} />
              </Plus>
              <Input placeholder="Add a prayer..." value={value} onChange={onChange} />
            </ViewInputPrayer>
          )}
        />
      )}
    ></Form>
  );
};

const ViewInputPrayer = styled(View)`
  margin: 10px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderBlack};
  border-radius: 10;
  overflow: hidden;
`;

const Plus = styled(TouchableOpacity)`
  position: relative;
  top: 10;
  left: 10;
`;

const Input = styled(TextInput)`
  position: relative;
  top: 0;
  left: 25;
  font-size: 17px;
  color: ${({ theme: { colors } }) => colors.textBlack};
`;
