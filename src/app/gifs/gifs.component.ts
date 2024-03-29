import { Component } from '@angular/core';
import { Gifs, GifsRandoms } from '../interfaces/gifs.interface';
import { GiphyService } from '../servicios/giphy.service';
import { RegistrologComponent } from '../registrolog/registrolog.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent {
  // Variables
  gifsRandom: Gifs[] = [];

  // Constructor
  constructor(
    private giphyService: GiphyService
  ){}

  // Funciones
  getGifs(): void {
    this.giphyService.getGifsRandoms()
        .subscribe(res =>
          this.gifsRandom = res.data
          //console.log(res.data)
        ); //obtenemos los datos de la llamada con subscribe
  }

  ngOnInit(): void {
    this.getGifs();
  }

}
