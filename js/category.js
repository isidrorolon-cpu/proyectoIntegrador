let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaElegida = queryStringObj.get("categoria");

fetch('https://dummyjson.com/products/category/' + categoriaElegida)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let tituloCategoria = document.querySelector('.titulo-categoria');
    let grillaCategoria = document.querySelector('.grilla-categoria');
    let productos = data.products;
    let cartas = "";

    tituloCategoria.innerText = categoriaElegida;

    for (let i = 0; i < productos.length; i++) {
        cartas += `
        <article class="carta">
            <img src="${productos[i].thumbnail}">
            <h3>${productos[i].title}</h3>
            <p class="descripcion">${productos[i].description}</p>
            <p class="precio">$${productos[i].price}</p>
            <a href="./product.html?id=${productos[i].id}" class="boton">Ver detalle</a>
        </article>
        `;
    }
    grillaCategoria.innerHTML = cartas;

})
.catch(function(error) {
    console.log('Error: ' + error);
})