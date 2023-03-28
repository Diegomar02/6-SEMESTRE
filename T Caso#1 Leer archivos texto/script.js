window.onload = function (){
    var appfile = (window.File && window.FileReader);
    if(appfile == false){
        document.getElementById("error").innerHTML = "Tu navegador no es compatible. ";
        return;
    }
    document.getElementById("archivos").addEventListener("change", seleccionaArchivo);
}  

function seleccionaArchivo(e){
    var archivo = e.target.files[0] ;

    if (!archivo){

        document.getElementById("error").innerHTML = "Este archivo no es de texto";

        someTtimeout(function(){
            document.getElementById("error").innerHTML='';
            location.reload(); //Recarga toda la página
        } , 4000);

    } 
    
    else {
        muestraDatos(archivo);
        var datos = new FileReader();
        datos.readAsText(archivo);

        datos.onload = function(e){
            var resultado= e.target.result;
            document.getElementById("salida").innerHTML = resultado;
        }       
    }
}

function muestraDatos(archivo){
    document.getElementById("nombre").innerHTML = archivo.name;
    document.getElementById("tamano").innerHTML = archivo.size;
    document.getElementById("tipo").innerHTML = archivo.type;
}
