// import {productoNeumaticosCargados} from './neumaticos.js'

// objetos
class Marcas {
	constructor(nombre,img){
		this.nombre = nombre;
		this.img = img;
	}
}

// funciones

// Array
let nombreMarcasDFiltros=["bosch","mahle","ridex","purflux","febi"];
let imgMarcasDFiltros=[
    "https://cdn.autoteiledirekt.de/brands/thumbs/30.png?m=2&rev=94077835",
    "https://cdn.autoteiledirekt.de/brands/thumbs/10223.png?m=2&rev=94077835",
    "https://cdn.autoteiledirekt.de/brands/thumbs/100015.png?m=2&rev=94077835",
    "https://cdn.autoteiledirekt.de/brands/thumbs/38.png?m=2&rev=94077835",
    "https://cdn.autoteiledirekt.de/brands/thumbs/101.png?m=2&rev=94077835"
];
let marcasDFiltros =[];
// variables

// marcas(imgMarcasDFiltros,nombreMarcasDFiltros)
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
productoNeumaticosCargados("../../json/filtros.json","objetosPFiltros","objetosPFiltros2")