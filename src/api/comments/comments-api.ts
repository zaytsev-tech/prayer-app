import { Comment } from '../../store/ducks/comments';
import { apiPrayer } from '../base-axios';

export function fetchComments() {
  return apiPrayer.get('/comments');
}

export function postComment(comment: Comment) {
  return apiPrayer.post('/comments', comment);
}
