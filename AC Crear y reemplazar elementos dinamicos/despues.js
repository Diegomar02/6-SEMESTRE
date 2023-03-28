
const para = document.createElement("h1");
const node = document.createTextNode("Universidad Autonoma de Aguascalientes");
para.appendChild(node);
const element = document.getElementById("div1");
const child = document.getElementById("isc");
element.insertBefore(para,child);

const para1 = document.createElement("p");
const node1 = document.createTextNode("Diego Marquez Gomez = Añadir texto");
para1.appendChild(node1);
const element1 = document.getElementById("pral");
element1.appendChild(para1);


const para3 = document.createElement("p");
const node3 = document.createTextNode("Diego Marquez Gomez = Preemplazar texto");
para3.appendChild(node3);
const parent3 = document.getElementById("pral");
const child3 = document.getElementById("nombre");
parent3.replaceChild(para3, child3);
4677