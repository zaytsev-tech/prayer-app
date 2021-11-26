import axios from 'axios';

export const getPrayersAPI = (token: string) => {
  return axios({
    method: 'GET',
    url: 'https://prayer.herokuapp.com/prayers',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postPrayerAPI = ({ columnId, title, token }) => {
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

export const deletePrayerAPI = ({ prayerId, token }) => {
  return axios({
    method: 'DELETE',
    url: `https://prayer.herokuapp.com/prayers/${prayerId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
