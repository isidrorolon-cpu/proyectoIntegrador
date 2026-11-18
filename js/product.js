let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");

fetch('https://dummyjson.com/products/' + idProducto)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let imagen = document.querySelector('.producto-imagen');
    let nombre = document.querySelector('.producto-nombre');
    let marca = document.querySelector('.producto-marca');
    let descripcion = document.querySelector('.producto-descripcion');
    let precio = document.querySelector('.precio-producto');
    let categoria = document.querySelector('.producto-categoria');
    let stock = document.querySelector('.producto-stock');
    let listaTags = document.querySelector('.tags-producto');
    let listaReviews = document.querySelector('.lista-reviews');

})
.catch(function(error) {
    console.log('Error: ' + error);
})