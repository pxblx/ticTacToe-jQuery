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
     * @throws Jugador ganador y array con los índices de la raya con la que gana
     */
    let comprobar = function (resultado, raya) {
        if (resultado === 8) throw {ganador: JUGADOR_X, raya: raya};
        if (resultado === 27) throw {ganador: JUGADOR_O, raya: raya};
    }

    /**
     * Poner ficha en la celda y comprobar la jugada
     * 
     * @param {Number} celda Celda
     * 
     * @throws Empate o jugador ganador y array con los índices de la raya con la que gana
     */
    let clickCelda = function (celda) {
        tablero[celda] = turno === JUGADOR_X ? 2 : 3; // Colocar ficha (2 para las X y 3 para las O)
        turno = turno === JUGADOR_X ? JUGADOR_O : JUGADOR_X; // Cambio de turno

        // Comprobar horizontal 1
        comprobar(tablero[0] * tablero[1] * tablero[2], [0, 1, 2]);

        // Comprobar horizontal 2
        comprobar(tablero[3] * tablero[4] * tablero[5], [3, 4, 5]);

        // Comprobar horizontal 3
        comprobar(tablero[6] * tablero[7] * tablero[8], [6, 7, 8]);

        // Comprobar vertical 1
        comprobar(tablero[0] * tablero[3] * tablero[6], [0, 3, 6]);

        // Comprobar vertical 2
        comprobar(tablero[1] * tablero[4] * tablero[7], [1, 4, 7]);

        // Comprobar vertical 3
        comprobar(tablero[2] * tablero[5] * tablero[8], [2, 5, 8]);

        // Comprobar diagonal 1
        comprobar(tablero[0] * tablero[4] * tablero[8], [0, 4, 8]);

        // Comprobar diagonal 2
        comprobar(tablero[2] * tablero[4] * tablero[6], [2, 4, 6]);

        // Comprobar empate
        if (tablero.every((celda) => celda !== 0)) throw "empate";
    }

    return {
        clickCelda: clickCelda,
        getTurno: getTurno
    }
})();
