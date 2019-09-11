$("#js-botao-frase").click(fraseAleatoria);
$("#js-botao-frase-id").click(fraseEspecifica);

function fraseAleatoria() {
    $("#js-spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function() {
        $("#js-error").show();

        setTimeout(function () {
            $("#js-error").hide();
        }, 3000);
    })
    .always(function () {
        $("#js-spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".js-frase");
    var numAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numAleatorio].texto);   
    atualizaTamanhoFrase();    
    atualizaTempoInicial(data[numAleatorio].tempo);
}

function fraseEspecifica() {
    $("#js-spinner").toggle();

    var fraseId = $("#js-frase-id").val();
    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function() {
        $("#js-error").show();

        setTimeout(function () {
            $("#js-error").hide();
        }, 3000);
    })
    .always(function () {
        $("#js-spinner").toggle();
    });
}

function trocaFrase(data) {
    var frase = $(".js-frase");
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}