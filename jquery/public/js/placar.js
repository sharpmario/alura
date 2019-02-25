$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar(){
    let tbody = $(".placar").find("tbody");
    let numPalavras = contadorPalavras.text();
    let usuario = "Mário";
    
    tbody.prepend(novaLinha(usuario, numPalavras));
    $(".placar").slideDown(500);
}

function scrollPlacar(){
    var posicao = $(".placar").offset().top;
    $("body").animate({
        scrollTop: posicao+"px"
    },500);
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
        var linha = $(this).parent().parent();
        linha.fadeOut(500);
        setTimeout(function(){
            linha.remove();
        },500);
    });

    linha.append(usuarioTd);
    linha.append(numPalavrasTd);
    linha.append(removerTd);

    return linha;
}

function mostraPlacar(){
    $(".placar").stop().slideToggle();
}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var pontos = $(this).find("td:nth-child(2)").text();
        
        var score = {
            usuario,
            pontos
        }

        placar.push(score);
    });

    var dados = {placar};
    $.post("http://localhost:3000/placar",dados,function(){
        console.log("Post realizado");
    });
    
}