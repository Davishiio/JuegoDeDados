var _a;
import { JuegoDados } from "./JuegoDados.js";
class Principal {
    static iniciarJuego() {
        // Captura los nombres desde los inputs del HTML
        const nombre1 = document.getElementById("jugador1").value;
        const nombre2 = document.getElementById("jugador2").value;
        const resultadoDiv = document.getElementById("resultado");
        if (!nombre1 || !nombre2) {
            resultadoDiv.innerHTML = "<p style='color: red;'>Debes ingresar los nombres de ambos jugadores.</p>";
            return;
        }
        const juego = new JuegoDados(nombre1, nombre2);
        juego.iniciarJuego();
        if (juego.vencedor === null) {
            resultadoDiv.innerHTML = "<p>Empate. No hay un vencedor.</p>";
        }
        else {
            resultadoDiv.innerHTML = `<p>El vencedor es: <strong>${juego.vencedor.nombre}</strong></p>`;
        }
    }
}
// Asociar la función al botón en el HTML
(_a = document.getElementById("startGame")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    Principal.iniciarJuego();
});
