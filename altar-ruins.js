document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }

    const ancientRuinsEvents = [
        { time: "2024-09-22 12:00:00", description: "Ancient Ruins 1" },
        { time: "2024-09-24 04:00:00", description: "Ancient Ruins 2" },
        { time: "2024-09-25 20:00:00", description: "Ancient Ruins 3" },
        { time: "2024-09-27 12:00:00", description: "Ancient Ruins 4" },
        { time: "2024-09-29 04:00:00", description: "Ancient Ruins 5" },
        { time: "2024-09-30 20:00:00", description: "Ancient Ruins 6" },
        { time: "2024-10-02 12:00:00", description: "Ancient Ruins 7" },
        { time: "2024-10-04 04:00:00", description: "Ancient Ruins 8" },
        { time: "2024-10-05 20:00:00", description: "Ancient Ruins 9" },
        { time: "2024-10-07 12:00:00", description: "Ancient Ruins 10" },
        { time: "2024-10-09 04:00:00", description: "Ancient Ruins 11" },
        { time: "2024-10-10 20:00:00", description: "Ancient Ruins 12" },
        { time: "2024-10-12 12:00:00", description: "Ancient Ruins 13" },
        { time: "2024-10-14 04:00:00", description: "Ancient Ruins 14" },
        { time: "2024-10-15 20:00:00", description: "Ancient Ruins 15" },
        { time: "2024-10-17 12:00:00", description: "Ancient Ruins 16" },
        { time: "2024-10-19 04:00:00", description: "Ancient Ruins 17" },
        { time: "2024-10-20 20:00:00", description: "Ancient Ruins 18" },
        { time: "2024-10-22 12:00:00", description: "Ancient Ruins 19" },
        { time: "2024-10-24 04:00:00", description: "Ancient Ruins 20" },
        { time: "2024-10-25 20:00:00", description: "Ancient Ruins 21" },
        { time: "2024-10-27 12:00:00", description: "Ancient Ruins 22" }
    ];

    const darkAltarEvents = [
        { time: "2024-10-05 12:00:00", description: "Dark Altar 1" },
        { time: "2024-10-09 20:00:00", description: "Dark Altar 2" },
        { time: "2024-10-12 16:00:00", description: "Dark Altar 3" },
        { time: "2024-10-16 08:00:00", description: "Dark Altar 4" },
        { time: "2024-10-19 20:00:00", description: "Dark Altar 5" },
        { time: "2024-10-23 10:00:00", description: "Dark Altar 6" },
        { time: "2024-10-27 00:00:00", description: "Dark Altar 7" }
    ];

    const ancientRuinsContainer = document.getElementById('ancientRuinsEvents');
    const darkAltarContainer = document.getElementById('darkAltarEvents');

    function displayEvents(events, container) {
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.textContent = `${formatDateUniversal(new Date(event.time + " UTC"))} - ${event.description}`;
            container.appendChild(eventElement);
        });
    }

    displayEvents(ancientRuinsEvents, ancientRuinsContainer);
    displayEvents(darkAltarEvents, darkAltarContainer);
});

function formatDateUniversal(date) {
    const pad = (num) => (num < 10 ? '0' + num : num);
    
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());
    const hour = pad(date.getUTCHours());
    const minute = pad(date.getUTCMinutes());
    
    return `${month}.${day} ${hour}:${minute} UTC`;
}