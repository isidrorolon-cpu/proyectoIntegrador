let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda");

let tituloBusqueda = document.querySelector(".titulo-busqueda");
tituloBusqueda.innerText = "Resultados de búsqueda para: " + busqueda;


fetch("https://dummyjson.com/products/search?q=" + busqueda)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let grillaResultados = document.querySelector(".grilla-resultados");
    let productos = data.products;
    let cartas = "";

    if (productos.length == 0) {
        tituloBusqueda.innerText = "No hay resultados para el término: " + busqueda;
    } else {
        for (let i = 0; i < productos.length; i++) {
            cartas += `
            <article class="carta">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                <h3>${productos[i].title}</h3>
                <p class="descripcion">${productos[i].description}</p>
                <p class="precio">$${productos[i].price}</p>
                <a href="./product.html?id=${productos[i].id}" class="boton">Ver detalle</a>
            </article>
            `;
        }
        grillaResultados.innerHTML = cartas;
    }

})
.catch(function(error) {
    console.log("Error: " + error);
})