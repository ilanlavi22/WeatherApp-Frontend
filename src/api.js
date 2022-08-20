import axios from "axios";
const owmId = process.env.REACT_APP_OWM_KEY;
const unsplashKey = process.env.REACT_APP_UNSPLASH;

const owmBaseUrl = `https://api.openweathermap.org`;
const unsplashBaseUrl = `https://api.unsplash.com`;

const owmApi = axios.create({
  baseURL: owmBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  params: {
    appid: owmId,
    units: 'metric'
  }
});

export const loadWeather = (query) =>
  owmApi.get(`data/2.5/weather?q=${query}`).then((response) => response.data)


export const loadForecast = (query) =>
  owmApi.get(`data/2.5/forecast?cnt=3&q=${query}`).then((response) => response.data)


const unsplashApi = axios.create({
  baseURL: unsplashBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  params: {
    client_id: unsplashKey,
    count: '1'
  }
});

export const loadPhoto = (query) =>
  unsplashApi.get(`photos/random?query=${query}`).then((response) => response.data)


export {
  owmApi,
  unsplashApi
};