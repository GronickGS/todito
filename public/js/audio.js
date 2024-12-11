// Obtener el botón y los elementos de audio
const botonAudio = document.getElementById("boton-audio");
const audios = document.querySelectorAll("audio");

// Variable para controlar si el sonido está bloqueado o activo
let sonidoBloqueado = false;

// Evento al presionar el botón
botonAudio.addEventListener("click", () => {
    if (sonidoBloqueado) {
        // Activar sonido
        audios.forEach(audio => {
            audio.muted = false; // Quitar mute
        });
        botonAudio.style.backgroundColor = "#26819F"; // Cambiar color del botón a verde
        botonAudio.innerHTML = "<i class='bx bxs-volume-full'></i>"; // Cambiar ícono a volumen activo
        sonidoBloqueado = false;
    } else {
        // Bloquear sonido
        audios.forEach(audio => {
            audio.muted = true; // Mutear audio
        });
        botonAudio.style.backgroundColor = "red"; // Cambiar color del botón a rojo
        botonAudio.innerHTML = "<i class='bx bxs-volume-mute'></i>"; // Cambiar ícono a volumen mute
        sonidoBloqueado = true;
    }
});
