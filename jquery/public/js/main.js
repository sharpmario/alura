
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
    let tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        $("#botao-reiniciar").attr("disabled",true);
        let id = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante==0){
                campo.attr("disabled",true);
                clearInterval(id);
                $("#botao-reiniciar").attr("disabled", false);
            }
        },1000);
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val('');
    contadorCaracteres.text("0");
    contadorPalavras.text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}

$(document).ready(function(){
    atualizaTamanhoFase();
    inicializaContadores();
    inicializaCronometro();

    $("#botao-reiniciar").click(reiniciaJogo);
});

