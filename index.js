import Usuario from "./classes/usuario.js"; // importa la clase usuario

const usuarios = [];

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = formulario.id.value;
    const nombre = formulario.nombre.value;
    const edad = Number(formulario.edad.value);
    const email = formulario.email.value;
    const telefono = formulario.telefono.value;
    const password = formulario.newPin.value;
    const password2 = formulario.newPin2.value;

    if (!id || !nombre || !edad || !email || !telefono || !password || !password2) {
        alert("Campos incompletos...");
        return;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden...");
        return;
    }

    const nuevoUsuario = Usuario.crear(id, nombre, email, edad, telefono, password)
    usuarios.push(nuevoUsuario);

    alert("Usuario registrado exitosamente!")
    formulario.reset
});