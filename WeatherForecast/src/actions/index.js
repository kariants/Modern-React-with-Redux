import axios from 'axios';

const API_KEY = '9d573565edf6c0ebd8a570e04aade05a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  const request = axios.get(url);

  //console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}




//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
