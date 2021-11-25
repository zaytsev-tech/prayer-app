import axios from 'axios';

export const getPrayers = (token: string) => {
  return axios({
    method: 'GET',
    url: 'https://prayer.herokuapp.com/prayers',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postPrayer = ({ columnId, title, token }) => {
  return axios({
    method: 'POST',
    url: `https://prayer.herokuapp.com/columns/${columnId}/prayers`,
    data: JSON.stringify({
      title: title,
      description: '',
      checked: false,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
