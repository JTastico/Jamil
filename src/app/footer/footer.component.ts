import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <div class="social-links">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
        </div>
        <p class="copyright">© {{ currentYear }} {{ nombre }}</p>
    </footer>

    `,
  styles: []
})
export class FooterComponent implements OnInit {
  nombre: string = "Jamil"; // Puedes obtenerlo de un servicio global
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }
}