let emailUsuario = localStorage.getItem("email")
let login = document.querySelector(".item-login")
let registro = document.querySelector(".item-registro")
let leyenda = document.querySelector(".item-saludo")
let logout = document.querySelector(".item-logout")
logout.style.display = "none"

if (emailUsuario !== null) {
    login.style.display = "none"
    registro.style.display = "none"
    leyenda.innerText = "Bienvenido: " + emailUsuario;
    logout.style.display = "block"
}