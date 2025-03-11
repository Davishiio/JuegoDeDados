var JuegoDados = /** @class */ (function () {
    function JuegoDados(jugador1, jugador2) {
        this.vencedor = null;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }
    JuegoDados.prototype.iniciarJuego = function () {
        var randomResultado = Math.random();
        if (randomResultado < 0.5) {
            this.vencedor = { nombre: this.jugador1 };
        }
        else if (randomResultado > 0.5) {
            this.vencedor = { nombre: this.jugador2 };
        }
        else {
            this.vencedor = null;
        }
    };
    return JuegoDados;
}());
export { JuegoDados };
export function iniciarJuego() {
    var jugador1 = document.getElementById('jugador1').value;
    var jugador2 = document.getElementById('jugador2').value;
    var resultadoDiv = document.getElementById('resultado');
    if (!jugador1 || !jugador2) {
        resultadoDiv.innerHTML = 'Debes ingresar 2 nombres para los jugadores';
        return;
    }
    var juego = new JuegoDados(jugador1, jugador2);
    juego.iniciarJuego();
    if (juego.vencedor === null) {
        resultadoDiv.innerHTML = 'Empate. No hay un vencedor';
    }
    else {
        resultadoDiv.innerHTML = 'El vencedor es: ' + juego.vencedor.nombre;
    }
}
