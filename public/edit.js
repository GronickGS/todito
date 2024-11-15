let palabraSeleccionadaId = "";

// Función para abrir el modal de edición
function editarPalabra(id) {
    palabraSeleccionadaId = id;
    const palabra = document.getElementById(id).childNodes[0].nodeValue.trim();
    document.getElementById("input-palabra").value = palabra;
    document.getElementById("modal").style.display = "flex";
}

// Función para guardar la palabra editada
function guardarPalabra() {
    const nuevoTexto = document.getElementById("input-palabra").value;
    document.getElementById(palabraSeleccionadaId).childNodes[0].nodeValue = nuevoTexto + " ";
    cerrarModal();
}

// Función para cancelar la edición y cerrar el modal
function cancelarEdicion() {
    cerrarModal();
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
