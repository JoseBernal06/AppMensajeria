import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService, Message } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: Message[] = [];
  mensaje = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe((res) => {
      this.messages = res;
    });
  }

  sendMessage() {
    if (this.mensaje.trim() !== '') {
      this.chatService
        .sendMessage(this.mensaje)
        .then(() => console.log('Mensaje enviado correctamente'))
        .catch((error) => console.error('Error al enviar el mensaje:', error));
    }
  }
}