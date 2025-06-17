export class EventService {
    private events: any[] = [];

    createEvent(eventData: any) {
        const newEvent = { id: this.events.length + 1, ...eventData };
        this.events.push(newEvent);
        return newEvent;
    }

    updateEvent(id: number, updatedData: any) {
        const eventIndex = this.events.findIndex(event => event.id === id);
        if (eventIndex === -1) {
            throw new Error('Event not found');
        }
        this.events[eventIndex] = { ...this.events[eventIndex], ...updatedData };
        return this.events[eventIndex];
    }

    listEvents() {
        return this.events;
    }

    getEventById(id: number) {
        const event = this.events.find(event => event.id === id);
        if (!event) {
            throw new Error('Event not found');
        }
        return event;
    }
}