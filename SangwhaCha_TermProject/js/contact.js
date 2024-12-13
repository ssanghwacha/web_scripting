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
    // Initialize EmailJS with your public key
    emailjs.init('GCRK4etZDLbMRsn-N'); // Public Key를 입력

    // Handle form submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        // Collect form data
        const formData = {
            from_name: $('#name').val(),
            from_email: $('#email').val(),
            message: $('#message').val(),
        };
        // Send email via EmailJS
        emailjs
            .send('your_service_id', 'your_template_id', formData)
            .then(function () {
                // Display success message and reset the form
                $('#successMessage').removeClass('d-none'); // 성공 메시지 표시
                $('#contactForm')[0].reset(); // 폼 초기화
            })
            .catch(function (error) {
                // Display error message
                $('#errorMessage').removeClass('d-none'); // 오류 메시지 표시
                console.error('Failed to send message:', error);
            });
    });
});
