let formLogin = document.querySelector(".form-Login-Register");
let campoEmail = document.querySelector(".campo-email");
let campoPassword = document.querySelector(".campo-password");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = campoEmail.value;
    let password = campoPassword.value;

    let hayErrores = false;
    errorEmail.innerText = "";
    errorPassword.innerText = "";

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

    if (hayErrores == false) {
        localStorage.setItem("email", campoEmail.value);
        this.submit();
    }
})