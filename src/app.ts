import express from 'express';
import { json } from 'body-parser';
import eventRoutes from './routes/event.routes';
import weatherRoutes from './routes/weather.routes';
import { errorHandler } from './utils/errors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
app.use('/events', eventRoutes);
app.use('/weather', weatherRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});