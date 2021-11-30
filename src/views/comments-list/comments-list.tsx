import { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Comment, commentsArraySelector } from '../../store/ducks/comments';
import { commentsRequest } from '../../store/ducks/comments/actions';
import { commentsLoading } from '../../store/ducks/comments/selectors';
import { CommentItem } from '../comment-item';

export const CommentsList: FC = () => {
  const dispatch = useDispatch();
  const commentsArray = useSelector(commentsArraySelector) as unknown[] as Comment[];
  const isCommentsLoading = useSelector(commentsLoading) as boolean;
  useEffect(() => {
    dispatch(commentsRequest());
  }, []);
  return (
    <View>
      {isCommentsLoading ? (
        <Text>Loading...</Text>
      ) : (
        commentsArray.map((comment: Comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })
      )}
    </View>
  );
};
