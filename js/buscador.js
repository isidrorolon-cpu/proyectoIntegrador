let formBuscador = document.querySelector(".buscador");
let campoBuscador = document.querySelector(".buscador input");
let errorBuscador = document.querySelector(".error-buscador");

formBuscador.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBuscador.value == "") {
        errorBuscador.innerText = "Escribí algo para buscar";
    } else if (campoBuscador.value.length < 3) {
        errorBuscador.innerText = "La búsqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
});