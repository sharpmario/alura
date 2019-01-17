var frase = $('.frase').text();
var numeroPalavras = frase.split(" ").length;
$("#tamanho-frase").text(numeroPalavras);

let campo = $(".campo-digitacao");
campo.on("input", function(event){
    let conteudo = campo.val();
    let qtdPalavras = conteudo.split(/\S+/).length -1;
    let qtdCaracteres = conteudo.length;

    $("#contador-caracteres").text(qtdCaracteres);
    $("#contador-palavras").text(qtdPalavras);
    
});