document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        // Adicione a lógica para lidar com os dados do formulário aqui (por exemplo, enviar para um servidor via AJAX).
        console.log('Email:', email);
        console.log('Telefone:', telefone);
    });
});
