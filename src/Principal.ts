export class JuegoDados {
    jugador1: string;
    jugador2: string;
    vencedor: { nombre: string } | null = null;
  
    constructor(jugador1: string, jugador2: string) {
      this.jugador1 = jugador1;
      this.jugador2 = jugador2;
    }
  
    iniciarJuego(): void {
      const randomResultado = Math.random();
      if (randomResultado < 0.5) {
        this.vencedor = { nombre: this.jugador1 };
      } else if (randomResultado > 0.5) {
        this.vencedor = { nombre: this.jugador2 };
      } else {
        this.vencedor = null;
      }
    }
  }
  
  export function iniciarJuego() {
    const jugador1 = (document.getElementById('jugador1') as HTMLInputElement).value;
    const jugador2 = (document.getElementById('jugador2') as HTMLInputElement).value;
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;
  
    if (!jugador1 || !jugador2) {
      resultadoDiv.innerHTML = 'Debes ingresar 2 nombres para los jugadores';
      return;
    }
  
    const juego = new JuegoDados(jugador1, jugador2);
    juego.iniciarJuego();
  
    if (juego.vencedor === null) {
      resultadoDiv.innerHTML = 'Empate. No hay un vencedor';
    } else {
      resultadoDiv.innerHTML = 'El vencedor es: ' + juego.vencedor.nombre;
    }
  }
  