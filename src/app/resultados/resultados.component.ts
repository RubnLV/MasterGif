import { Component } from '@angular/core';
import { GiphyService } from '../servicios/giphy.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  // // Variables
  // gifsSeries: Gifs[] = [];

  // Constructor
  constructor(
    private giphyService: GiphyService
  ) { }

  // Funciones
  get resultados(){

    return this.giphyService.resultados;
  }

  // getGifs(): void {
  //   this.giphyService.getGifsSeries()
  //     .subscribe(res =>
  //       this.gifsSeries = res.data
  //       //console.log(res.data)
  //     );
  // }

  // ngOnInit(): void {
  //   this.getGifs();
  // }
}
