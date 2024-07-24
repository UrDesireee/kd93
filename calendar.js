document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: "Defeat 100 lvl 8 Forts", time: "24.07 19:00 UTC" },
        { name: "Pass 7 Opens", time: "25.07 06:25UTC" },
        { name: "Another Event", time: "26.07 10:00UTC" }
    ];

    const currentEventElement = document.getElementById('currentEvent');
    const eventsContainer = document.getElementById('eventsContainer');
    const now = new Date();

    let ongoingEvent = null;

    events.forEach(event => {
        const eventDate = parseDate(event.time);

        const eventElement = document.createElement('div');
        eventElement.textContent = `${event.name} - ${event.time}`;
        eventsContainer.appendChild(eventElement);
        
        if (now >= eventDate) {
            ongoingEvent = { name: event.name, date: eventDate };
        }
    });

    if (ongoingEvent) {
        currentEventElement.textContent = `${ongoingEvent.name} at ${formatDate(ongoingEvent.date)}`;
    } else {
        currentEventElement.textContent = "No current event";
    }

    function parseDate(dateStr) {
        const [day, monthTime] = dateStr.split('.');
        const [month, time] = monthTime.split(' ');
        const [hour, minute] = time.replace('UTC', '').split(':');
        return new Date(Date.UTC(new Date().getFullYear(), month - 1, day, hour, minute));
    }

    function formatDate(date) {
        return `${date.getUTCDate()}.${date.getUTCMonth() + 1} ${date.getUTCHours()}:${date.getUTCMinutes()}UTC`;
    }
});
