import { JuegoDados } from "./JuegoDados";

class Principal {
    static iniciarJuego(): void {
        // Captura los nombres desde los inputs del HTML
        const nombre1 = (document.getElementById("jugador1") as HTMLInputElement).value;
        const nombre2 = (document.getElementById("jugador2") as HTMLInputElement).value;
        const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;

        if (!nombre1 || !nombre2) {
            resultadoDiv.innerHTML = "<p style='color: red;'>Debes ingresar los nombres de ambos jugadores.</p>";
            return;
        }

        const juego = new JuegoDados(nombre1, nombre2);
        juego.iniciarJuego();

        if (juego.vencedor === null) {
            resultadoDiv.innerHTML = "<p>Empate. No hay un vencedor.</p>";
        } else {
            resultadoDiv.innerHTML = `<p>El vencedor es: <strong>${juego.vencedor.nombre}</strong></p>`;
        }
    }
}

// Asociar la función al botón en el HTML
document.getElementById("startGame")?.addEventListener("click", () => {
    Principal.iniciarJuego();
});
