export interface Event {
    id?: string;
    name: string;
    location: string;
    date: Date;
    type: string;
    weatherData?: WeatherData;
}

export interface WeatherData {
    temperature: number;
    precipitation: number;
    wind: number;
    suitabilityScore?: string;
}