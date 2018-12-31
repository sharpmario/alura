var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura){
    return peso / (altura * altura);
}

function criaTd(content, cssClass){
    var td = document.createElement("td")
    td.textContent = content;
    td.classList.add(cssClass);
    return td;
}

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
        var imc = calculaImc(peso, altura);
        console.log(imc);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }

}

var btnAdd = document.querySelector('#adicionar-paciente');
btnAdd.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    var altura = form.altura.value;

    var tr = document.createElement("tr");

    tr.appendChild(
        criaTd(nome, 'info-nome')
    );

    tr.appendChild(
        criaTd(peso, 'info-peso')
    );

    tr.appendChild(
        criaTd(altura, 'info-altura')
    );

    tr.appendChild(
        criaTd(gordura, 'info-gordura')
    );

    var imc = calculaImc(peso,altura);
    tr.appendChild(
        criaTd(imc.toFixed(2),'info-imc')
    );

    var tbody = document.querySelector('#tabela-pacientes');
    tbody.appendChild(tr);
});

