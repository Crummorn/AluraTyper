// Contador principal da frase
var frase = $(".js-frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#js-tamanho-frase");
tamanhoFrase.text(numPalavras);

// Contadores do textarea
$(".js-campo-digitacao").on("input", function(){
    var conteudo = $(this).val();

    var qtdCarateres = conteudo.length;
    $("#js-contador-caracteres").text(qtdCarateres);

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#js-contador-palavras").text(qtdPalavras);
});
