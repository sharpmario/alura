function calculaImc(peso, altura, fixed = 2 ){
    var imc = peso / (altura * altura);
    return imc.toFixed(fixed);
}

function atualizaTabela(){
    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i<pacientes.length; i++){

        var paciente = pacientes[i];
        
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        var gordura = paciente.querySelector(".info-gordura").textContent;
        var pesoInvalido = !validaPeso(peso);
        var alturaInvalida = !validaAltura(altura);

        if(pesoInvalido){
            paciente.querySelector(".info-imc").textContent = "Peso inválido!"
            paciente.classList.add('paciente-invalido');
        }

        if(alturaInvalida){
            paciente.querySelector(".info-imc").textContent = "Altura inválida!"
            paciente.classList.add('paciente-invalido');
        }

        if(!pesoInvalido && !alturaInvalida){
            var imc = calculaImc(peso, altura);
            paciente.querySelector(".info-imc").textContent = imc;
        }

    }
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 300){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if(altura <=0 || altura >= 3.00){
        return false;
    }else{
        return true;
    }

}

atualizaTabela();