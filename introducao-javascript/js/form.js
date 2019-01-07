var btnAdd = document.querySelector('#adicionar-paciente');
btnAdd.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    let paciente = obtemPacienteDoFormulario(form);
    montaTr(paciente);
    form.reset();
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

    document.querySelector('#tabela-pacientes').appendChild(tr);
}

function montaTd(content, cssClass){
    let td = document.createElement("td")
    td.textContent = content;
    td.classList.add(cssClass);
    return td;
}