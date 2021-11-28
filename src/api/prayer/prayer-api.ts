import { apiPrayer } from '../base-axios';

export const getPrayersAPI = () => {
  return apiPrayer.get('/prayers').then((response) => response);
};

export const postPrayerAPI = ({ columnId, title }) => {
  return apiPrayer
    .post(
      `/columns/${columnId}/prayers`,
      JSON.stringify({
        title: title,
        description: '',
        checked: false,
      }),
    )
    .then((response) => response);
};

export const updatePrayerAPI = ({ id, prayer }) => {
  console.log('id: ', id);
  console.log('obj: ', prayer);
  return apiPrayer
    .put(
      `/prayers/${id}`,
      JSON.stringify({
        title: prayer.title,
        description: prayer.description,
        checked: prayer.checked,
      }),
    )
    .then((response) => response);
};

export const deletePrayerAPI = (prayerId) => {
  return apiPrayer.delete(`/prayers/${prayerId}`).then((response) => response);
};
