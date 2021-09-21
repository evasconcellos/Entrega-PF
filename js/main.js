
let carrito = [];
let total = 0;


function storageCarrito () {
  if(localStorage.carrito != null){
  carrito = JSON.parse(localStorage.carrito);
  $("#contadorCarrito").html(carrito.length);
}
}
storageCarrito()




let mostrar = ""

function mostrarProductos() { 
productos.forEach (producto => {
mostrar += ` 
<div class="product-container">
  <h3 class="text-center">${producto.nombre}</h3>
  <img src="${producto.img}" alt="${producto.alt}"></>
  <h2>${producto.precio}</h2>
  <button class="button-add" onclick="addCarrito('${producto.nombre}'),location.reload()" ">Agregar al carrito</button>
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



function pagandoCompra(){ 
  let alCarrito = ``;
  carrito.forEach((e) => {
      alCarrito += `
      <div class="alCarrito">
      <img class="carritoImg" src="${e.img}"/>
      <p>${e.nombre}</p>
      <p>$ ${e.precio}</p><button class="btn btn-danger">x</button>
      </div> `
  })
  $("#contentModal").html(alCarrito);
  }



  const elementosMercadopago = carrito.map(productos => {
    return {
        "title": productos.name,
        "description": "",
        "picture_url": productos.img,
        "category_id": "",
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": productos.precio
    }
})

// Datos a enviar

const elemento = { "items": elementosMercadopago };
const API = 'https://api.mercadopago.com/checkout/preferences'


const comprar = (datos) => {

  let datosDelPago = datos

$.ajaxSetup({
    headers: {
        'Authorization': ' Bearer TEST-7050252595143620-092102-6834e3dd78b1c5a81ed20fc88bc5d8b8-173990757',
        'Content-Type': 'application/json'
    }
});

// El callback y la peticion
$.post(API, JSON.stringify(datosDelPago), (respuesta, status) => {
    const linkPago = respuesta.init_point
    console.log(linkPago);
    window.open(`${linkPago}`);
});
}
