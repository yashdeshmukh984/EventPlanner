import { Router } from 'express';
import WeatherController from '../controllers/weather.controller';

const router = Router();
const weatherController = new WeatherController();

// Weather API Routes
router.get('/:location/:date', weatherController.getWeather);
router.post('/:id/weather-check', weatherController.analyzeWeather);
router.get('/:id/alternatives', weatherController.getAlternativeDates);
router.get('/:id/suitability', weatherController.getSuitabilityScore);

export default router;