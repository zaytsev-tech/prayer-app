import { Field, Form } from 'react-final-form';
import React from 'react';
import { View } from 'react-native';

interface Login {
  email: string;
  password: string;
}

export const SignIn = () => {
  const onSubmit = (values: Login) => {
    console.log('Test');
  };

  return (
    <Form onSubmit={onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="email" type="text" component="input" placeholder="Your e-mail" />
          <Field
            name="password"
            type="password"
            component="input"
            placeholder="Your password"
          />
          <button type="submit">Log in</button>
        </form>
      )}
    </Form>
  );
};
