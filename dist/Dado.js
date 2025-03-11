var Dado = /** @class */ (function () {
    function Dado() {
        this.puntos = 0;
    }
    Dado.prototype.lanzar = function () {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    };
    return Dado;
}());
export { Dado };
