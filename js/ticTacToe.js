/**
 * ticTacToe
 * 
 * @author Pablo Murillo Ávila
 */

let ticTacToe = (function () {
    const JUGADOR_X = "X"; // Jugador X
    const JUGADOR_O = "O"; // Jugador O

    let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Tablero del juego
    let turno = JUGADOR_X; // Turno acual

    /**
     * Devolver el turno actual
     * 
     * @returns {Number} Turno actual
     */
    let getTurno = function () {
        return turno;
    }

    /**
     * Comprobar una raya del tablero
     * 
     * @param {Number} resultado Resultado de la raya
     * @param {Array} raya Array con los índices las celdas de la raya
     * 
     * @throws Estado de la partida, jugador ganador y array con los índices de la raya con la que gana
     */
    let comprobar = function (resultado, raya) {
        if (resultado === 8) throw {finPartida: true, ganador: JUGADOR_X, raya: raya};
        if (resultado === 27) throw {finPartida: true, ganador: JUGADOR_O, raya: raya};
    }

    /**
     * Colocar ficha en la celda y comprobar la jugada
     * 
     * @param {Number} celda Celda
     * 
     * @returns Estado de la partida y en caso de que termine, jugador ganador y array con los índices
     * de la raya con la que gana
     */
    let clickCelda = function (celda) {
        tablero[celda] = turno === JUGADOR_X ? 2 : 3; // Colocar ficha (2 para las X y 3 para las O)
        turno = turno === JUGADOR_X ? JUGADOR_O : JUGADOR_X; // Cambio de turno

        // Comprobar si es jugada ganadora o empate y la partida termina
        try {
            comprobar(tablero[0] * tablero[1] * tablero[2], [0, 1, 2]); // Horizontal 1
            comprobar(tablero[3] * tablero[4] * tablero[5], [3, 4, 5]); // Horizontal 1
            comprobar(tablero[6] * tablero[7] * tablero[8], [6, 7, 8]); // Horizontal 3
            comprobar(tablero[0] * tablero[3] * tablero[6], [0, 3, 6]); // Vertical 1
            comprobar(tablero[1] * tablero[4] * tablero[7], [1, 4, 7]); // Vertical 1
            comprobar(tablero[2] * tablero[5] * tablero[8], [2, 5, 8]); // Vertical 3
            comprobar(tablero[0] * tablero[4] * tablero[8], [0, 4, 8]); // Diagonal 1
            comprobar(tablero[2] * tablero[4] * tablero[6], [2, 4, 6]); // Diagonal 2
            if (tablero.every((celda) => celda !== 0)) throw {finPartida: true, ganador: "empate"}; // Empate
        } catch (resultado) {
            return resultado;
        }

        // La partida continúa
        return {finPartida: false};
    }

    return {
        clickCelda: clickCelda,
        getTurno: getTurno
    }
})();
