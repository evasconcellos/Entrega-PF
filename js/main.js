

let productos = [];
let total = 0;

function add(producto, precio) {
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}

function pagar() {   { 
    window.alert("Vas a pagar los siguentes productos: \n"  + productos.join(",  \n"));
}
}
