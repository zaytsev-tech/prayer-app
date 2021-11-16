import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Button, Text, TextInput, View } from 'react-native';
import { DefButton, DefInput } from '../../../ui';

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

export const SignUp = () => {
  const onSubmit = (values: Registration) => {
    if (values.email.indexOf('@') != -1) {
      console.log(values);
    } else {
      alert('Incorrect e-mail');
    }
  };

  return (
    <View>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <ViewForm>
            <Text>E-mail</Text>
            <Field
              name="email"
              render={({ input: { value, onChange } }) => (
                <Input
                  className={Input}
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
                <Input
                  className={Input}
                  placeholder="Your name"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Text>Password</Text>
            <Field
              name="password"
              render={({ input: { value, onChange } }) => (
                <Input
                  className={Input}
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="Your password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Submit>
              <DefButton title="Sign up" onPress={handleSubmit} />
            </Submit>
          </ViewForm>
        )}
      </Form>
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
