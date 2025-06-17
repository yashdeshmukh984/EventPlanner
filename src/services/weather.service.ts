export class WeatherService {
    private apiKey: string;
    private apiUrl: string;

    constructor() {
        this.apiKey = process.env.OPENWEATHERMAP_API_KEY || '';
        this.apiUrl = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentWeather(location: string): Promise<any> {
        try {
            const response = await fetch(`${this.apiUrl}/weather?q=${location}&appid=${this.apiKey}`);
            if (!response.ok) {
                throw new Error('Error fetching current weather data');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`WeatherService: ${error.message}`);
        }
    }

    async getForecast(location: string): Promise<any> {
        try {
            const response = await fetch(`${this.apiUrl}/forecast?q=${location}&appid=${this.apiKey}`);
            if (!response.ok) {
                throw new Error('Error fetching weather forecast data');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`WeatherService: ${error.message}`);
        }
    }

    parseWeatherData(data: any): any {
        // Implement parsing logic for weather data
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            // Add more fields as needed
        };
    }
}