$("#js-botao-placar").click(mostraPlacar);
$("#js-botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".js-placar").find("tbody");

    var usuario = $("#usuarios").val();
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

    var link = $("<a>").attr("href", "#").addClass("js-botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();

    linha = $(this).parent().parent();

    linha.fadeToggle(1000);

    setTimeout(function () {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    $(".js-placar").stop().slideToggle(1000);
}

function sincronizaPlacar() {
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function () {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);
    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function () {
        console.log("Placar sincronizado com sucesso");
        $(".tooltip").tooltipster("open");
    }).fail(function () {
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
    }).always(function () { //novo
        setTimeout(function () {
            $(".tooltip").tooltipster("close");
        }, 1200);
    });
}

function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function (data) {
        $(data).each(function () {
            var linha = novalinha(this.usuario, this.pontos);

            linha.find(".js-botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}