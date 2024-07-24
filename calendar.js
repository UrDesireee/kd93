document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }

    // Event Handling (for calendar.html)
    if (document.getElementById('currentEvent')) {
        // Input your events here
        const events = [
            { name: "Defeat 100 lvl 8 Forts", time: "2024-07-23 19:00" },
            { name: "Pass 7 Opens", time: "2024-07-25 06:25" },
            { name: "Another Event", time: "2024-07-26 10:00" }
        ];

        updateEvents(events);
    }
});

function updateEvents(events) {
    const currentEventElement = document.getElementById('currentEvent');
    const eventsContainer = document.getElementById('eventsContainer');
    const now = new Date();

    // Sort events by date
    events.sort((a, b) => new Date(a.time) - new Date(b.time));

    let currentEvent = null;
    let upcomingEvents = [];

    events.forEach(event => {
        const eventDate = new Date(event.time + " UTC");
        
        if (eventDate <= now && (!currentEvent || eventDate > new Date(currentEvent.time + " UTC"))) {
            currentEvent = event;
        } else if (eventDate > now) {
            upcomingEvents.push(event);
        }
    });

    // Display current event
    if (currentEvent) {
        currentEventElement.textContent = `${currentEvent.name} (${formatDate(new Date(currentEvent.time + " UTC"))})`;
    } else {
        currentEventElement.textContent = "No current event";
    }

    // Display upcoming events
    eventsContainer.innerHTML = "";
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.textContent = `${event.name} - ${formatDate(new Date(event.time + " UTC"))}`;
        eventsContainer.appendChild(eventElement);
    });
}

function formatDate(date) {
    return date.toLocaleString('en-US', { 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false, 
        timeZone: 'UTC' 
    }) + " UTC";
}