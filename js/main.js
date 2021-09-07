class Productos {
  constructor(nombre, precio, stock, img, alt) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img
    this.alt = alt
  }
}

const productos = [];

  productos.push (new Productos(`Pack de 2 velas`, 300, 100, "IMG/Productos/velas2.jpg", `pack de 2 velas de diversos colores con el logo de Creo` ));
  productos.push (new Productos(`Portavelas`, 500, 120, "IMG/Productos/portavelas4.jpg", `porta velas de diversos colores`));
  productos.push (new Productos(`Kit cristales y loción`, 1250, 100, "IMG/Productos/kit1.jpg", `kit alquimizante (botella de loción, bolsa con logo de creo y cristales de diversos colores`));
  productos.push (new Productos(`Kit Sahumado`, 550, 130, "IMG/Productos/kitsahumador.jpg", `kit sahumador, con hiervas secas y carbones para quemar`));
  productos.push (new Productos(`Kit Sahumado 2`, 750, 80, "IMG/Productos/kitsahumador2.jpg", `kit sahumador, sahumador de barro con hiervas secas y carbones dentro`));
  productos.push (new Productos(`Sahumador de barro`, 450, 130, "IMG/Productos/sahumadorbarro.jpg", `sahumador de barro con tapa con orificios y cadena para colgar`));
  productos.push (new Productos(`Caja de sahumerios`, 350, 130, "IMG/Productos/sahumerios2.jpg", `Caja de sahumerios de la marca Nag Champa`));
  productos.push (new Productos(`Loción alquimizada`, 350, 80, "IMG/Productos/locion.jpg", `botella de spray de 50ml con locion alquimizante`));
  productos.push (new Productos(`Kit cristales 7 chakras`, 500, 100, "IMG/Productos/kitpiedraschakras.jpg", `7 cristales con los colores de los chakras`));
  productos.push (new Productos(`Totebag`, 1800, 120, "IMG/Productos/totebag.jpg", `Bolsas de tela de color negro y beige con el logo de Creo estampado`));
  productos.push (new Productos(`Caja Creo`, 3000, 130, "IMG/Productos/cajacreo2.jpg",`Interior de la caja Creo que contiene, velas, sahumerios, un porta vela, una loción alquimizante, y 7 cristales con los colores de los chakras`));




const articulos = Number(
  prompt(
    `Hola, selecciona el número del artículo que quieres comprar: \n\n0) ${productos[0].nombre}\n\n1) ${productos[1].nombre} \n\n2) ${productos[2].nombre} \n\n3) ${productos[3].nombre} \n\n4) ${productos[4].nombre}\n\n5) ${productos[5].nombre}\n\n6) ${productos[6].nombre}\n\n7) ${productos[7].nombre}\n\n8) ${productos[8].nombre}\n\n9) ${productos[9].nombre}\n\n10) ${productos[10].nombre}\n\n`
  )
);

let cantidad = Number(
  prompt("Elija la cantidad de artículos que quiere comprar")
);

function sumaTotal() {
  if (cantidad <= productos[articulos].stock && cantidad >= 1) {
    const totalComprado = productos[articulos].precio * cantidad;
    return totalComprado;
  } else {
    alert("No disponemos de stock suficiente, pruebe con otra cantidad.");
  }
}

let financiacion = prompt(
  `El monto a pagar es: ${sumaTotal()} , elija su método de pago:\n1. Efectivo = Accedes a un 5% de descuento sobre el total. \n2. Tarjeta de crédito o débito = ${sumaTotal()}.`
);

function montoFinal() {
  if (financiacion == "1") {
    const efectivo = sumaTotal() * 0.95;
    return efectivo;
  } else {
    return sumaTotal();
  }
}

function compraTotal() {
  alert(
    `Felicidades, vas a comprar: ${cantidad} "${
      productos[articulos].nombre
    }".\n\nSu total es de: $${montoFinal()} `
  );
  alert(
    "En caso de querer, podés agregar más productos al carrito haciendo click en los botones predefinidos."
  );
}

compraTotal();

let carrito = [];
let total = 0;

function add(producto, precio) {
  carrito.push(producto);

  total = total + precio;

  document.getElementById("checkout").innerHTML = `Agregar $${total}`;

  resultado = total + sumaTotal();

}

function pagar() {
  {
    window.alert(
      `Tenés disponible en el carrito: ${cantidad} "${
        productos[articulos].nombre
      }", por un total de: $${sumaTotal()}.\nLe vas a agregar lo siguiente: \n` +
        carrito.join(" \n") +
        `\nEl total de tu compra es de: $${resultado}`
    );
  }
}

let mostrar = ""
productos.forEach (producto => {
mostrar += ` 
<div class="product-container">
  <h3 class="text-center">${producto.nombre}</h3>
  <img src="${producto.img}" alt="${producto.alt}"></>
  <h2>${producto.precio}</h2>
  <button class="button-add" onclick="add('-${producto.nombre}.', ${producto.precio})">Agregar al carrito</button>
</div>
`
})

document.getElementById("page-content").innerHTML = mostrar