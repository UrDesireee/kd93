document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }

    const currentEventElement = document.getElementById('currentEvent');
    const timeLeftElement = document.getElementById('timeLeft');
    const eventsContainer = document.getElementById('eventsContainer');

    if (currentEventElement && eventsContainer) {
        const events = [
            { name: "Wait for next KVK", time: "2024-10-20 01:26:48" }        
        ];
        updateEvents(events, currentEventElement, timeLeftElement, eventsContainer);
        // Update the countdown every second
        setInterval(() => updateEvents(events, currentEventElement, timeLeftElement, eventsContainer), 1000);
    }
});

function updateEvents(events, currentEventElement, timeLeftElement, eventsContainer) {
    const now = new Date();

    // Sort events by date
    events.sort((a, b) => new Date(a.time) - new Date(b.time));

    let currentEvent = null;
    let nextEvent = null;
    let upcomingEvents = [];

    events.forEach(event => {
        const eventDate = new Date(event.time + " UTC");
        
        if (eventDate <= now && (!currentEvent || eventDate > new Date(currentEvent.time + " UTC"))) {
            currentEvent = event;
        } else if (eventDate > now && !nextEvent) {
            nextEvent = event;
        }

        if (eventDate > now) {
            upcomingEvents.push(event);
        }
    });

    // Display current event
    if (currentEvent) {
        currentEventElement.textContent = `${currentEvent.name} (${formatDateUniversal(new Date(currentEvent.time + " UTC"))})`;
    } else {
        currentEventElement.textContent = "No current event";
    }

    // Display time left until next event
    if (nextEvent) {
        const timeLeft = getTimeLeft(now, new Date(nextEvent.time + " UTC"));
        timeLeftElement.textContent = `Time until next event: ${timeLeft}`;
    } else {
        timeLeftElement.textContent = "No upcoming events";
    }

    // Display upcoming events
    eventsContainer.innerHTML = "";
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.textContent = `${event.name} - ${formatDateUniversal(new Date(event.time + " UTC"))}`;
        eventsContainer.appendChild(eventElement);
    });
}

function formatDateUniversal(date) {
    const pad = (num) => (num < 10 ? '0' + num : num);
    
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());
    const hour = pad(date.getUTCHours());
    const minute = pad(date.getUTCMinutes());
    
    return `${month}.${day} ${hour}:${minute} UTC`;
}

function getTimeLeft(now, eventTime) {
    const difference = eventTime - now;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}