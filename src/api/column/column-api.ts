import axios from 'axios';

export const getColumns = (token: string) => {
  return axios({
    method: 'GET',
    url: 'https://prayer.herokuapp.com/columns',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
