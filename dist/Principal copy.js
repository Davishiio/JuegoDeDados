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

        // Elementos para la animación y la tabla
        const dado1 = document.getElementById("dado1");
        const dado2 = document.getElementById("dado2");
        const tablaResultados = document.getElementById("tablaResultados");

        // Crear instancia del juego
        const juego = new JuegoDados(nombre1, nombre2);
        
        // Ejecutar la lógica del juego (que asigna los valores de los dados y el ganador)
        juego.iniciarJuego();

        // Mostrar animación de los dados con valores aleatorios
        dado1.src = `../images/dado${Math.ceil(Math.random() * 6)}.png`;
        dado2.src = `../images/dado${Math.ceil(Math.random() * 6)}.png`;
        resultadoDiv.innerHTML = "<p>Lanzando los dados...</p>";

        // Breve pausa para mostrar la animación
        setTimeout(() => {
            // Actualizar las imágenes con los valores finales obtenidos
            dado1.src = `../images/dado${juego.jugador1.dado}.png`;
            dado2.src = `../images/dado${juego.jugador2.dado}.png`;
            
            // Mostrar el resultado final
            if (juego.vencedor === null) {
                resultadoDiv.innerHTML = "<p>Empate. No hay un vencedor.</p>";
            } else {
                resultadoDiv.innerHTML = `<p>El vencedor es: <strong>${juego.vencedor.nombre}</strong></p>`;
            }

            // Agregar los resultados a la tabla
            const nuevaFila = tablaResultados.insertRow();
            nuevaFila.insertCell(0).textContent = nombre1;
            nuevaFila.insertCell(1).textContent = juego.jugador1.dado;
            nuevaFila.insertCell(2).textContent = nombre2;
            nuevaFila.insertCell(3).textContent = juego.jugador2.dado;
            nuevaFila.insertCell(4).textContent = juego.vencedor ? juego.vencedor.nombre : "Empate";
        }, 1500); // Pausa de 1.5 segundos
    }
}

// Asociar la función al botón en el HTML
(_a = document.getElementById("startGame")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    Principal.iniciarJuego();
});
