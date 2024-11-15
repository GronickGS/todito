function tirarDado() {
    // Resetear los colores antes de tirar el dado
    resetearColores();

    let contador = 0;
    const dado = document.getElementById("dado");
    const interval = setInterval(() => {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        dado.textContent = numeroAleatorio;
        dado.style.transform = `rotate(${Math.random() * 360}deg)`;
        contador++;

        // Detener la animación después de 20 cambios
        if (contador === 20) {
            clearInterval(interval);
            // Generar el número final
            const numeroFinal = Math.floor(Math.random() * 6) + 1;
            dado.textContent = numeroFinal;
            dado.style.transform = 'rotate(0deg)';
            cambiarColorSegunNumero(numeroFinal); // Cambiar color según el número final
        }
    }, 100); // Cambia el número cada 100ms para animación
}

// Función para cambiar el color de la palabra según el número del dado
function cambiarColorSegunNumero(numero) {
    const palabra = document.getElementById(`palabra${numero}`);
    palabra.classList.add("verde");
}

// Función para resetear los colores de todas las palabras
function resetearColores() {
    const palabras = document.querySelectorAll(".palabra");
    palabras.forEach(palabra => {
        palabra.classList.remove("verde");
    });
}

// Agregar evento de clic al botón
document.getElementById("boton-tirar").addEventListener("click", tirarDado);