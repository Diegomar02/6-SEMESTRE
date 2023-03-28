let texto="Expressions: Diego Marquez Gomez 245119";
console.log(texto);
const resultadoSuma=function(a) {
  let arreglo = new Array(a); 
  let suma=0;
  for(let i=0;i<arreglo.length; i++) {
    const min=0;
    const max=49;
    aleatorio=Math.floor(Math.random()*(max-min+1)+min); 
    arreglo[i]=aleatorio;   
    suma+=arreglo[i]; 
  } 
  console.log(suma);
  return suma;
};
document.getElementById("expressions").innerHTML=resultadoSuma(50);


let textoo="Arrow: Diego Marquez Gommez 245119";
console.log(textoo);
const resultadoSumaArrow=(a)=>{
  let arreglo=new Array(a); 
  let suma=0;
  for(let i=0;i<arreglo.length;i++) {
    const min=0;
    const max=49;
    aleatorio=Math.floor(Math.random()*(max-min+1)+min); 
    arreglo[i]=aleatorio;   
    suma+=arreglo[i]; 
  } 
  console.log(suma);
  return suma;
};
document.getElementById("arrow").innerHTML=resultadoSumaArrow(50);