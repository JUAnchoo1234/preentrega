import { productos } from "productos.js";
function renderizarProductos (lista,contenedor) {
   const contenedor= document.getElementById(idContenedor);
   if (!contenedor) {
    console.log("No encontré el contenedor:", idContenedor);
    return;

}
contenedor.innerHTML = "";
 lista.forEach(function (producto) {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button class="btn-agregar" data-id="${producto.id}">AGREGAR AL CARRITO</button>
      </div>
    `;
  });
}

renderizarProductos(productos.filter(p => p.coleccion === "spring"), "contenedor-spring");
renderizarProductos(productos.filter(p => p.categoria === "men"), "contenedor-men");
renderizarProductos(productos.filter(p => p.categoria === "women"), "contenedor-women");
renderizarProductos(productos.filter(p => p.categoria === "accessories"), "contenedor-accessories");
