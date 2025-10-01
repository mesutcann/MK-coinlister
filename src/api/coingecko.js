import axios from 'axios';

const COINGECKO_API_KEY = process.env.REACT_APP_COINGECKO_API_KEY;
const BASE_URL = 'https://api.coingecko.com/api/v3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-cg-demo-api-key': COINGECKO_API_KEY,
  },
});

// Fetch list of coins with market data
export const fetchCoins = async (page = 1, perPage = 50) => {
  try {
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: page,
        sparkline: false,
        price_change_percentage: '24h',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error;
  }
};

// Fetch single coin details
export const fetchCoinDetails = async (coinId) => {
  try {
    const response = await api.get(`/coins/${coinId}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coin details:', error);
    throw error;
  }
};

// Fetch exchanges list
export const fetchExchanges = async (page = 1, perPage = 50) => {
  try {
    const response = await api.get('/exchanges', {
      params: {
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    throw error;
  }
};

// Search coins
export const searchCoins = async (query) => {
  try {
    const response = await api.get('/search', {
      params: {
        query: query,
      },
    });
    return response.data.coins;
  } catch (error) {
    console.error('Error searching coins:', error);
    throw error;
  }
};

// Fetch trending coins
export const fetchTrendingCoins = async () => {
  try {
    const response = await api.get('/search/trending');
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    throw error;
  }
};

export default api;
