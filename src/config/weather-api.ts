import { config } from 'dotenv';

config();

export const WEATHER_API_KEY = process.env.WEATHER_API_KEY || '';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';
export const WEATHER_FORECAST_URL = `${WEATHER_API_URL}forecast`;