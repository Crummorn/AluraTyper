var tempoInicial = $("#js-tempo-digitacao").text();
var textArea = $(".js-campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();

    $("#js-botao-reiniciar").click(reiniciaJogo);
});

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#js-tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase() {
    var frase = $(".js-frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#js-tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    textArea.on("input", function() {
        var conteudo = $(this).val();
    
        var qtdCarateres = conteudo.length;
        $("#js-contador-caracteres").text(qtdCarateres);
    
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#js-contador-palavras").text(qtdPalavras);
    });  
}

function inicializaCronometro() {
    $("#js-botao-reiniciar").addClass("disabled");
    textArea.one("focus", function() {
        var tempoRestante = $("#js-tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#js-tempo-digitacao").text(tempoRestante);
    
            if (tempoRestante < 1) {
                textArea.attr("disabled", true)
                clearInterval(cronometroID);
                textArea.addClass("campo-desabilitado");
                $("#js-botao-reiniciar").removeClass("disabled");
                inserePlacar();
            }
        }, 1000);
    });   
}

function reiniciaJogo() {
    textArea.attr("disabled", false);
    textArea.val("");
    $("#js-contador-palavras").text("0");
    $("#js-contador-caracteres").text("0");
    $("#js-tempo-digitacao").text(tempoInicial);
    textArea.removeClass("campo-desabilitado");
    inicializaCronometro();
    
    textArea.removeClass("borda-vermelha"); 
    textArea.removeClass("borda-verde"); 
}

function inicializaMarcadores() {
    textArea.on("input", function() {
        var frase = $(".js-frase").text();
        var digitado = textArea.val();
        var comparavel = frase.substr(0 , digitado.length);

        if (digitado == comparavel) {
            textArea.addClass("borda-verde");
            textArea.removeClass("borda-vermelha");
        } else {
            textArea.addClass("borda-vermelha");
            textArea.removeClass("borda-verde");
        }
    });
}