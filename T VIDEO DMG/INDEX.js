//alertas
alert("HOLA, DIEGO MARQUEZ");
//variables
let nombre="DIEGO MARQUEZ GOMEZ";
nombre="DIEGO MARQUEZ";
//Constantes
const apellido="MARQUEZ"
const altura=175;
//Mostrar por consola
console.log(nombre);
console.log(altura);
// Concatenación
let concatenacion = nombre + " " + apellido;
//Seleccionar elementos de la pagina
let datos = document.querySelector("#datos")
datos.innerHTML = `
<h1>soy la caja de datos</h1>
<h2>Mi nombre es: ${concatenacion} </h2>
<h1>Mido: ${altura} cm</h1>
`;
//Condiciones
if(altura >= 180){
    datos.innerHTML += "<h1>Eres una perosna alta</h1>";
}else{
    datos.innerHTML += "<h1>Eres una perosna bajita</h1>";
}
//Bucles
for(let year = 2000; year <= 2023; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`;
}
//Arrays
let nombres = ["Diego", "Luis", "Laura"];
let divNombres = document.querySelector("#nombres");
//divNombres.innerHTML = nombres[2];
divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";
nombres.forEach(nombre =>{
    divNombres.innerHTML += "<li>"+nombre+ "</li>"
});
divNombres.innerHTML += "</ul>"
//Funciones
const miInformacion = (nombre, altura) => {
    let misDatos = `

    <h1>soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h1>Mido: ${altura} cm</h1>
    
    `;
    return misDatos;
}
const imprimir = ()  => {
    let datos = document.querySelector("#datos")
    datos.innerHTML += miInformacion("DIEGO MARQUEZ GOMEZ", 175);
}
imprimir();
