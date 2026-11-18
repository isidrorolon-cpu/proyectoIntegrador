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

    imagen.src = data.thumbnail;
    imagen.alt = data.title;
    nombre.innerText = data.title;
    marca.innerText = 'Marca: ' + data.brand;
    descripcion.innerText = 'Descripción: ' + data.description;
    precio.innerText = '$' + data.price;
    categoria.innerText = data.category;
    categoria.href = './category.html?categoria=' + data.category;
    stock.innerText = 'Stock: ' + data.stock + ' unidades';

    if(data.brand == undefined) {
        marca.innerText = "Marca: sin marca";
    } else {
        marca.innerText = "Marca: " + data.brand;
    }

    let tags = "";
    for (let i = 0; i < data.tags.length && i < 3; i++) {
        tags += `<li>${data.tags[i]}</li>`;
    }
    listaTags.innerHTML = tags;

})
.catch(function(error) {
    console.log('Error: ' + error);
})