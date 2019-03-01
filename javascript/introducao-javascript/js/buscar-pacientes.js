//http://api-pacientes.herokuapp.com/pacientes

let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(envent){
    console.log("buscando na api"); 

    let request = new XMLHttpRequest();
    request.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    request.addEventListener("load",function(){
        Array.from(JSON.parse(request.responseText))
            .forEach(paciente => {
                addClienteNaTabela(paciente);
            });
    });

    request.send();
});