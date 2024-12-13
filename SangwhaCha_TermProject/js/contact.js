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
