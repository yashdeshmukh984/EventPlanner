export interface Weather {
    location: string;
    date: string;
    temperature: number;
    precipitation: number;
    wind: number;
    suitabilityScore: 'Good' | 'Okay' | 'Poor';
    details: string;
}