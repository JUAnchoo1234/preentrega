function renderizarProductos(lista,contendorId){
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio.toLocaleString("es-AR")}</p>
      <button class="btn-agregar" data-id="${producto.id}">
        AGREGAR AL CARRITO
      </button>
    `;
    contenedor.appendChild(card);
  });
}

const hombres = productos.filter(p => p.categoria === "men");
renderizarProductos(hombres, "contenedor-men");

const secciones = [
  { contenedor: "contenedor-spring",      filtro: p => p.coleccion === "spring" },
  { contenedor: "contenedor-men",         filtro: p => p.categoria === "men" },
  { contenedor: "contenedor-women",       filtro: p => p.categoria === "women" },
  { contenedor: "contenedor-accessories", filtro: p => p.categoria === "accessories" }
];

secciones.forEach(seccion => {
  const lista = productos.filter(seccion.filtro).slice(0, 4); // máximo 4 por sección
  renderizarProductos(lista, seccion.contenedor);
});
