const track = document.getElementsById("trending");
renderizarProductos(productos.slice(0,6), "trending");

document.getElementsById("despues-button").onclick = ( ) => 
    track.scrollBy ({ left: 270, behavior: "smooth"});
document.getElementsById("antes-button").onclick = ( ) => 
    track.scrollBy ({ left: -270, behavior: "smooth"});
