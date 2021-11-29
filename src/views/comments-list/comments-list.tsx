import { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Comment, commentsArraySelector } from '../../store/ducks/comments';
import { commentsRequest } from '../../store/ducks/comments/actions';
import { CommentItem } from '../comment-item';

export const CommentsList: FC = () => {
  const dispatch = useDispatch();
  const commentsArray = useSelector(commentsArraySelector) as unknown[] as Comment[];
  useEffect(() => {
    dispatch(commentsRequest());
  }, []);
  return (
    <View>
      {commentsArray.map((comment: Comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
      ;
    </View>
  );
};
