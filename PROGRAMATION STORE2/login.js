// Estructura de los usuarios (ahora se obtiene desde localStorage)
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
    admin: { username: "admin", password: "admin123", rol: "admin" },
    user: { username: "user", password: "user123", rol: "user" },
    roel: { username: "roel", password: "medellin123", rol: "admin" }
};

// Función de inicio de sesión
function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

    // Verificar si el usuario existe en la estructura y la contraseña es correcta
    if (usuarios[usuario] && usuarios[usuario].password === contrasena) {
        // Guardar el usuario en sessionStorage
        sessionStorage.setItem("usuario", JSON.stringify(usuarios[usuario]));

        // Redirigir según el rol
        if (usuarios[usuario].rol === "admin") {
            window.location.href = "index.html";  // Redirigir a la página principal de admin
        } else {
            window.location.href = "index.html";  // Redirigir a la página principal de usuario
        }
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
}
