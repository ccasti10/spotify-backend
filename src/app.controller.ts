import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artistas';
import { Cancion } from './cancion';

@Controller()
export class AppController {
  artistas: Artista[] = [];
  canciones: Cancion[] = [];

  constructor(private readonly appService: AppService) {
    this.artistas.push(
      new Artista(1, 'juan', 'bio', 'banda', 'chilena', ['rock'], 1),
    );
    this.canciones.push(
      new Cancion(1, 'bigote', ['mapache'], 10, ['rap'], 200, this.artistas[0]),
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('artistas')
  obtenerArtistas(): Artista[] {
    return this.artistas;
  }
  @Post('artistas')
  nuevoArtista(@Body() artista: Artista): Artista {
    console.log(artista);
    this.artistas.push(artista);
    return null;
  }
}
