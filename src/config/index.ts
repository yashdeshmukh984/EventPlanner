export const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/smart-event-planner',
    weatherApi: {
        key: process.env.WEATHER_API_KEY,
        baseUrl: 'https://api.openweathermap.org/data/2.5/',
    },
};