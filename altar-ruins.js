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
        { time: "2024-09-23 01:26:00", description: "Ancient Ruins 1" },
        { time: "2024-09-24 17:26:00", description: "Ancient Ruins 2" },
        { time: "2024-09-26 09:26:00", description: "Ancient Ruins 3" },
        { time: "2024-09-28 01:26:00", description: "Ancient Ruins 4" },
        { time: "2024-09-29 17:26:00", description: "Ancient Ruins 5" },
        { time: "2024-10-01 09:26:00", description: "Ancient Ruins 6" },
        { time: "2024-10-03 01:26:00", description: "Ancient Ruins 7" },
        { time: "2024-10-04 17:26:00", description: "Ancient Ruins 8" },
        { time: "2024-10-06 09:26:00", description: "Ancient Ruins 9" },
        { time: "2024-10-08 01:26:00", description: "Ancient Ruins 10" },
        { time: "2024-10-09 17:26:00", description: "Ancient Ruins 11" },
        { time: "2024-10-11 09:26:00", description: "Ancient Ruins 12" },
        { time: "2024-10-13 01:26:00", description: "Ancient Ruins 13" },
        { time: "2024-10-14 17:26:00", description: "Ancient Ruins 14" },
        { time: "2024-10-16 09:26:00", description: "Ancient Ruins 15" },
        { time: "2024-10-18 01:26:00", description: "Ancient Ruins 16" },
        { time: "2024-10-19 17:26:00", description: "Ancient Ruins 17" },
        { time: "2024-10-21 09:26:00", description: "Ancient Ruins 18" },
        { time: "2024-10-23 01:26:00", description: "Ancient Ruins 19" },
        { time: "2024-10-24 17:26:00", description: "Ancient Ruins 20" },
        { time: "2024-10-26 09:26:00", description: "Ancient Ruins 21" },
        { time: "2024-10-28 01:26:00", description: "Ancient Ruins 22" }
    ];
    
    const darkAltarEvents = [
        { time: "2024-10-06 01:26:00", description: "Dark Altar 1" },
        { time: "2024-10-09 15:26:00", description: "Dark Altar 2" },
        { time: "2024-10-13 05:26:00", description: "Dark Altar 3" },
        { time: "2024-10-16 19:26:00", description: "Dark Altar 4" },
        { time: "2024-10-20 09:26:00", description: "Dark Altar 5" },
        { time: "2024-10-23 23:26:00", description: "Dark Altar 6" },
        { time: "2024-10-27 13:26:00", description: "Dark Altar 7" }
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