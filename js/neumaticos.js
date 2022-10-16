

// constructores----
class Productos {
	constructor(nombre, precio, id, img) {
		this.nombre = nombre;
		this.precio = precio;
		this.id = id;
		this.img = img;
		this.vendido = false;
	}
	estadoVendido() {
		this.vendido = true;
	}
}

// variables
let localStrsProductos;
let productosDUsuario;
// arrays
const productosCauchosT = [];
let carrito = []

//  Definiciones y declaracion de funciones
function productoNeumaticosCargados() {
	productosCauchosT.push(new Productos("Atlas 175/70 R14", 47.9, 11, "https://cdn.autoteiledirekt.de/uploads/tyres/img_small/PKW/5420068652297_AF105.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Fortuna 185/65 R15", 53.95, 12, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/5420068642700_FF112.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Nankan 215/60 R17", 93.5, 13, "https://cdn.autoteiledirekt.de/uploads/tyres/full/OFF/4718022000460_JD184.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Federl 215/40 R17", 50.2, 14, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4713959007131_B3AL7AFE.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Federal 205/45 R16", 84.4, 15, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4713959007421_B30K6AFE.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Ceat 205/60 R16", 60.9, 16, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/8904288102499_106552.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Nakang 225/40 R18", 68.5, 17, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4717622047264_JC758.jpg?rev=94077835"));
	productosCauchosT.push(new Productos("Michelin 225/40 R18", 124.02, 18, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/3528706746192_674619.jpg?rev=94077835"));
}
productoNeumaticosCargados();

// rendizando productos
let neumaticos = document.getElementById("objetosPNeumaticos");

productosCauchosT.forEach((producto) => {
	let neumaticosCauchoT = document.createElement("div");

	neumaticosCauchoT.innerHTML = `
        <ul>
        <li><img src="${producto.img}" alt=""></li>
        <li><h4>${producto.nombre}</h4></li>
        <li><h5>${producto.precio}$</h5></li>
        <li><p>ID:${producto.id}</p></li>
        </ul>
        <button id ="botonDCompra${producto.id}">Comprar</button>`;

	neumaticos.append(neumaticosCauchoT);

	// evento click boton
	let iDS = document.getElementById(`botonDCompra${producto.id}`);
	iDS.addEventListener("click", () => mandarAlCarrito(producto));
	
});
// carrito boton
let mandarAlCarrito = (producto) => {
	let mandarCarrito = carrito.find(item => item.id === producto.id)
	if (mandarCarrito === undefined){
		carrito.push(
			{
				id: producto.id,
				nombre: producto.nombre,
				precio: producto.precio,	
				img: producto.img,
				cantidad: 1,
				vendido:true
			}
		)
	}else{
		mandarCarrito.precio = mandarCarrito.precio + producto.precio
        mandarCarrito.cantidad = mandarCarrito.cantidad + 1
	}
	Swal.fire({
		position: 'center-start',
		icon: 'success',
		title: 'Has agregado un nuevo producto',
		showConfirmButton: false,
		timer: 1700,
		background:"#102026",
		color:"aliceblue",
	})
	
	productosDUsuario = JSON.stringify(carrito)
    localStorage.setItem("productos", productosDUsuario)
};

//  resultado del carrito 

// carrito
let carritoEntradas = document.getElementById("entradaDeLosProductos")
let pdp = JSON.parse(localStorage.getItem("productos"));
let carritoDesglosadoDivHeader = document.getElementById("carrito__unico__Desglosado__divHeader");
let carritoDesglosadoDivFooter = document.getElementById("carrito__unico__Desglosado__divFooter");
let cantidades = [] 
let cantidadTotal;
let precios = []
let precioTotal;
for ( const i of pdp){
	cantidades.push(i.cantidad)
	cantidadTotal = cantidades.reduce((a,e)=> a + e)
	precios.push(i.precio)
	precioTotal = precios.reduce((e,a) => e + a)
} 

carritoEntradas.addEventListener("mouseenter", () =>  {
	carritoDesglosadoDivHeader.innerHTML=`<h5> <strong>Su carrito - ${cantidadTotal} productos</strong></h5>`;

	carritoDesglosadoDivFooter.innerHTML=`<p>Gastos de envio</p>
	<p>2.5$</p>
	<div class= "carrito__unico__Desglosado__div__divFooter__h4">
	<h4>Total del pedido</h4>
	<h4>${precioTotal}$</h4>
	</div>
	<p>IVA incluido 21%</p>
	<button>EJECUTAR EL PAGO</button>
	<a href=""><i></i></a>`
})
carritoEntradas.addEventListener("mouseleave",() => {
	carritoDesglosadoDivHeader.innerHTML =""
	carritoDesglosadoDivFooter.innerHTML=""
})