import { apiPrayer } from '../base-axios';

export const getColumns = () => {
  return apiPrayer.get('/columns').then((response) => response);
};

export const postColumn = (column) => {
  return apiPrayer.post('/columns/', column).then((response) => response);
};
