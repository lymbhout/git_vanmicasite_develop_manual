
class Productos  {
constructor(nombre,precio,id,){
   this.nombre = nombre;
   this.precio = precio;
   this.id = id;
   this.vendido = false;
}
estadoVendido () {
   this.vendido =  true
}
}


let producto1 = new Productos("pastillas de frenos", 100,"#1")
let producto2 = new Productos("neumaticos",50,"#2",false)
let producto3 = new Productos("filtros", 20,"#3",false)
let producto4 = new Productos("aceites",60, "#4",false)

let busca;
let productoCmpradas ;
let resultado;
let productosGernales = [producto1,producto2,producto3,producto4]
productosGernales.forEach(item => console.log(item));

alert(` se encuentra en la tienda de vanmica. Actulmente tenemos 4 tipos de productos.
productos en stock: 
${producto1.nombre}
${producto2.nombre}
${producto3.nombre}
${producto4.nombre}`)
let nombre = prompt("Ingrese el nombre del producto que dese buscar");

let buscar = productosGernales.find((item) => item.nombre === nombre)

let mostrar = `${buscar.nombre}
${buscar.precio}$`
let resuesta = prompt(`${mostrar} desea comprar?`);

const nuevo = (busca) =>{
   if (nombre === "filtros"){
      busca = producto3.estadoVendido();
   }else if (nombre === "neumaticos"){
      busca = producto2.estadoVendido();
   }else if (nombre === "aceites"){
      busca = producto4.estadoVendido();
}else{
   
      busca = producto1.estadoVendido();
}
return busca;
}
const porcentajes = (n) => n * resultado / 100

let comprar = () =>{
   if (resuesta === "si"){
      productoCmpradas = Number(prompt(`Se le agregara el 2 % de su compra por impuesto pais. Cuantos desea `))
      
   }else{
      alert("gracias por visitarnos!")
   }
   return resultado = productoCmpradas * buscar.precio
}
comprar()

let total = resultado + porcentajes(2);

if ( isNaN(productoCmpradas)){
   alert("debe colocar la cantidad que desea comprar")
   
}else{
   alert(`Su compra de:
   ${productoCmpradas} ${buscar.nombre}
   con el 2% de impuesto es un total de : ${total}$`)
}
console.log(`se compraron ${productoCmpradas}  ${buscar.nombre} total:  ${total}$`);
nuevo(busca)
productosGernales.forEach(item => console.log(item));
