$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();

    $.get("http://localhost:3000/frases",function(data){

        console.log(data);
        let numeroAleatorio = Math.floor(Math.random() * data.length);
        let frase = data[numeroAleatorio];
        $(".frase").text(frase.texto);        
        atualizaTempo(frase.tempo);
        atualizaTamanhoFase();
    }).fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
        
    }).always(function(){
        $("#spinner").toggle();
    });


}