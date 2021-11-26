import { apiPrayer } from '../base-axios';

export const getColumns = () => {
  return apiPrayer.get('/columns');
};

export const postColumn = ({ column }) => {
  return apiPrayer.post('/columns/', column);
};
