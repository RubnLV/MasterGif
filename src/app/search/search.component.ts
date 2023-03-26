import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gifs } from '../interfaces/gifs.interface';
import { GiphyService } from '../servicios/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  // Variables
  gifsResultados: Gifs[] = [];

  // Constructor
  constructor(
    private giphyService: GiphyService,
    private router: Router
  ) { }  
  
  buscar(texto:string){
    //console.log(texto);
    if (texto != ''){
      this.router.navigate([`/resultados/${texto}`]);
      this.giphyService.getGifsResultados(texto);      
    } 
    else{
      this.router.navigate([`/gifs`]);
    }     
  }

  
}
