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
            { name: "30 Alliance Forts built by all Alliances. Time Flexible. Stage ends when goal is complete.", time: "2024-09-07 00:00:00" },
            { name: "Waiting period for activation of Crusader Camps", time: "2024-09-08 00:00:00" },
            { name: "Your Alliance controls ONE Crusader Camp", time: "2024-09-08 12:00:00" },
            { name: "Waiting period for activation of Ruined Crusader Fortress", time: "2024-09-10 00:00:00" },
            { name: "Your Camp controls the Ruined Crusader Fortress. (Fast Glory Begins)", time: "2024-09-10 12:00:00" },
            { name: "Your alliance destroyed 50 lvl. 6 barbarian forts", time: "2024-09-12 00:00:00" },
            { name: "Waiting period for activation of lvl. 4 pass, semi-protected", time: "2024-09-14 00:00:00" },
            { name: "Your alliance controlled ONE lvl. 4 pass", time: "2024-09-14 12:00:00" },
            { name: "Your Camp kills 100k lvl 26+ barbs", time: "2024-09-16 00:00:00" },
            { name: "Waiting period for activation of Herons", time: "2024-09-17 00:00:00" },
            { name: "Your alliance controls ONE Heron", time: "2024-09-17 12:00:00" },
            { name: "Your camp destroyed 50 lvl. 7 barbarian forts", time: "2024-09-19 00:00:00" },
            { name: "Top 20 for total power", time: "2024-09-21 13:26:48" },
            { name: "Waiting period for activation Ancient Ruins", time: "2024-09-22 13:26:48" },
            { name: "Your troops defeated 3 Stalkers", time: "2024-09-23 01:26:48" },
            { name: "A total of 300 crusader flags built between all alliances in the Lost Kingdom. Time Flexible.", time: "2024-09-24 13:26:48" },
            { name: "Waiting period for activation Sanctuaries", time: "2024-09-26 13:26:48" },
            { name: "Your alliance controls ONE Sanctuary", time: "2024-09-27 01:26:48" },
            { name: "Your camp destroyed 50 lvl 8 barbarian forts", time: "2024-09-28 13:26:48" },
            { name: "Waiting period for activation lvl 5 pass", time: "2024-09-30 13:26:48" },
            { name: "Your alliance controlled ONE lvl. 5 pass", time: "2024-10-01 01:26:48" },
            { name: "Your CH is lvl 25", time: "2024-10-02 13:26:48" },
            { name: "Waiting period for activation Circles", time: "2024-10-03 13:26:48" },
            { name: "Your alliance controls ONE Circle", time: "2024-10-04 01:26:48" },
            { name: "Waiting period for activation Altar of Darkness", time: "2024-10-05 13:26:48" },
            { name: "Your troops defeated 3 Dark Stalkers", time: "2024-10-06 01:26:48" },
            { name: "Your alliance destroyed 50 lvl. 9 barbarian forts", time: "2024-10-07 13:26:48" },
            { name: "Waiting period for activation lvl 6 pass", time: "2024-10-09 13:26:48" },
            { name: "Your alliance controlled ONE lvl. 6 pass", time: "2024-10-10 01:26:48" },
            { name: "Kill 100k lvl 36+ barbs", time: "2024-10-11 13:26:48" },
            { name: "Your alliance destroyed 50 lvl. 10 barbarian forts", time: "2024-10-12 13:26:48" },
            { name: "Waiting period for Great Ziggurat", time: "2024-10-14 13:26:48" },
            { name: "Your alliance controls the Great Ziggurat", time: "2024-10-15 01:26:48" },
            { name: "Waiting period for lvl. 4 passes (unsealed)", time: "2024-10-18 01:26:48" },
            { name: "Your camp controlled 3 other camps' Crusader camps", time: "2024-10-18 13:26:48" },
            { name: "Your troops killed 1,000,000 troops from other camps", time: "2024-10-20 01:26:48" },
            { name: "Your camp controlled 1 other camp's Crusader Fortress", time: "2024-10-21 01:26:48" }
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