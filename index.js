// constructores----
class Productos  {
constructor(nombre,precio,id,img){
  this.nombre = nombre;
  this.precio = precio;
  this.id = id;
  this.img = img
  this.vendido = false;
}
estadoVendido () {
    this.vendido =  true
}
}
class Personas {
    constructor(nombre,email,numeroId = 0 ){
        this.nombre = nombre;
        this.email = email;
        this.numeroId = numeroId
    }
    nuevoN (){
        this.numeroId = numeroId ++;
    }
}

// arrays
const productosCauchosT = []



//  Definiciones y declaracion de funciones
function productoNeumaticosCargados() {
  productosCauchosT.push(new Productos("Atlas 175/70 R14", 47.90, 11, "https://cdn.autoteiledirekt.de/uploads/tyres/img_small/PKW/5420068652297_AF105.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Fortuna 185/65 R15", 53.95, 12, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/5420068642700_FF112.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Nankan 215/60 R17", 93.50, 13, "https://cdn.autoteiledirekt.de/uploads/tyres/full/OFF/4718022000460_JD184.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Federl 215/40 R17", 50.20, 14, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4713959007131_B3AL7AFE.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Federal 205/45 R16", 84.40, 15, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4713959007421_B30K6AFE.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Ceat 205/60 R16", 60.90, 16, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/8904288102499_106552.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Nakang 225/40 R18", 68.50, 17, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/4717622047264_JC758.jpg?rev=94077835"));
  productosCauchosT.push(new Productos("Michelin 225/40 R18", 124.02, 18, "https://cdn.autoteiledirekt.de/uploads/tyres/full/PKW/3528706746192_674619.jpg?rev=94077835"));
}
productoNeumaticosCargados()

// rendizando productos
let neumaticos = document.getElementById("objetosPNeumaticos")

productosCauchosT.forEach((producto) =>{
  let neumaticosCauchoT = document.createElement("div");

  neumaticosCauchoT.innerHTML =`
  <ul>
    <li><img src="${producto.img}" alt=""></li>
    <li><h4>${producto.nombre}</h4></li>
    <li><h5>${producto.precio}$</h5></li>
    <li><p>ID:${producto.id}</p></li>
  </ul>
  <button>Comprar</button>`;
  neumaticos.append(neumaticosCauchoT);
});



// let producto1 = new Productos("pastillas de frenos", 100,"#1")
// let producto2 = new Productos("neumaticos",50,"#2",false)
// let producto3 = new Productos("filtros", 20,"#3",false)
// let producto4 = new Productos("aceites",60, "#4",false)

// let busca;
// let productoCmpradas ;
// let resultado;
// let productosGernales = [producto1,producto2,producto3,producto4]
// productosGernales.forEach(item => console.log(item));

// alert(` se encuentra en la tienda de vanmica. Actulmente tenemos 4 tipos de productos.
// productos en stock:
// ${producto1.nombre}
// ${producto2.nombre}
// ${producto3.nombre}
// ${producto4.nombre}`)
// let nombre = prompt("Ingrese el nombre del producto que dese buscar");

// let buscar = productosGernales.find((item) => item.nombre === nombre)

// let mostrar = `${buscar.nombre}
// ${buscar.precio}$`
// let resuesta = prompt(`${mostrar} desea comprar?`);

// const nuevo = (busca) =>{
//    if (nombre === "filtros"){
//       busca = producto3.estadoVendido();
//    }else if (nombre === "neumaticos"){
//       busca = producto2.estadoVendido();
//    }else if (nombre === "aceites"){
//       busca = producto4.estadoVendido();
// }else{

//       busca = producto1.estadoVendido();
// }
// return busca;
// }
// const porcentajes = (n) => n * resultado / 100

// let comprar = () =>{
//    if (resuesta === "si"){
//       productoCmpradas = Number(prompt(`Se le agregara el 2 % de su compra por impuesto pais. Cuantos desea `))

//    }else{
//       alert("gracias por visitarnos!")
//    }
//    return resultado = productoCmpradas * buscar.precio
// }
// comprar()

// let total = resultado + porcentajes(2);

// if ( isNaN(productoCmpradas)){
//    alert("debe colocar la cantidad que desea comprar")

// }else{
//    alert(`Su compra de:
//    ${productoCmpradas} ${buscar.nombre}
//    con el 2% de impuesto es un total de : ${total}$`)
// }
// console.log(`se compraron ${productoCmpradas}  ${buscar.nombre} total:  ${total}$`);
// nuevo(busca)
// productosGernales.forEach(item => console.log(item));

// let body = document.getElementsByClassName("bodyColor");
// document.body.className = "bodyColor"



// saludo personalizado ----
const usuarios = []
let nombreTraido = document.getElementById("iSesion");
let botonSesion = document.createElement("div");
botonSesion.innerHTML =  `<div class="dropdown">
<a class="btn btn-primary  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fi fi-rs-user carritoI"></i>
</a>
<form class="col gx-3 gy-2 align-items-center dropdown-menu" id = "formularioP">
  <div class="col-sm-10">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName  inputName" placeholder="Nombre">
  </div>
  <div class="col-md">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Correo</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Correo">
    </div>
  </div>
  <div class="col-auto">
    <button id = "enviarDatosPersona" type="submit" class="btn btn-primary ">Submit</button>
  </div>
</form>
</div>`; 
botonSesion.className = "carrito"
nombreTraido.append(botonSesion);

const formularioPersonas = document.getElementById("formularioP");
formularioPersonas.addEventListener('submit', validacion);

function validacion (e){
    e.preventDefault();
    let formulario = e.target;
    usuarios.push(new Personas(formulario[0].value, formulario[1].value));
    console.log(usuarios);

    let bienvenida = document.createElement("p");
    bienvenida.className = "carrito__p";
    bienvenida.innerHTML = `Bienvenido ${formulario[0].value} a Vanmica site`;
    nombreTraido.append(bienvenida);

    botonSesion.innerHTML = ` `
    const guardarlocal = (clave,valor)=> {localStorage.setItem(clave,valor)}
    guardarlocal("usuario",JSON.stringify(usuarios))
  }

