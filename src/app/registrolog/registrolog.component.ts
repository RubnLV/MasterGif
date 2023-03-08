import { Component } from '@angular/core';
import { MessageService } from '../servicios/message.service';

@Component({
  selector: 'app-registrolog',
  templateUrl: './registrolog.component.html',
  styleUrls: ['./registrolog.component.css']
})
export class RegistrologComponent {
  constructor(
    public registroLog: MessageService
  ) { }
}
