import { Component } from '@angular/core';
import { Gifs } from '../interfaces/gifsSearch.interface';
import { GiphyService } from '../servicios/giphy.service';

@Component({
  selector: 'app-gifsanime',
  templateUrl: './gifsanime.component.html',
  styleUrls: ['./gifsanime.component.css']
})
export class GifsanimeComponent {
  // Variables
  gifsAnime: Gifs[] = [];

  // Constructor
  constructor(
    private giphyService: GiphyService
  ) { }

  // Funciones
  getGifs(): void {
    this.giphyService.getGifsAnime()
      .subscribe(res =>
        this.gifsAnime = res.data
        //console.log(res.data)
      ); //obtenemos los datos de la llamada con subscribe
  }

  ngOnInit(): void {
    this.getGifs();
  }
}
