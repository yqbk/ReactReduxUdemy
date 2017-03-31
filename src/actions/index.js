import  axios from 'axios'

const API_KEY = '2bc56728817d88f15b17efb38cf8c7df'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}