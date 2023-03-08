import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(texto: string) {
    this.messages.push(texto);
  }

  clear() {
    this.messages = [];
  }
}
