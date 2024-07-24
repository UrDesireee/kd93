document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }

    // Event Handling
    const currentEventElement = document.getElementById('currentEvent');
    const timeLeftElement = document.getElementById('timeLeft');
    const eventsContainer = document.getElementById('eventsContainer');

    if (currentEventElement && eventsContainer) {
        // Input your events here
        const events = [
            { name: "Waiting period for unsealed of lvl 7 passes", time: "2024-07-24 19:25" },
            { name: "Your alliance controlled 1 lvl. 7 pass", time: "2024-07-25 06:25" },
            { name: "Waiting period for activation Altar of Darkness", time: "2024-07-26 18:25" },
            { name: "Your troops defeated 3 dark stalkers", time: "2024-07-27 06:25" },
            { name: "Your alliance destroyed 100 lvl. 9 barbarian forts", time: "2024-07-27 18:25" },
            { name: "Can build in Kingsland. Your troops killed/severely wounded 2,000,000 troops of other camps", time: "2024-07-30 18:25" },
            { name: "Governors defeated a total of 100,000 lvl. 36+ barbarian troops", time: "2024-08-01 18:25" },
            { name: "Waiting Ziggurat", time: "2024-08-03 18:25" },
            { name: "Your alliance controls the Ziggurat", time: "2024-08-04 06:25" },
            { name: "Your City Hall reached lvl 25", time: "2024-08-06 18:25" },
            { name: "Waiting period for unsealed of lvl 8 passes", time: "2024-08-08 18:25" },
            { name: "Your alliance controlled 1 lvl. 8 pass", time: "2024-08-09 06:25" },
            { name: "Your alliance destroyed 100 lvl. 10+ barbarian forts", time: "2024-08-10 18:25" },
            { name: "Your kingdom controls 2 Sanctuaries", time: "2024-08-12 18:25" },
            { name: "Your kingdom controls 6 Circles", time: "2024-08-14 18:25" }
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