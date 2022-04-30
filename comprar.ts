let producto: string[] = [
  "dulce de leche",
  "cerveza",
  "ginebra",
  "gaseosa coca-cola",
  "azucar ledesma",
  "turron arcor"
];
let precio: number[] = [100, 100, 100, 100, 100, 100];
let stock: number[] = [100, 100, 100, 100, 100, 100];
let divElementos = document.getElementById("elementos");

function cargarProductos() {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("blanco");
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = precio[i];
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(divProducto);
  }
}
Window.onload = cargarProductos();
