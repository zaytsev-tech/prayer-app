import { FC } from 'react';
import { Text, View } from 'react-native';

import { Comment } from '../../store/ducks/comments';

interface CommentProp {
  comment: Comment;
}

export const CommentItem: FC<CommentProp> = ({ comment }) => {
  return (
    <View>
      <Text>{comment.body || ''}</Text>
    </View>
  );
};
