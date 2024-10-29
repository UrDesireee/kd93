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

    ];
    
    const darkAltarEvents = [
        
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