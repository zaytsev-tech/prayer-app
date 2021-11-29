import { FC, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import { setCommentRequest } from '../../store/ducks/comments/actions';
import { Prayer } from '../../store/ducks/prayers';
import { IconComment } from '../../ui/icons';
import { CommentsList } from '../comments-list';

interface CommentsBlockProp {
  prayer: Prayer;
}

const initialComment = {
  text: '',
};

export const CommentsBlock: FC<CommentsBlockProp> = ({ prayer }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const onSubmit = (value) => {
    dispatch(setCommentRequest(value.text));
  };
  return (
    <>
      <CommentsList />
      <Form
        onSubmit={onSubmit}
        initialValues={initialComment}
        render={({ handleSubmit }) => (
          <AddComment>
            <CommentTouch onPress={handleSubmit}>
              <IconComment width={20} height={20} color={theme.colors.brown} />
            </CommentTouch>
            <Field
              name="text"
              render={({ input: { value, onChange } }) => (
                <Input placeholder="Add a comment..." value={value} onChange={onChange} />
              )}
            />
          </AddComment>
        )}
      />
    </>
  );
};

const AddComment = styled(View)`
  margin-top: 10px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderBlack};
  overflow: hidden;
`;

const CommentTouch = styled(TouchableOpacity)`
  position: relative;
  top: 10px;
  left: 10px;
`;

const Input = styled(TextInput)`
  margin-top: -5px;
  left: 20px;
  width: 100%;
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.textBlack};
`;
