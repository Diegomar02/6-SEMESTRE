window.onload = function(){
    var appfile = (Window.file && window.FileReader);
    if(appfile == false){
        document.getElementById("error").innerHTML="Tu navegador no es compatible.";
        return;
    }
    document.getElementById("archivos").addEventListener("change", seleccionaArchivo);  
}

function seleccionaArchivo(e){
    var archivo = e.target.files;
    var total = 0;
    var info = "<h2>Archivos que seleccionaste</h2>";
    info += "<table><th>Nombre</th><th>Tamaño</th><th>Tipo</th>";

    for(var i=0; i<archivo.length; i++){
        info += "<tr>";
        info += "<td>"+archivo[i].name+"</td>";
        info += "<td>"+archivo[i].size+"</td>";
        info += "<td>"+archivo[i].type+"</td>";
        info += "</tr>";
        total += archivo[i].size;
    }
    info += "</table>";
    info += "<p>Total de KB leídos: "+total/1024+" en "+archivo.length+" archivos. </p>";
    document.getElementById("salida").innerHTML = info;
}