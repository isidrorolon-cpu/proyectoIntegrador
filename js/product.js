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
    nombre.innerText = data.title;
    descripcion.innerText = 'Descripción: ' + data.description;
    precio.innerText = '$' + data.price;
    categoria.innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}">${data.category}</a>`;
    stock.innerText = 'Stock: ' + data.stock + ' unidades';

    if(data.brand == undefined) {
        marca.innerText = "Marca: sin marca";
    } else {
        marca.innerText = "Marca: " + data.brand;
    }

    let tags = "";
    for (let i = 0; i < data.tags.length; i++) {
        if (i < 3) {
            tags += `<li>${data.tags[i]}</li>`;
        }
    }
    listaTags.innerHTML = tags;

    let reviews = "";
    for (let i = 0; i < data.reviews.length; i++) {
        reviews += `
         <article class="review">
          <h3>${data.reviews[i].reviewerName}</h3>
          <p>Rating: ${data.reviews[i].rating} / 5</p>
          <p>${data.reviews[i].comment}</p>
          <p>Fecha: ${data.reviews[i].date}</p>
         </article>
         `;
    }
    listaReviews.innerHTML = reviews;

})
.catch(function(error) {
    console.log('Error: ' + error);
})