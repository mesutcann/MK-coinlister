import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const api = axios.create({
  baseURL: BASE_URL,
});

// Fetch crypto news
export const fetchCryptoNews = async (page = 1, pageSize = 12) => {
  try {
    const response = await api.get('/everything', {
      params: {
        q: 'cryptocurrency OR bitcoin OR ethereum OR crypto',
        sortBy: 'publishedAt',
        language: 'en',
        page: page,
        pageSize: pageSize,
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Fetch top headlines
export const fetchTopHeadlines = async (pageSize = 6) => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        q: 'cryptocurrency',
        language: 'en',
        pageSize: pageSize,
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

// Fetch news by specific coin
export const fetchNewsByCoin = async (coinName, pageSize = 10) => {
  try {
    const response = await api.get('/everything', {
      params: {
        q: coinName,
        sortBy: 'publishedAt',
        language: 'en',
        pageSize: pageSize,
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news by coin:', error);
    throw error;
  }
};

export default api;
