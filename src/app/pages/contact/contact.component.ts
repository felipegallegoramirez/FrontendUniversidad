import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacto = {
    nombres: '',
    apellidos: '',
    correo: '',
    celular: '',
    comentarios: '',
    mensajeTexto: false
  };

  enviarContacto() {
    console.log('Contacto enviado:', this.contacto);
  }
}
