
let carrito = [];


function storageCarrito () {
  if(localStorage.carrito != null){
  carrito = JSON.parse(localStorage.carrito);
  $("#contadorCarrito").html(carrito.length);
}
}
storageCarrito()


class Productos {
  constructor(nombre, precio, stock, img, alt) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img
    this.alt = alt
  }
}


const articulo1 = (new Productos(`Pack de 2 velas`, 300, 100, "IMG/Productos/velas2.jpg", `pack de 2 velas de diversos colores con el logo de Creo` ));
const articulo2 = (new Productos(`Portavelas`, 500, 120, "IMG/Productos/portavelas4.jpg", `porta velas de diversos colores`));
const articulo3 = (new Productos(`Kit cristales y loción`, 1250, 100, "IMG/Productos/kit1.jpg", `kit alquimizante (botella de loción, bolsa con logo de creo y cristales de diversos colores`));
const articulo4 = (new Productos(`Kit Sahumado`, 550, 130, "IMG/Productos/kitsahumador.jpg", `kit sahumador, con hiervas secas y carbones para quemar`));
const articulo5 = (new Productos(`Kit Sahumado 2`, 750, 80, "IMG/Productos/kitsahumador2.jpg", `kit sahumador, sahumador de barro con hiervas secas y carbones dentro`));
const articulo6 = (new Productos(`Sahumador de barro`, 450, 130, "IMG/Productos/sahumadorbarro.jpg", `sahumador de barro con tapa con orificios y cadena para colgar`));
const articulo7 = (new Productos(`Caja de sahumerios`, 350, 130, "IMG/Productos/sahumerios2.jpg", `Caja de sahumerios de la marca Nag Champa`));
const articulo8 = (new Productos(`Loción alquimizada`, 350, 80, "IMG/Productos/locion.jpg", `botella de spray de 50ml con locion alquimizante`));
const articulo9 = (new Productos(`Kit cristales 7 chakras`, 500, 100, "IMG/Productos/kitpiedraschakras.jpg", `7 cristales con los colores de los chakras`));
const articulo10 = (new Productos(`Totebag`, 1800, 120, "IMG/Productos/totebag.jpg", `Bolsas de tela de color negro y beige con el logo de Creo estampado`));
const articulo11 = (new Productos(`Caja Creo`, 3000, 130, "IMG/Productos/cajacreo2.jpg",`Interior de la caja Creo que contiene, velas, sahumerios, un porta vela, una loción alquimizante, y 7 cristales con los colores de los chakras`));

const productos = [
  articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11
];



let mostrar = ""

function mostrarProductos() { 
productos.forEach (producto => {
mostrar += ` 
<div class="product-container">
  <h3 class="text-center">${producto.nombre}</h3>
  <img src="${producto.img}" alt="${producto.alt}"></>
  <h2>${producto.precio}</h2>
  <button class="button-add" onclick="addCarrito('${producto.nombre}')">Agregar al carrito</button>
</div>
`
})

$("#page-content").html(mostrar) 

}
mostrarProductos ()


function addCarrito(nombre) {
  const buscandoArticulo = productos.find(productos => productos.nombre === nombre)
  if(buscandoArticulo != undefined){
  carrito.push(buscandoArticulo);         
  } else{
      alert("No fue posible agregar el producto");
  }
  $("#contadorCarrito").html(carrito.length); 

  localStorage.carrito = JSON.stringify(carrito);
  
}


// Esto queda horrible pero la idea era ir probando cómo hacerlo.

function pagandoCompra(){ 
  let alCarrito = ``;
  carrito.forEach((e) => {
      alCarrito += `
      <h2 class="text-center">Vas a pagar: </h2>
      <div class="alCarrito">
      <img class="carritoImg" src="${e.img}"/>
      <p>${e.nombre}</p>
      <p>$ ${e.precio}</p>
      </div> `
  })
  $("#contenedorDePago").html(alCarrito);
  }

