export class Dado {
    puntos: number;

    constructor() {
        this.puntos = 0;
    }

    lanzar(): void {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}