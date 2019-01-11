let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input',function(){
    document.querySelectorAll(".paciente").forEach(p => p.hidden = false);
    let value = this.value;

    let pacientes = document.querySelectorAll(".paciente");
    let regex = new RegExp(value, "i");
    Array.from(pacientes)
        .map(paciente => paciente.querySelector(".info-nome"))
        .forEach(paciente => {
            let nome = paciente.innerText;
            if(!regex.test(nome)){                
                paciente.parentElement.hidden = true;
            }
        });
});