var btnAdd = document.querySelector('#adicionar-paciente');
btnAdd.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    let paciente = obtemPacienteDoFormulario(form);
    let tr = montaTr(paciente);

    console.log(paciente);

    let erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0){

        exibeMensagemDeErros(erros);

        return;
    }
   
    document.querySelector('#tabela-pacientes').appendChild(tr);
    form.reset();
    limpaMensagensErro();
});

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        gordura : form.gordura.value,
        altura : form.altura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    };

    return paciente;
}

function montaTr(paciente){
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montaTd(paciente.nome, 'info-nome'));
    tr.appendChild(montaTd(paciente.peso, 'info-peso'));
    tr.appendChild(montaTd(paciente.altura, 'info-altura'));
    tr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    tr.appendChild(montaTd(paciente.imc,'info-imc'));

    tr.addEventListener("dblclick",function(){
        this.remove();
    });

    return tr;
}

function montaTd(content, cssClass){
    let td = document.createElement("td")
    td.textContent = content;
    td.classList.add(cssClass);
    return td;
}

function validaPaciente(paciente){
    let erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("Informe o nome do paciente!");
    }

    if(paciente.altura.length == 0){
        erros.push("Informe a altura do paciente!");
    }else if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("Informe a gordura do paciente!");
    }

    if(paciente.peso.length == 0){
        erros.push("Informe o peso do paciente!");
    }else if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!")
    }

    return erros;
}

function exibeMensagemDeErros(erros){
    limpaMensagensErro();
    let ul = document.querySelector('#mensagens-erro');

    erros.forEach(msg => {
        let li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
    
}

function limpaMensagensErro(){
    document.querySelector('#mensagens-erro').innerHTML = "";
}