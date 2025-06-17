function scoreWeather(temperature: number, precipitation: number, wind: number): string {
    let score = 0;

    if (temperature > 20 && temperature < 30) {
        score += 2; // Good temperature
    } else if (temperature >= 10 && temperature <= 20) {
        score += 1; // Okay temperature
    } else {
        score -= 1; // Poor temperature
    }

    if (precipitation === 0) {
        score += 2; // No rain
    } else if (precipitation > 0 && precipitation <= 5) {
        score += 1; // Light rain
    } else {
        score -= 1; // Heavy rain
    }

    if (wind < 10) {
        score += 2; // Light wind
    } else if (wind >= 10 && wind <= 20) {
        score += 1; // Moderate wind
    } else {
        score -= 1; // Strong wind
    }

    if (score >= 4) {
        return 'Good';
    } else if (score >= 2) {
        return 'Okay';
    } else {
        return 'Poor';
    }
}

export { scoreWeather };