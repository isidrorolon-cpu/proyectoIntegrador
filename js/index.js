let categoriaUno = "sports-accessories";
let categoriaDos = "mobile-accessories";

fetch("https://dummyjson.com/products/category/" + categoriaUno)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let seccionUno = document.querySelector(".grilla-uno");
    let productos = data.products;
    let cartas = "";

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

    seccionUno.innerHTML = cartas;

})
.catch(function(error) {
    console.log("Error: " + error);
})