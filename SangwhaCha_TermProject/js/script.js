// Handle hamburger menu toggle
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

let isOpen = false;

hamburger.addEventListener('click', () => {
    const spans = document.querySelectorAll('.hamburger-icon span');

    // Animate hamburger icon and show/hide menu
    if (isOpen) {
        spans[0].style.transform = 'translateY(0) rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'translateY(0) rotate(0)';
        mobileMenu.classList.remove('show');
    } else {
        spans[0].style.transform = 'translateY(12px) rotate(-135deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-12px) rotate(135deg)';
        mobileMenu.classList.add('show');
    }

    isOpen = !isOpen; // Toggle menu state
    console.log('open:', isOpen);
});
// Initialize Masonry grid layout for gallery
const masonryGrid = document.querySelector('.gallery-grid');
const masonry = new Masonry(masonryGrid, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
    gutter: 0,
});
