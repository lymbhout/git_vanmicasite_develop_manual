import {marcas,productoNeumaticosCargados} from './neumaticos.js'

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

marcas(imgMarcasDFiltros,nombreMarcasDFiltros)
productoNeumaticosCargados()