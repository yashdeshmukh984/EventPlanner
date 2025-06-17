class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }

    async createEvent(req, res) {
        try {
            const eventData = req.body;
            const newEvent = await this.eventService.createEvent(eventData);
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(500).json({ message: 'Error creating event', error: error.message });
        }
    }

    async updateEvent(req, res) {
        try {
            const { id } = req.params;
            const eventData = req.body;
            const updatedEvent = await this.eventService.updateEvent(id, eventData);
            if (updatedEvent) {
                res.status(200).json(updatedEvent);
            } else {
                res.status(404).json({ message: 'Event not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating event', error: error.message });
        }
    }

    async listEvents(req, res) {
        try {
            const events = await this.eventService.listEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving events', error: error.message });
        }
    }
}

export default EventController;