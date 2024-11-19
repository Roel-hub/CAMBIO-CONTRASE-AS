function cambiarContrasena() {
    const nuevaContrasena = document.getElementById("nuevaContrasena").value;

    // Verificar que la nueva contraseña tenga al menos 6 caracteres
    if (nuevaContrasena.length < 6) {
        document.getElementById("mensajeCambio").textContent = "La contraseña debe tener al menos 6 caracteres";
        document.getElementById("mensajeCambio").style.color = "red";
        return; // Detener el flujo si la contraseña es demasiado corta
    }

    // Obtener el usuario desde sessionStorage
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));

    // Verificar si el usuario está en sessionStorage
    if (!usuario) {
        document.getElementById("mensajeCambio").textContent = "No se encontró el usuario.";
        document.getElementById("mensajeCambio").style.color = "red";
        return;
    }

    // Cambiar la contraseña del objeto usuario
    usuario.password = nuevaContrasena;

    // Actualizar el objeto usuario en sessionStorage con la nueva contraseña
    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    // Mostrar mensaje de éxito
    document.getElementById("mensajeCambio").textContent = "Contraseña cambiada con éxito";
    document.getElementById("mensajeCambio").style.color = "green";

    // Redirigir al login después de unos segundos
    setTimeout(() => {
        window.location.href = "login.html"; // Redirigir al login
    }, 1500); // Esperar 1.5 segundos
}
