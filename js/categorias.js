fetch("https://dummyjson.com/products/category-list")
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let listaCategorias = document.querySelector(".lista-categorias");
    let categorias = "";

    for (let i = 0; i < data.length; i++) {
        categorias += `<li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`;
    }

    listaCategorias.innerHTML = categorias;

})
.catch(function(error) {
    console.log("Error: " + error);
})
