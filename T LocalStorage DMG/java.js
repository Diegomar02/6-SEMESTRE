       var indice=-1;
       var accion="A";        
        var libros=localStorage.getItem("libros");
        libros=JSON.parse(libros);
        if(libros==null) libros=[];
        function lista(){
            var aLength = libros.length;
            document.getElementById("listado").innerHTML="";
            document.getElementById("total").innerHTML="";
            var tabla="<tr><th>Titulo</th><th>Autor</th><th>Editorial</th><th>Anio</th><<th>Borrar</th><th>Editar</th></tr>";
            for(var i in libros){
                var libro = JSON.parse(libros[i]);
                tabla += "<tr><td>"+libro.titulo+"</td>";
                tabla += "<td>"+libro.autor+"</td>";
                tabla += "<td>"+libro.editorial+"</td>";
                tabla += "<td>"+libro.anio+"</td>";
                tabla += "<td><input type='button' value='baja' onClick='borrar("+i+")'></td>";
                tabla += "<td><input type='button' value='editar' onClick='editar("+i+")'></td>";
                tabla += "</tr>";
            }
            document.getElementById("listado").innerHTML=tabla;
            document.getElementById("total").innerHTML="Total de libros: "+aLength;
        }
        function alta(){
            var titulo = document.getElementById("titulo").value;
            var autor = document.getElementById("autor").value;
            var editorial = document.getElementById("editorial").value;
            var anio = document.getElementById("anio").value;
            var libro = JSON.stringify(
                { titulo:titulo, 
                  autor:autor,  
                  editorial:editorial, 
                  anio:anio  
                });
                if(accion=="A"){
                    libros.push(libro);
                    localStorage.setItem("libros",JSON.stringify(libros));
                    alert("libro añadido existosamente");
                }else{
                    libros[indice]=libro;
                    localStorage.setItem("libros",JSON.stringify(libros));
                    alert("libro modificado exitosamente");
                    accion="A";
                }
                lista();
                document.getElementById("titulo").value="";
                document.getElementById("autor").value="";
                document.getElementById("editorial").value="";
                document.getElementById("anio").value="";
        }
        function borrar(i){
            indice = i;
            var libro=JSON.parse(libros[indice]);
            var titulo=libro.titulo;
            if(confirm("Desear borrar el libro "+titulo+" ?")){
                libros.splice(indice,1);
                localStorage.setItem("libros",JSON.stringify(libros));
                alert("El libro "+titulo+" ha sido eliminado");
            }
            lista();
        }
        function editar(i){
            indice = i;
            accion="E";
            var libro=JSON.parse(libro[indice]);
            document.getElementById("titulo").value=libro.titulo;
            document.getElementById("autor").value=libro.autor;
            document.getElementById("editorial").value=libro.editorial;
            document.getElementById("anio").value=libro.anio;
        }
        window.onload=function(){
            lista();
        }

  