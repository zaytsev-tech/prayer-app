import { apiPrayer } from '../base-axios';

export const getComments = () => {
  return apiPrayer.get('/comments').then((response) => {
    return response;
  });
};

export const postComment = (comment) => {
  return apiPrayer
    .post('/comments/', JSON.stringify({ body: comment }))
    .then((response) => response);
};
