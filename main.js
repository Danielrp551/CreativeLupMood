document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento que deseas animar
    const animationElement = document.querySelector('.animation_text_1');

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible en la pantalla, añade la clase de animación
            if (entry.isIntersecting) {
                animationElement.classList.add('animate');
            }
        });
    }, { threshold: 0.5 }); // Define el umbral de visibilidad

    // Observa el elemento
    observer.observe(animationElement);
});

  