document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.carousel'); // Select all carousels

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        const carouselContainer = carousel.querySelector('.carousel-container');
        let currentIndex = 0;

        function updateCarousel(index) {
            const offset = -index * 100; // Moves by 100% for each slide
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        });

        // Initialize carousel
        updateCarousel(currentIndex);
    });
});
