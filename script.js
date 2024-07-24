document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('show');
            // Animate hamburger to X
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Handling Modal for Image Gallery
    const articles = document.querySelectorAll('.falling-text-container');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    articles.forEach((article, index) => {
        const headline = article.querySelector('.headline');
        const text = article.querySelector('.falling-text:not(.headline)');
        const images = article.querySelectorAll('.gallery-image');
        const imageGallery = article.querySelector('.image-gallery');

        const animateText = (element, delay) => {
            setTimeout(() => {
                element.style.opacity = 1;
                element.style.top = '0';
            }, delay);
        };

        // Animate text and images
        setTimeout(() => {
            animateText(headline, index * 500); // stagger animations for multiple articles
        }, 500);

        setTimeout(() => {
            animateText(text, index * 500);
        }, 500);

        setTimeout(() => {
            imageGallery.style.opacity = 1;
        }, 500 + index * 500);

        // Setup image modal
        images.forEach(image => {
            image.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });
    });

    // Close Modal
    const closeModal = document.querySelector('.close');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});