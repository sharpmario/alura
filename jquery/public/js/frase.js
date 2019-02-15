$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases",function(data){
        console.log(data);
        let numeroAleatorio = Math.floor(Math.random() * data.length);
        let frase = data[numeroAleatorio];
        $(".frase").text(frase.texto);        
        atualizaTempo(frase.tempo);
        atualizaTamanhoFase();
    });
}

