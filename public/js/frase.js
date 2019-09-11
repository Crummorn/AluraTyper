$("#js-botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $("#js-spinner").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function() {
        $("#js-error").show();

        setTimeout(function () {
            $("#js-error").hide();
        }, 3000);
    })
    .always(function () {
        $("#js-spinner").hide();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".js-frase");
    var numAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numAleatorio].texto);   
    atualizaTamanhoFrase();    
    atualizaTempoInicial(data[numAleatorio].tempo);
}