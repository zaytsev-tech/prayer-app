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

export const postColumn = ({ token, column }) => {
  return axios({
    method: 'POST',
    responseType: 'json',
    url: 'https://prayer.herokuapp.com/columns/',
    data: column,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
