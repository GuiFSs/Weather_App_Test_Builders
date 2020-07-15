import axios from 'axios';
import openWeatherApiKey from './apiKey';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: openWeatherApiKey,
  },
});

export default api;
