$("#js-botao-placar").click(mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".js-placar").find("tbody");

    var usuario = "Douglas";
    var numPalavras = $("#js-contador-palavras").text();

    var linha = novalinha(usuario, numPalavras);
    linha.find(".js-botao-remover").click(removeLinha);

    corpoTabela.append(linha);
    
    $(".js-placar").slideDown(1000);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".js-placar").offset().top;

    $("html, body").animate({
        scrollTop: posicaoPlacar
    }, 1000);
}

function novalinha(usuario, qtdPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(qtdPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("js-botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault();

    linha = $(this).parent().parent();

    linha.fadeToggle(1000);
    setTimeout(function () {
        linha.remove;
    }, 1000);
}

function mostraPlacar() {
    $(".js-placar").stop().slideToggle(1000);
}