import { Component } from '@angular/core';
import { GiphyService } from '../servicios/giphy.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {
  // Variables
  gifs = []
  // Constructor
  constructor(
    private giphyService: GiphyService,
  ){}

  // Funciones
  getGifs(): void {
    this.giphyService.getGifs()
        .subscribe(gifs => this.gifs = gifs); //obtenemos los datos de la llamada con subscribe
  }
}
