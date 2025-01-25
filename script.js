const mov = document.getElementById('oculto');
    const bot = document.getElementById('menu1');

    function mostrar(){
      mov.style.display = 'block';
    }

    bot.addEventListener('click', mostrar);

const bot2 = document.getElementById('menu2');

    function ocultar() {
      mov.style.display = 'none';
    }

    bot2.addEventListener('click', ocultar);
//agregar
    const mov2 = document.getElementById('add');
    const bot3 = document.getElementById('agregar');

    function mostrar2(){
      mov2.style.display = 'block';
    }

    bot3.addEventListener('click', mostrar2);

const bot4 = document.getElementById('close');

    function ocultar2() {
      mov2.style.display = 'none';
    }

    bot4.addEventListener('click', ocultar2);

//agregar los elementos a la tabla
const form = document.getElementById('form');
const tablaref = document.getElementById('productos');

// Escuchar el envío del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let sale = document.getElementById('sale').value;
    let venta1 = document.getElementById('venta1').value;
    let venta2 = document.getElementById('venta2').value;
    let cantidad = document.getElementById('cantidad').value;

    // Crear un objeto con los datos del formulario
    let producto = { nombre, sale, venta1, venta2, cantidad };

    // Obtener los datos existentes en LocalStorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Agregar el nuevo producto a la lista
    productos.push(producto);

    // Guardar la lista actualizada en LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Agregar el producto a la tabla
    agregarFila(producto);

    // Limpiar el formulario
    form.reset();
});

// Función para agregar una fila a la tabla
function agregarFila(producto) {
    let filaref = tablaref.insertRow(-1);

    let addcell = filaref.insertCell(0);
    addcell.textContent = producto.nombre;

    let addcell1 = filaref.insertCell(1);
    addcell1.textContent = producto.sale;

    let addcell2 = filaref.insertCell(2);
    addcell2.textContent = producto.venta1;

    let addcell3 = filaref.insertCell(3);
    addcell3.textContent = producto.venta2;

    let addcell4 = filaref.insertCell(4);
    addcell4.textContent = producto.cantidad;
}

// Función para cargar los datos almacenados al abrir la página
function cargarDatos() {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.forEach(producto => {
        agregarFila(producto);
    });
}

// Llamar a cargarDatos() cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarDatos);