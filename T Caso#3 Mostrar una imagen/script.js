window.onload = function(){
    var appfile = (window.file && window.FileReader);
    if(appfile == false){
        document.getElementById("error").innerHTML = "Tu navegador no es compatible.";
        return;
    }
    document.getElementById("archivos").addEventListener("change", seleccionaArchivo);
}

function seleccionaArchivo(e){
    var archivo = e.target.files[0];
    muestraDatos(archivo);

    if(!archivo.type.match("image.*")){
        document.getElementById("salida").innerHTML = "Este archivo no es un archivo binario.";
            setTimeout(function (){
                document.getElementById("salida").innerHTML = '';
                location.reload(); 
            }, 4000);
        return;
    }

    var datos = new FileReader();
    datos.readAsDataURL(archivo);
    datos.onload = function(e){
        var resultado = e.target.result;
        var imagen = new Image();
        imagen.src = resultado;
        document.getElementById("salida").appendChild(imagen);
    }
}

function muestraDatos(archivo){
    document.getElementById("nombre").innerHTML = archivo.name;
    document.getElementById("tamano").innerHTML = archivo.size;
    document.getElementById("tipo").innerHTML = archivo.type;
}