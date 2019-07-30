// Contador principal da frase
var frase = $(".js-frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#js-tamanho-frase");
tamanhoFrase.text(numPalavras);

var textArea = $(".js-campo-digitacao");
// Contadores do textarea
textArea.on("input", function() {
    var conteudo = $(this).val();

    var qtdCarateres = conteudo.length;
    $("#js-contador-caracteres").text(qtdCarateres);

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#js-contador-palavras").text(qtdPalavras);
});

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