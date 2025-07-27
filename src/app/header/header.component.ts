import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
        <nav class="nav">
            <a routerLink="/">Inicio</a>
            <a routerLink="/#proyectos">Proyectos</a>
            <a routerLink="/sobre-mi">Sobre Mí</a>
            <a routerLink="/contacto">Contacto</a>
        </nav>
    </header>
  `,
  styles: [] // Estilos se manejarán globalmente en styles.css o en un archivo CSS propio del componente si lo generas sin --inline-style
})
export class HeaderComponent implements OnInit {
  // Estas variables se pueden manejar en un servicio global o directamente en este componente si son fijas
  nombre: string = "Jamil";
  rol: string = "Desarrollador Web";
  modoOscuro: boolean = false; // El modo oscuro será manejado por tu JS, Angular solo reflejará la clase

  constructor() { }

  ngOnInit(): void {
    // La lógica de modo oscuro ya está en main.js, que se encargará de la clase en <html>
    // Si quisieras que Angular la controlara, tendrías que mover esa lógica aquí.
  }
}