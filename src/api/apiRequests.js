import axios from 'axios';

export const getHotelsApi = async (data) => {
  return await axios
    .get(
      `https://engine.hotellook.com/api/v2/cache.json?location=${data.city}&currency=rub&checkIn=${data.checkIn}&checkOut=${data.checkOut}&limit=10`
    )
    .catch((error) => {
      console.log(error.toJSON());
      return error.toJSON();
    });
};
