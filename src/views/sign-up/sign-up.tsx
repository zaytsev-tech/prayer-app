import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Registration, regRequest, UserState } from '../../store/ducks/auth';
import { DefaultButton, DefaultInput, Spinner } from '../../ui';

const initialValues: Registration = {
  email: '',
  name: '',
  password: '',
};

interface SelectProp {
  auth: UserState;
}

export const SignUp = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: Registration) => {
    dispatch(regRequest(values));
  };

  const select = useSelector((state: SelectProp) => state.auth);
  return (
    <View>
      {select.loading ? (
        <Spinner />
      ) : (
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={(values: Registration) => {
            const errors: Registration = { email: '', name: '', password: '' };
            if (values.email && values.email.indexOf('@') === -1) {
              errors.email = 'Incorrect e-mail';
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
              <Text>Name</Text>
              <Field
                name="name"
                render={({ input: { value, onChange } }) => (
                  <Input placeholder="Your name" value={value} onChange={onChange} />
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
                <DefaultButton title="Sign up" onPress={handleSubmit} />
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
