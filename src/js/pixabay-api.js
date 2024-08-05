import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function searchImage(query, page) {
  try {
    const response = await axios.get('', {
      params: {
        page,
        per_page: 15,
        key: '45151719-ad1ed1cd151d376d4bdd12a44',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default searchImage;
