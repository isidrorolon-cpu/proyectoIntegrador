let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda");

let tituloBusqueda = document.querySelector(".titulo-busqueda");
tituloBusqueda.innerText = "Resultados de búsqueda para: " + busqueda;