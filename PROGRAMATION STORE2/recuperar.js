// Estructura de los usuarios (asegúrate de que esté definida correctamente)
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
    admin: { username: "admin", password: "admin123", rol: "admin" },
    user: { username: "user", password: "user123", rol: "user" },
    roel: { username: "roel", password: "medellin123", rol: "admin" }
};

// Función para cambiar la contraseña
function cambiarContrasena() {
    const usuario = document.getElementById("usuario").value;
    const nuevaContrasena = document.getElementById("nuevaContrasena").value;
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = ""; // Limpiar el mensaje

    // Verificar si el usuario existe
    if (usuarios[usuario]) {
        // Cambiar la contraseña del usuario
        usuarios[usuario].password = nuevaContrasena;
        
        // Guardar la estructura actualizada en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Mensaje de éxito
        mensaje.style.color = "green";
        mensaje.textContent = "Contraseña cambiada con éxito!";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario no encontrado!";
    }
}
