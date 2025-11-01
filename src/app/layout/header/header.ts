import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Referencia al contenedor colapsable (div.collapse)
  @ViewChild('collapseContent') collapseContent!: ElementRef;

  // Esta función se llama al hacer clic en cualquier enlace
  collapseMenu() {
    // Verificamos si el elemento existe y si tiene la clase 'show' (está abierto)
    const element = this.collapseContent.nativeElement;

    if (element.classList.contains('show')) {
      // 1. Quitar la clase 'show' para cerrar el menú
      element.classList.remove('show');

      // 2. Opcional: Aseguramos que el botón cambie su estado ARIA
      const toggler = document.querySelector('[data-bs-target="#navbarText"]');
      if (toggler) {
        toggler.setAttribute('aria-expanded', 'false');
      }
    }
  }
}
