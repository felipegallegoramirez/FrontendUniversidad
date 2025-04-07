import { Component } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})
export class RecoverComponent {
  email: string = '';

  onSubmit() {
    console.log('Enviar a:', this.email);
    // Aquí puedes llamar a tu servicio para enviar el correo
  }
}
