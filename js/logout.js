let linkLogout = document.querySelector(".link-logout");

linkLogout.addEventListener("click", function(event) {
    event.preventDefault();

    let logout = document.querySelector(".item-logout");
    let login = document.querySelector(".item-login");
    let registro = document.querySelector(".item-registro");
    let leyenda = document.querySelector(".item-saludo");

    localStorage.removeItem("email");
    
    login.style.display = "block";
    registro.style.display = "block";
    leyenda.style.display = "none";
    logout.style.display = "none";
});