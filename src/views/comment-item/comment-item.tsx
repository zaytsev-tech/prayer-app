import { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import { Comment } from '../../store/ducks/comments';

interface CommentProp {
  comment: Comment;
}

export const CommentItem: FC<CommentProp> = ({ comment }) => {
  return (
    <CommentContainer>
      <Text>{comment.body || ''}</Text>
    </CommentContainer>
  );
};

const CommentContainer = styled(View)`
  margin-top: 10px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderBlack};
  overflow: hidden;
`;
