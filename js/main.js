/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

$(function () {

    // Celdas
    let $celdas = $(".celda");

    // Espacio donde se muestra el estado de la partida
    let $infoP = $("#infoP"); // Texto de información
    let $infoImg = $("#infoImg"); // Imagen de información

    // Listener para las celdas
    $celdas.click(function () {
        $(this).addClass(ticTacToe.getTurno() + " desactivada");
        let resultado = ticTacToe.clickCelda($celdas.index($(this)));
        if (resultado.finPartida) {
            if (resultado.ganador === "empate") {
                $infoP.html("Empate");
                $infoImg.css("display", "none");
            } else {
                $infoP.html("Ha ganado");
                $infoImg.attr("src", "img/" + resultado.ganador + ".png");
                $celdas.each(function (index) {
                    if ($.inArray(index, resultado.raya) !== -1) $(this).fadeOut().addClass("raya").fadeIn().fadeOut().fadeIn();
                    $(this).addClass("desactivada");
                });
            }
        } else {
            $infoImg.attr("src", "img/" + ticTacToe.getTurno() + ".png");
        }
    });

    // Reiniciar la partida
    $("#reiniciar").click(function () {
        location.reload();
    });
});
