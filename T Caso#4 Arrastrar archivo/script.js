 window.onload = function(){
    var apifile = (window.file && window.FileReader);

    if(apifile == false){
        alert("Tu navegador NO soporta API File");
        return;
    }
    document.getElementById("soltar").addEventListener("drop", soltarArchivo);
    document.getElementById("soltar").addEventListener("dragover", moverArchivo);
 }

function soltarArchivo(e){
    e.preventDefault();
    var archivo = e.dataTransfer.files;
    var total = 0;
    var info = " ";

    for(var i=0; i<archivo.length; i++){
        info += "<p>";
        info += "Nombre: "+archivo[i].name+"<br>";
        info += "Tamaño: "+archivo[i].size+"<br>";
        info += "Tipo: "+archivo[i].type;
        info += "</p>";
        total += archivo[i].size;
    }
    info += "<p>Total de KB de Bytes leídos: "+total/1024+" en "+archivo.length+" archivos </p>";
    document.getElementById("salida").innerHTML = info;
}

function moverArchivo(e){
    e.preventDefault();
}