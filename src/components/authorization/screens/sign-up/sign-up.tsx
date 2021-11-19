import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Main, regRequest } from '../../../../store/auth';
import { DefaultButton, DefInput, Spinner } from '../../../../ui';

interface Registration {
  email: string;
  name: string;
  password: string;
}

const initialValues: Registration = {
  email: '',
  name: '',
  password: '',
};

interface SelectProp {
  auth: Main;
}

export const SignUp = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: Registration) => {
    if (values.email.indexOf('@') != -1) {
      dispatch(regRequest(values));
    } else {
      alert('Incorrect e-mail');
    }
  };

  const select = useSelector((state: SelectProp) => state.auth);
  return (
    <View>
      {select.loading ? (
        <Spinner />
      ) : (
        <Form initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <ViewForm>
              <Text>E-mail</Text>
              <Field
                name="email"
                render={({ input: { value, onChange } }) => (
                  <Input
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Your e-mail"
                    value={value}
                    onChange={onChange}
                  />
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

const Input = styled(DefInput)`
  margin-bottom: 10px;
`;

const Submit = styled(View)`
  padding-top: 10px;
  margin: 30px;
`;
