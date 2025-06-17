import { Router } from 'express';
import EventController from '../controllers/event.controller';

const router = Router();
const eventController = new EventController();

// Event Management Routes
router.post('/events', eventController.createEvent);
router.get('/events', eventController.listEvents);
router.put('/events/:id', eventController.updateEvent);
router.get('/events/:id/weather-check', eventController.analyzeWeather);
router.get('/events/:id/alternatives', eventController.getAlternativeDates);
router.get('/events/:id/suitability', eventController.getSuitabilityScore);

export default router;