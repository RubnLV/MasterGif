import { Component } from '@angular/core';
import { Gifs } from '../interfaces/gifsSearch.interface';
import { GiphyService } from '../servicios/giphy.service';

@Component({
  selector: 'app-gifsseries',
  templateUrl: './gifsseries.component.html',
  styleUrls: ['./gifsseries.component.css']
})
export class GifsseriesComponent {
  // Variables
  gifsSeries: Gifs[] = [];

  // Constructor
  constructor(
    private giphyService: GiphyService
  ) { }

  // Funciones
  getGifs(): void {
    this.giphyService.getGifsSeries()
      .subscribe(res =>
        this.gifsSeries = res.data
        //console.log(res.data)
      ); 
  }

  ngOnInit(): void {
    this.getGifs();
  }
}
