import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { variables } from 'src/variables_entorno/variables';
import { GifsRandoms } from '../interfaces/gifs.interface';

const UrlGifsRandom = variables.url_randomGifs;
const Clave = variables.api_key;
const Limit = 42;
const Rating = 'g';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  // Variables
  static getGif: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // constructor
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // Funciones

  /** Registrar un mensaje del servicio giphyservice con registroLog */
  private log(message: string) {
    this.messageService.add(`giphy.Service: ${message}`);
  }

  /**
  * @param operation - nombre de la operación que falló
  * @param result - valor opcional para devolver como el resultado observable
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // enviar el error a la infraestructura de registro remoto
      console.error(error); // log to console instead

      // mejora el trabajo de transformación de error para el consumo del usuario
      this.log(`${operation} failed: ${error.message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado vacío.
      return of(result as T);
    };
  }

  //llamada asincrona
  getGifs(): Observable<GifsRandoms> {     
    const gifs = this.http.get<GifsRandoms>(`${UrlGifsRandom}?api_key=${Clave}&limit=${Limit}&rating=${Rating}`);
    
    this.log('log=> Cargando gifs');
    return gifs.pipe(
      tap(_ => this.log('gifs cargados')),
      catchError(this.handleError<GifsRandoms>('getGifs', undefined))
    );
  }


}
