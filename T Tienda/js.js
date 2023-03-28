var indice=-1;
var accion="A";       
var productos=localStorage.getItem("productos");
productos=JSON.parse(productos);
        
if(productos==null) productos=[]; 
function lista(){
    var aLength = productos.length;
            
    document.getElementById("listado").innerHTML="";
    document.getElementById("total").innerHTML="";
    document.getElementById("tpagar").innerHTML="";
    
    
    var tabla="PRODUCTOS AÑADIDOS";
    var pagar=0;      
    for(var i in productos){
        var producto = JSON.parse(productos[i]); 
        tabla += "<tbody><tr><td>"+producto.nombre+"</td>";
        tabla += "<td>"+producto.precio+"</td>";
        tabla += "<td><button class='btn btn-light'><img src='media/error.png' onclick='borrar("+i+")' alt='' width='40px'></button></td>";
        tabla += "</tr></tbody>";
        pagar = pagar+producto.precio;
    }
            
    document.getElementById("listado").innerHTML=tabla;
    document.getElementById("total").innerHTML="Total de productos: "+aLength;
    document.getElementById("tpagar").innerHTML="Total a pagar: $"+pagar;
}
function añadir(prod,pre){
    var producto = JSON.stringify({
        nombre:prod,
        precio:pre,
    });
    if(accion=="A"){
        productos.push(producto);
        localStorage.setItem("productos",JSON.stringify(productos)); 
        document.getElementById("alert").innerHTML='<div class="alert alert-danger" role="alert">Producto anadido exitosamente</div>';
        setTimeout(() => {document.getElementById("alert").innerHTML="";}, 3000);
    }
             
    lista();
}

function borrar(i){
    indice = i;
    var producto = JSON.parse(productos[indice]);
    var nombre=producto.nombre;
    productos.splice(indice,1);
    localStorage.setItem("productos",JSON.stringify(productos));
        
    document.getElementById("alert").innerHTML='<div class="alert alert-danger" role="alert">El vinilo "'+nombre+'" fue eliminado</div>';
    setTimeout(() => {document.getElementById("alert").innerHTML="";}, 3000);
    lista();
}

window.onload = lista;
