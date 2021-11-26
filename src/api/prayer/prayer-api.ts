import { apiPrayer } from '../base-axios';

export const getPrayersAPI = () => {
  return apiPrayer.get('/prayers');
};

export const postPrayerAPI = ({ columnId, title }) => {
  return apiPrayer.post(
    `/${columnId}/prayers`,
    JSON.stringify({
      title: title,
      description: '',
      checked: false,
    }),
  );
};

export const deletePrayerAPI = ({ prayerId }) => {
  return apiPrayer.delete(`/prayers/${prayerId}`);
};
