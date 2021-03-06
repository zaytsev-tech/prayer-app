import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loginRequest, UserState } from '../../store/ducks/auth';
import { DefaultButton, DefaultInput, Spinner } from '../../ui';

interface Login {
  email: string;
  password: string;
}

const initialValues: Login = {
  email: '',
  password: '',
};

interface SelectProp {
  auth: UserState;
}

export const SignIn = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: Login) => {
    console.log(1);
    dispatch(loginRequest(values));
  };
  const select = useSelector((state: SelectProp) => state.auth);
  return (
    <View>
      {select.loading ? (
        <Spinner />
      ) : (
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={(values: Login) => {
            const errors: Login = { email: '', password: '' };
            if (values.email && values.email.indexOf('@') === -1) {
              errors.email = 'Incorrect e-mail';
            } else {
              return {};
            }
            return errors;
          }}
        >
          {({ handleSubmit }) => (
            <ViewForm>
              <Text>E-mail</Text>
              <Field
                name="email"
                render={({ input: { value, onChange }, meta }) => (
                  <>
                    <Input
                      textContentType="emailAddress"
                      keyboardType="email-address"
                      placeholder="Your e-mail"
                      value={value}
                      onChange={onChange}
                    />
                    {meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : <></>}
                  </>
                )}
              />
              <Text>Password</Text>
              <Field
                name="password"
                render={({ input: { value, onChange } }) => (
                  <Input
                    textContentType="password"
                    secureTextEntry={true}
                    placeholder="Your password"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Submit>
                <DefaultButton title="Log in" onPress={handleSubmit} />
              </Submit>
            </ViewForm>
          )}
        </Form>
      )}
    </View>
  );
};

const ViewForm = styled(View)`
  margin: 10px;
`;

const Input = styled(DefaultInput)`
  margin-bottom: 10px;
`;

const Submit = styled(View)`
  padding-top: 10px;
  margin: 30px;
`;

const ErrorMessage = styled(Text)`
  color: ${({ theme: { colors } }) => colors.red};
  margin-bottom: 10px;
  margin-top: -5px;
`;
