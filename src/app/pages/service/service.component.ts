import { Component, AfterViewInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent  implements AfterViewInit  {

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
    cliente: '',
    danio: '',
    cedula: '',
    telefono: '',
    direccion: '',

    fecha: '',
    observaciones: ''
  };

  registrarServicio() {
    console.log('Servicio registrado:', this.servicio);
    alert('Servicio registrado correctamente 🎉');

    // Reset
    this.servicio = {
      cliente: '',
      cedula: '',
      telefono: '',
      direccion: '',
      danio: '',
      fecha: '',
      observaciones: ''
    };
  }

  
}
