var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length; i++){

    var paciente = pacientes[i];
    console.log(paciente);

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var gordura = paciente.querySelector(".info-gordura").textContent;
    var pesoInvalido = false;

    console.log(peso, altura, gordura);

    if(peso <= 0 || peso >= 300){
        paciente.querySelector(".info-imc").textContent = "Peso inválido!"
        pesoInvalido = true;
        paciente.classList.add('paciente-invalido');
    }

    if(!pesoInvalido){
        var imc = peso / (altura * altura);
        console.log(imc);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }

}