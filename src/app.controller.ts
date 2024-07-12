import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artistas';

@Controller()
export class AppController {
  artistas: Artista[] = [];

  constructor(private readonly appService: AppService) {
    this.artistas.push(
      new Artista(1, 'juan', 'bio', 'banda', 'chilena', ['rock'], 1),
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
