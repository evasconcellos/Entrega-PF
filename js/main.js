class Productos {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const productos = [
  "",
  new Productos(`Pack de 2 velas`, 300, 100),
  new Productos(`Portavelas`, 500, 120),
  new Productos(`Kit cristales y loción`, 1250, 100),
  new Productos(`Kit Sahumado`, 550, 130),
  new Productos(`Kit Sahumado 2`, 750, 80),
  new Productos(`Sahumador de barro`, 450, 130),
  new Productos(`Caja de sahumerios x 10u`, 350, 130),
  new Productos(`Loción alquimizada`, 350, 80),
  new Productos(`Kit cristales 7 chakras`, 500, 100),
  new Productos(`Totebag`, 1800, 120),
  new Productos(`Caja Creo`, 3000, 130),
];

const articulos = Number(
  prompt(
    `Hola, selecciona el número del artículo que quieres comprar: \n\n1) ${productos[1].nombre}\n\n2) ${productos[2].nombre} \n\n3) ${productos[3].nombre} \n\n4) ${productos[4].nombre} \n\n5) ${productos[5].nombre}\n\n6) ${productos[6].nombre}\n\n7) ${productos[7].nombre}\n\n8) ${productos[8].nombre}\n\n9) ${productos[9].nombre}\n\n10) ${productos[10].nombre}\n\n11) ${productos[11].nombre}\n\n`
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

function montoFinal() {
  let financiacion = prompt(
    `El monto a pagar es: ${sumaTotal()} , elija su método de pago:\n1. Efectivo = Accedes a un 5% de descuento sobre el total. \n2. Tarjeta de crédito o débito = ${sumaTotal()}.`
  );

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
