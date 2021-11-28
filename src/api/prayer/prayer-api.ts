import { apiPrayer } from '../base-axios';

export const getPrayersAPI = () => {
  return apiPrayer.get('/prayers').then((response) => response);
};

export const postPrayerAPI = ({ columnId, title }) => {
  return apiPrayer
    .post(
      `/${columnId}/prayers`,
      JSON.stringify({
        title: title,
        description: '',
        checked: false,
      }),
    )
    .then((response) => response);
};

export const deletePrayerAPI = (prayerId) => {
  return apiPrayer.delete(`/prayers/${prayerId}`).then((response) => response);
};
