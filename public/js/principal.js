var tempoInicial = $("#js-tempo-digitacao").text();
var textArea = $(".js-campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();

    $("#js-botao-reiniciar").click(reiniciaJogo);
});

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
    var tempoRestante = $("#js-tempo-digitacao").text();
    textArea.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#js-tempo-digitacao").text(tempoRestante);
    
            if (tempoRestante < 1) {
                textArea.attr("disabled", true)
                clearInterval(cronometroID);
            }
        }, 1000);
    });   
}
function reiniciaJogo () {
    textArea.attr("disabled", false);
    textArea.val("");
    $("#js-contador-palavras").text("0");
    $("#js-contador-caracteres").text("0");
    $("#js-tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}

