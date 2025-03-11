
import { Jugador } from "./Jugador";
import { Dado } from "./Dado";
export class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    marcadorJugador1: number;
    marcadorJugador2: number;
    dado1: Dado;
    dado2: Dado;
    vencedor: Jugador | null;
    private bandJugador: boolean;

    constructor(nombre1: string, nombre2: string) {
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.cantidadJugadas = 0;
        this.vencedor = null;
        this.bandJugador=true;
    }

    elegirPrimerLanzador(): void {
        this.bandJugador = Math.random() < 0.5;
    }

    iniciarJugada(): void {
        if (this.bandJugador === undefined) {
            throw new Error("bandJugador no ha sido inicializado.");
        }
    
        const jugadorActual = this.bandJugador ? this.jugador1 : this.jugador2;
        const otroJugador = this.bandJugador ? this.jugador2 : this.jugador1;
    
        this.dado1.lanzar();
        this.dado2.lanzar();
    
        if (this.dado1.puntos + this.dado2.puntos > 7) {
            jugadorActual.puntoGanado = 1;
        } else {
            jugadorActual.puntoGanado = 0;
        }
    
        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;
    }
    

    iniciarJuego(): void {
        this.elegirPrimerLanzador();
        
        do {
            this.iniciarJugada();
            this.cantidadJugadas++;
            console.log(`Num. jugada: ${this.cantidadJugadas} puntaje jugador 1 = ${this.marcadorJugador1} puntaje jugador 2 = ${this.marcadorJugador2}`);
        } while (this.marcadorJugador1 !== 5 && this.marcadorJugador2 !== 5);

        this.vencedor = this.determinarVencedor();
    }

    determinarVencedor(): Jugador | null {
        if (this.marcadorJugador1 === 5) {
            return this.jugador1;
        } else if (this.marcadorJugador2 === 5) {
            return this.jugador2;
        }
        return null;
    }
}
