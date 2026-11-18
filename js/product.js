let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");

fetch('https://dummyjson.com/products/' + idProducto)
.then(function(response) {
    return response.json();
})
.then(function(data) {

})
.catch(function(error) {
    console.log('Error: ' + error);
})