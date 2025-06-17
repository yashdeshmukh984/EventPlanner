# smart-event-planner/README.md

# Smart Event Planner

## Overview
The Smart Event Planner is a backend service that integrates with the OpenWeatherMap API to assist users in planning events based on weather conditions. It allows users to create events, analyze weather data, and receive recommendations for alternative dates if the weather is not suitable.

## Features
- **Weather API Integration**: Fetch current and 5-day forecast data from OpenWeatherMap.
- **Event Management**: Create, update, and list events with details such as name, location, date, and type.
- **Weather Analysis**: Analyze weather conditions for specific event dates and locations, providing a suitability score.
- **Recommendation Logic**: Suggest alternative dates based on weather conditions.

## API Endpoints
- **POST /events**: Create a new event.
- **GET /events**: List all events.
- **PUT /events/:id**: Update an existing event.
- **GET /weather/:location/:date**: Get weather data for a specific location and date.
- **POST /events/:id/weather-check**: Analyze weather for a specific event.
- **GET /events/:id/alternatives**: Get alternative dates for an event.
- **GET /events/:id/suitability**: Get the suitability score for an event.

## Technical Challenges
- Handle API authentication and rate limits.
- Transform raw API data into internal formats.
- Implement optional caching for weather data.

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key.
4. Run the application using `npm start`.

## License
This project is licensed under the MIT License.# SmartEventPlanner
# EventPlanner
