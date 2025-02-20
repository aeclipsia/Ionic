import { Component, OnInit } from '@angular/core';
import { IPerros } from '../interfaces/IPerros';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
  standalone: false,
})
export class OrdenarPage implements OnInit {
  perrosFiltrar: IPerros[] = [];
  searchQuery: string = '';
  perros: IPerros[] = [
    { nombre: 'Rex', raza: 'Pastor Alemán', edad: 5 },
    { nombre: 'Fido', raza: 'Labrador', edad: 3 },
    { nombre: 'Max', raza: 'Bulldog Francés', edad: 2 },
    { nombre: 'Bella', raza: 'Golden Retriever', edad: 4 },
    { nombre: 'Luna', raza: 'Beagle', edad: 1 },
  ];

  constructor() {}

  ngOnInit() {
    this.perrosFiltrar = [...this.perros];
  }

  sort(criteria: string) {
    switch (criteria) {
      case 'nombre':
        this.perros.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'raza':
        this.perros.sort((a, b) => a.raza.localeCompare(b.raza));
        break;
      case 'edad':
        this.perros.sort((a, b) => a.edad - b.edad);
        break;
    }
    this.filtrar();
  }

  filtrar() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      // Si hay una búsqueda, filtra los perros
      this.perrosFiltrar = this.perros.filter(
        (p) =>
          p.nombre.toLowerCase().includes(query) ||
          p.raza.toLowerCase().includes(query)
      );
    } else {
      this.perrosFiltrar = [...this.perros];
    }
  }

  onSearchChange() {
    this.filtrar();
  }
}
