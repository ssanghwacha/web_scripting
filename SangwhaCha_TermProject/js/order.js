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

$(document).ready(function () {
    // Update total price on form changes
    function updateTotal() {
        let pizzaPrice = parseFloat(
            $('#pizzaSelection option:selected').data('price')
        );
        let toppingsPrice = 0;
        // Calculate toppings price
        $('.topping:checked').each(function () {
            toppingsPrice += parseFloat($(this).val());
        });
        let quantity = parseInt($('#quantity').val());
        let totalPrice = (pizzaPrice + toppingsPrice) * quantity;
        // Display total price
        $('#totalPrice').text(totalPrice.toFixed(2));
    }

    // Listen for changes in pizza selection, toppings, or quantity
    $('#pizzaSelection, .topping, #quantity').on('change', updateTotal);

    // Handle form submission
    $('#orderForm').on('submit', function (e) {
        e.preventDefault();
        alert('Order placed successfully! Total: $' + $('#totalPrice').text());
    });
});

$(document).ready(function () {
    // Initialize slick carousel
    if ($('.carousel').length) {
        console.log('Carousel exists');
        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    } else {
        console.error('Carousel not found');
    }
});

// Initialize Leaflet.js map
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([43.654, -79.383], 12); // Toronto 중심 좌표 (위도, 경도)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    // Adjust map size on window resize// 윈도우 리사이즈 이벤트: 지도 크기 다시 계산
    window.addEventListener('resize', function () {
        map.invalidateSize(); // Leaflet.js가 지도 크기 다시 계산
    });
    // Add a marker with popup
    L.marker([43.654, -79.383])
        .addTo(map)
        .bindPopup('Maker Pizza - Main Location')
        .openPopup();
});
