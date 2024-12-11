function tirarDado() {
    resetearColores();
    detenerAudios(); // Detener cualquier audio que esté reproduciéndose

    let contador = 0;
    const dado = document.getElementById("dado");
    const interval = setInterval(() => {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        dado.textContent = numeroAleatorio;
        dado.style.transform = `rotate(${Math.random() * 360}deg)`;
        contador++;

        if (contador === 20) {
            clearInterval(interval);
            const numeroFinal = Math.floor(Math.random() * 6) + 1;
            dado.textContent = numeroFinal;
            dado.style.transform = 'rotate(0deg)';
            cambiarColorSegunNumero(numeroFinal);
            reproducirAudio(numeroFinal); // Reproducir audio correspondiente
        }
    }, 100);
}

function cambiarColorSegunNumero(numero) {
    const palabra = document.getElementById(`palabra${numero}`);
    palabra.classList.add("verde");
}

function resetearColores() {
    const palabras = document.querySelectorAll(".palabra");
    palabras.forEach(palabra => palabra.classList.remove("verde"));
}

function detenerAudios() {
    for (let i = 1; i <= 6; i++) {
        const audio = document.getElementById(`audio${i}`);
        audio.pause();
        audio.currentTime = 0; // Reiniciar audio
    }
}

function reproducirAudio(numero) {
    const audio = document.getElementById(`audio${numero}`);
    if (audio) {
        audio.play();
    }
}

document.getElementById("boton-tirar").addEventListener("click", tirarDado);
