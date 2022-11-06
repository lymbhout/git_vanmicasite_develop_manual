
import {alerta} from '../indexH.js'
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

export class Marcas {
	constructor(nombre,img){
		this.nombre = nombre;
		this.img = img;
	}
}

let y;

export let marcas = (t,e) => {
	for( let i = 0; i < t.length; i++){
		marcasDCauchos.push(new Marcas(e[i],t[i]))
	};
	// marcas productos:
	y =`
	<div><img src="https://www.recambioscoche.es/assets/6feb4b/images/html/index/main-tyres.png" alt=""></div>
	<div>
	<h1>COMPRE NEUMATICOS ONLINE</h1>
	<h3>Las mejores marcas</h3>
	<div id="marcasMainMarcasID"></div>
	</div>`;
let marcasMainMarcas = document.getElementById("neumatico__main");
        marcasMainMarcas.innerHTML = y;
let marcasMainMarcasID = document.getElementById("marcasMainMarcasID");
marcasDCauchos.forEach((item) => {
		
		marcasMainMarcasID.innerHTML +=`<img src= "${item.img}">`;
	});
};
// variables
let localStrsProductos;
export let productosDUsuario;
// arrays
export let carrito = [];
let nombreMarcasCauchos =["michelin","continental","hankook","bridgestone","kumho","kormoran","nexen","pirelli","falken","maxxis"]
let imgMarcasDCauchos= [
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/michelin.png?m=2&rev=94077835",
    "https://cdn.autoteiledirekt.de/tyres-brands/thumbs/continental.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/hankook.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/bridgestone.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/kumho.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/kormoran.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/nexen.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/pirelli.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/falken.png?m=2&rev=94077835",
	"https://cdn.autoteiledirekt.de/tyres-brands/thumbs/maxxis.png?m=2&rev=94077835",
];
let marcasDCauchos= [];


// fetch de productos
export const productoNeumaticosCargados = async (api,o,u) =>{
	let neumaticos = document.getElementById(o);
	let neumaticos2 =document.getElementById(u);
	try{
		const response = await fetch(api)
		const data =  await response.json();
		const data1 = data.filter((el) =>  el.id <= 15 )
		const data2 = data.filter((el)=> el.id > 15 )
	// rendizando productos
		data1.forEach((producto) => {
			let neumaticosCauchoT = document.createElement("div");
			neumaticosCauchoT.innerHTML = `
				<ul>
				<li><img src="${producto.img}" alt=""></li>
				<li><h4>${producto.nombre}</h4></li>
				<li><h5>${producto.precio}$</h5></li>
				<li><p>ID:${producto.id}</p></li>
				<li><p> 21% IVA incluido</p></li>
				</ul>
				<button id ="botonDCompra${producto.id}">Comprar</button>`;
				neumaticos.append(neumaticosCauchoT);
			// evento click boton
			let iDS = document.getElementById(`botonDCompra${producto.id}`);
			iDS.addEventListener("click", () => mandarAlCarrito(producto));
			
		});
		data2.forEach((producto) => {
			let neumaticosCauchoT2 = document.createElement("div");
			neumaticosCauchoT2.innerHTML = `
				<ul>
				<li><img src="${producto.img}" alt=""></li>
				<li><h4>${producto.nombre}</h4></li>
				<li><h5>${producto.precio}$</h5></li>
				<li><p>ID:${producto.id}</p></li>
				<li><p> 21% IVA incluido</p></li>
				</ul>
				<button id ="botonDCompra${producto.id}">Comprar</button>`;
				neumaticos2.append(neumaticosCauchoT2);
			// evento click boton
			let iDS2 = document.getElementById(`botonDCompra${producto.id}`);
			iDS2.addEventListener("click", () => mandarAlCarrito(producto));
			
		});
	}catch (error){
            console.log(error);
	}
}
productoNeumaticosCargados("https://raw.githubusercontent.com/lymbhout/git_vanmicasite_develop_manual/master/json/neumaticos.json","objetosPNeumaticos","objetosPNeumaticos2");
let mandarCarrito;
let srt;
// carrito boton
export let mandarAlCarrito = (producto) => {
	mandarCarrito = carrito.find(item => item.id === producto.id)
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
		mandarCarrito.precio += producto.precio
        mandarCarrito.cantidad +=  1
	}
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Has agregado un nuevo producto',
		showConfirmButton: false,
		timer: 900,
		background:"#102026",
		color:"aliceblue",
	})
	productosDUsuario = JSON.stringify(carrito)
    localStorage.setItem("productos", productosDUsuario)



const renderizadoDCarrito = () => {
	let carritoEntradas = document.getElementById("entradaDeLosProductos")
	let carritoDesglosadoDivMain = document.getElementById("carrito__unico__Desglosado__divMain")
	let carritoDesglosadoDivHeader = document.getElementById("carrito__unico__Desglosado__divHeader");
	let carritoDesglosadoDivFooter = document.getElementById("carrito__unico__Desglosado__divFooter");
	let pdp = JSON.parse(localStorage.getItem("productos"));
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
	pdp.forEach((elemento) =>{
		carritoEntradas.addEventListener("click", () =>  {
			carritoDesglosadoDivHeader.innerHTML=`<h5> <strong>Su carrito - ${cantidadTotal} productos</strong></h5>`;
			if (mandarCarrito === undefined){		
				carritoDesglosadoDivMain.innerHTML+=`
				<div>
				<img src="${elemento.img}" alt="">
				<p><a href=""></a>${elemento.nombre}</p>
				<p>x${elemento.cantidad}</p>
				<h5>${elemento.precio}$</h5>
				</div>`;
				carritoDesglosadoDivMain.innerHTML =``
			}else{		
				carritoDesglosadoDivMain.innerHTML =`
				<div>
				<img src="${elemento.img}" alt="">
				<p><a href=""></a>${elemento.nombre}</p>
				<p>x${elemento.cantidad}</p>
				<h5>${elemento.precio}$</h5>
				</div>`
			}		
			carritoDesglosadoDivFooter.innerHTML=`<p>Gastos de envio</p>
			<p>2.5$</p>
			<div class= "carrito__unico__Desglosado__div__divFooter__h4">
			<h4>Total del pedido</h4>
			<h4>${precioTotal}$</h4>
			</div>
			<p>IVA incluido 21%</p>
			<button id="ejecutarPago">EJECUTAR EL PAGO</button>
			<a href="carrito.html" target= "_blank"><i><i class="fi fi-ss-shopping-cart"></i></i>Carrito</a>`
		})
		carritoEntradas.addEventListener("mouseleave", () => {
			carritoDesglosadoDivHeader.innerHTML =""
			carritoDesglosadoDivMain.innerHTML =""
			carritoDesglosadoDivFooter.innerHTML=""
		})
		// total al lado del carrito
		const carritoP = () =>{
			let carritoP = document.getElementById("carritoP")
			carritoP.innerHTML =`<p>${precioTotal}$</p>`
		}
		carritoP()
	})
}
renderizadoDCarrito()
}
//  resultado del carrito 
// carrito
// let carritoEntradas = document.getElementById("entradaDeLosProductos")
let carritoUnicoDesglosado = document.getElementById ("carrito__unico__Desglosado")
// let pdp = JSON.parse(localStorage.getItem("productos"));

// let carritoDesglosadoDivMain = document.getElementById("carrito__unico__Desglosado__divMain")
// let carritoDesglosadoDivHeader = document.getElementById("carrito__unico__Desglosado__divHeader");
// let carritoDesglosadoDivFooter = document.getElementById("carrito__unico__Desglosado__divFooter");


// marcas productos:
// let neumaticosMainMarcas = document.getElementById("neumatico__main");
// neumaticosMainMarcas.innerHTML =`
// <div><img src="https://www.recambioscoche.es/assets/6feb4b/images/html/index/main-tyres.png" alt=""></div>
// <div>
// <h1>COMPRE NEUMATICOS ONLINE</h1>
// <h3>Las mejores marcas</h3>
// <div id="marcasMainMarcasID"></div>
// </div>`;
marcas(imgMarcasDCauchos,nombreMarcasCauchos);