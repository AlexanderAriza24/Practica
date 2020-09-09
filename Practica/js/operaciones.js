function calcularPulso(){
    var sexo =document.getElementsByClassName("dropdown-item").item;
    var edad = document.getElementById("edad").value;
    if(sexo=="Femenino"){
        var calculo = (220-edad)/10;
    }else{
        var calculo = (210-edad)/10;
    }
    return calculo;
}

function limpiarForm(){

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("edad").value = "";
}

function guardarDatos(){

    var id =document.getElementById("id").value;
    var nombre =document.getElementById("name").value;
    var edad =document.getElementById("edad").value;
    var sexo =document.getElementById("menu").value;
    var pulsaciones = calcularPulso();
    var persona={id:id,nombre:nombre,edad:edad,sexo:sexo,pulsaciones:pulsaciones};
    localStorage.setItem(id,JSON.stringify(persona));
    alert("Su Pulsacion es de: "+ pulsaciones);
    limpiarForm();
}

function leerDatos(){
    
    for(var x=0; x<=localStorage.length-1; x++){

        var clave = localStorage.key(x);
        var persona = JSON.parse( localStorage.getItem(clave));

        var tabla = document.getElementById("table");
        var fila = tabla.insertRow();
        var cell1 = fila.insertCell(0);
        var cell2 = fila.insertCell(1);
        var cell3 = fila.insertCell(2);
        var cell4 = fila.insertCell(3);
        var cell5 = fila.insertCell(4);

        cell1.innerHTML = persona["id"];
        cell2.innerHTML = persona["nombre"];
        cell3.innerHTML = persona["edad"];
        cell4.innerHTML = persona["sexo"];
        cell5.innerHTML = persona["pulsaciones"];
        
    }
}

function buscarPersona(){

    var id = document.getElementById("id").value;
    var bandera="n";
    for(var x=0; x<=localStorage.length-1; x++){

        var clave = localStorage.key(x);
        if(clave == id){

            bandera="s";
        }
    }
    if(bandera=="n"){

        alert("El Usuario que Busca no esta Registrado");
    }else{

        var persona = JSON.parse( localStorage.getItem(id));
        var tabla = document.getElementById("table");
        var fila = tabla.insertRow();
        var cell1 = fila.insertCell(0);
        var cell2 = fila.insertCell(1);
        var cell3 = fila.insertCell(2);
        var cell4 = fila.insertCell(3);
        var cell5 = fila.insertCell(4);

        cell1.innerHTML = persona["id"];
        cell2.innerHTML = persona["nombre"];
        cell3.innerHTML = persona["edad"];
        cell4.innerHTML = persona["sexo"];
        cell5.innerHTML = persona["pulsaciones"];
    }
}

function eliminarPersona(){

    var id= document.getElementById("id").value;
    var bandera="n";
    for(var x=0; x<=localStorage.length-1; x++){

        var clave = localStorage.key(x);
        if(clave == id){

            bandera="s";
        }
    }
    if(bandera=="n"){

        alert("El Usuario que Busca no esta Registrado");
    }else{

        localStorage.removeItem(id);
        alert("Se Elimino con Exito");
    }
}
/*$("#btnConsultar").click(function consultarJson() {

    var lista = leerDatos(),
    tbody = document.querySelector("#table");

    if(lista==null){

        alert("No hay elementos guardados");
    }else{

        for(var i=0; i<lista.length; i++){
            var row=tbody.insertRow(i);
            var idCell=row.insertCell(0),
                nomCell=row.insertCell(1),
                edadCell=row.insertCell(2),
                sexoCell=row.insertCell(3),
                pulsoCell=row.insertCell(4);

            idCell.innerHTML = lista[i].ide
        }
    }
})*/