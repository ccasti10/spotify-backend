export class Artista {
  constructor(
    public id: number,
    public nombre: string,
    public bio: string,
    public tipo: string,
    public paisOrigen: string,
    public generoMusical: string[],
    public oyentesMensuales: number,
  ) {}
}
