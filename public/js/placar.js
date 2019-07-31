function inserePlacar() {
    var placar = $(".js-placar");
    var corpoTabela = placar.find("tbody");

    var usuario = "Douglas";
    var numPalavras = $("#js-contador-palavras").text();

    var linha = novalinha(usuario, numPalavras);
    linha.find(".js-botao-remover").click(removeLinha);
    corpoTabela.append(linha);
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
    $(this).parent().parent().remove();
}