function inserePlacar(){
    let tbody = $(".placar").find("tbody");
    let numPalavras = contadorPalavras.text();
    let usuario = "Mário";
    
    tbody.prepend(novaLinha(usuario, numPalavras));
}

function novaLinha(usuario, numPalavras){
    let linha = $("<tr>");
    let usuarioTd = $('<td>').text(usuario);
    let numPalavrasTd = $('<td>').text(numPalavras);

    let removerTd = $('<td>');
    let link = $('<a>').addClass('botao-remover').attr('href','#');
    let i = $('<i>').addClass('small').addClass('material-icons').text('delete');
    removerTd.append(link.append(i));

    link.click(function(event){
        event.preventDefault();
        $(this).parent().parent().remove();
    });

    linha.append(usuarioTd);
    linha.append(numPalavrasTd);
    linha.append(removerTd);

    return linha;
}