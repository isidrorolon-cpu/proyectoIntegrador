let formRegistro = document.querySelector(".form-Login-Register");
let campoEmail = document.querySelector(".campo-email");
let campoPassword = document.querySelector(".campo-password");
let campoRepetir = document.querySelector(".campo-repetir");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorRepetir = document.querySelector(".error-repetir");

formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = campoEmail.value;
    let password = campoPassword.value;
    let repetir = campoRepetir.value

    let hayErrores = false;
    errorEmail.innerText = "";
    errorPassword.innerText = "";
    errorRepetir.innerText = "";

    if (email === "") {
        errorEmail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (password === "") {
        errorPassword.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else if (password.length < 6) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
        hayErrores = true;
    }

    if (repetir !== password) {
        errorRepetir.innerText = "Las contraseñas no coinciden";
        hayErrores = true;
    }

    if (hayErrores === false) {
        this.submit();
    }
})