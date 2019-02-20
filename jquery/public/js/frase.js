$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").show();

    $.get("http://localhost:3000/frases",function(data){
        console.log(data);
        let numeroAleatorio = Math.floor(Math.random() * data.length);
        let frase = data[numeroAleatorio];
        trocaFrase(frase);
    }).fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
        
    }).always(function(){
        $("#spinner").toggle();
    });


}

function buscaFrase(){
    $("#spinner").show();
    let id = $("#frase-id").val();
    let dados = {id};
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
        
    }).always(function(){
        $("#spinner").toggle();
    });

}

function trocaFrase(frase){    
    $(".frase").text(frase.texto);        
    atualizaTempo(frase.tempo);
    atualizaTamanhoFase();
}