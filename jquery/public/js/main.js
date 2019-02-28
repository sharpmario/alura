
var contadorCaracteres = $("#contador-caracteres");
var contadorPalavras = $("#contador-palavras");
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

function atualizaTamanhoFase(){
    var frase = $('.frase').text();
    var numeroPalavras = frase.split(" ").length;
    $("#tamanho-frase").text(numeroPalavras);
}

function inicializaContadores(){

    campo.on("input", function(event){
        let conteudo = campo.val();
        let qtdPalavras = conteudo.split(/\S+/).length -1;
        let qtdCaracteres = conteudo.length;
    
        contadorCaracteres.text(qtdCaracteres);
        contadorPalavras.text(qtdPalavras);
        
    });
}

function inicializaCronometro(){    
    campo.one("focus", function(){
        let tempoRestante = $("#tempo-digitacao").text();
        $("#botao-reiniciar").attr("disabled",true);
        let id = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante==0){
                clearInterval(id);
                finalizaJogo();        
            }
        },1000);
    });
}

function finalizaJogo(){
    campo.attr("disabled",true);
    campo.toggleClass("campo-desativado");
    $("#botao-reiniciar").attr("disabled", false);
    inserePlacar();
}

function atualizaTempo(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function inicializaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        let digitado = campo.val();
        
        if(digitado == frase.substring(0,digitado.length)){
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
        }else{
            campo.removeClass("campo-correto");
            campo.addClass("campo-errado");
        }
    });
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val('');
    campo.toggleClass("campo-desativado");
    campo.removeClass("campo-errado");
    campo.removeClass("campo-correto");

    contadorCaracteres.text("0");
    contadorPalavras.text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}


$(document).ready(function(){
    atualizaTamanhoFase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    atualizaPlacar();

    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger:'custom'
    });
    
    $("#botao-reiniciar").click(reiniciaJogo);
});

