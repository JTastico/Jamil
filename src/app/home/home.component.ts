import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Si generaste con estilos separados, si no, déjalo vacío
})
export class HomeComponent implements OnInit {
  nombre: string = "Jamil";
  rol: string = "Desarrollador Web";

  constructor() { }

  ngOnInit(): void {
    // Lógica para iniciar animaciones o cargar datos si es necesario.
    // La lógica de `main.js` para los proyectos ya debería ejecutarse globalmente.
  }

  // Método para enviar a WhatsApp desde el formulario de contacto integrado
  enviarWhatsapp(event: Event): void {
      event.preventDefault(); // Prevenir el envío normal del formulario

      const nombre = (document.querySelector('input[placeholder="Nombre"]') as HTMLInputElement).value;
      const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement).value;
      const asunto = (document.querySelector('input[placeholder="Asunto"]') as HTMLInputElement).value; // Asunto, no mensaje en tu JS original

      const mensajeWhatsApp = `Hola, tengo una consulta: %0A%0ANombre: ${nombre}%0AEmail: ${email}%0AAsunto: ${asunto}`;
      const numeroWhatsApp = '991010001'; // Cambia este número por el tuyo
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

      window.open(urlWhatsApp, '_blank');
  }
}