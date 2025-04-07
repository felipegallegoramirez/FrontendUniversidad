import { Component, AfterViewInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements AfterViewInit  {
  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });
  }

  openModal() {
    const elem = document.getElementById('modal1');
    const instance = M.Modal.getInstance(elem);
    instance.open();
  }

  servicio = {
    nombre: '',
    cedula: '',
    correo: '',
    contrasena: '',
  };

  registrarServicio() {
    console.log('Servicio registrado:', this.servicio);
    alert('Servicio registrado correctamente 🎉');

    // Reset
    this.servicio = {
      nombre: '',
      cedula: '',
      correo: '',
      contrasena: '',
    };
  }
}
