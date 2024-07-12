import { Artista } from './artistas';

export class Cancion {
  constructor(
    public id: number,
    public nombre: string,
    public album: string[],
    public reproducciones: number,
    public generoMusical: string[],
    public duracion: number,
    public Artista: Artista,
  ) {}
}
