import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { UserState } from '../../store/ducks/auth';
import { setColumnRequest } from '../../store/ducks/columns/actions';
import { DefaultButton, DefaultInput, Spinner } from '../../ui';

interface Column {
  title: string;
  description: string;
}

interface UserSelectProp {
  auth: UserState;
}

const initialValues = {
  title: '',
  description: '',
};

export const AddColumn = ({ navigation: { goBack } }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: UserSelectProp) => state.auth);
  const onSubmit = (values: Column) => {
    dispatch(setColumnRequest({ token: profile.user.token, column: values }));
    goBack();
  };
  return (
    <View>
      {profile.loading ? (
        <Spinner />
      ) : (
        <Form initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <ViewForm>
              <Text>Title</Text>
              <Field
                name="title"
                render={({ input: { value, onChange } }) => (
                  <Input placeholder="Title column" value={value} onChange={onChange} />
                )}
              />
              <Text>Description</Text>
              <Field
                name="description"
                render={({ input: { value, onChange } }) => (
                  <Input placeholder="Description" value={value} onChange={onChange} />
                )}
              />
              <Submit>
                <DefaultButton title="Create column" onPress={handleSubmit} />
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
