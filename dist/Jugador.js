var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }
    Jugador.prototype.lanzaDados = function (dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    };
    return Jugador;
}());
export { Jugador };
