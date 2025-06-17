export class WeatherController {
    constructor(private weatherService: WeatherService) {}

    async getWeather(req, res) {
        const { location, date } = req.params;
        try {
            const weatherData = await this.weatherService.fetchWeather(location, date);
            res.status(200).json(weatherData);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching weather data', error: error.message });
        }
    }

    async analyzeWeather(req, res) {
        const { id } = req.params;
        try {
            const analysisResult = await this.weatherService.analyzeWeatherForEvent(id);
            res.status(200).json(analysisResult);
        } catch (error) {
            res.status(500).json({ message: 'Error analyzing weather', error: error.message });
        }
    }

    async suggestAlternatives(req, res) {
        const { id } = req.params;
        try {
            const alternatives = await this.weatherService.suggestAlternativeDates(id);
            res.status(200).json(alternatives);
        } catch (error) {
            res.status(500).json({ message: 'Error suggesting alternative dates', error: error.message });
        }
    }

    async getSuitability(req, res) {
        const { id } = req.params;
        try {
            const suitabilityScore = await this.weatherService.getSuitabilityScore(id);
            res.status(200).json(suitabilityScore);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching suitability score', error: error.message });
        }
    }
}