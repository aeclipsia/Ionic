import { Component } from '@angular/core';
import { ILibro } from '../interfaces/ILibro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  libros: ILibro[] = [];

  constructor() {
    this.libros = [
      {
        id: 1,
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        portada: 'soledad.jpg',
        sinopsis:
          'Una novela que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.',
        genero: 'Realismo mágico',
        editorial: 'Editorial Sudamericana',
        publicacion: 1967,
      },
      {
        id: 2,
        titulo: '1984',
        autor: 'George Orwell',
        portada: '1984.jpg',
        sinopsis:
          'Un futuro distópico donde el Gran Hermano controla cada aspecto de la vida.',
        genero: 'Ciencia ficción',
        editorial: 'Secker & Warburg',
        publicacion: 1949,
      },
      {
        id: 3,
        titulo: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        portada: 'pride.jpg',
        sinopsis:
          'La historia de Elizabeth Bennet y su complicada relación con el Sr. Darcy.',
        genero: 'Romance',
        editorial: 'T. Egerton, Whitehall',
        publicacion: 1813,
      },
      {
        id: 4,
        titulo: 'El Hobbit',
        autor: 'J.R.R. Tolkien',
        portada: 'hobbit.jpg',
        sinopsis:
          'Las aventuras de Bilbo Bolsón en su viaje para ayudar a los enanos a recuperar su hogar.',
        genero: 'Fantasía',
        editorial: 'George Allen & Unwin',
        publicacion: 1937,
      },
      {
        id: 5,
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        portada: 'donquijote.jpg',
        sinopsis:
          'Las aventuras de un hidalgo que enloquece y decide convertirse en caballero andante.',
        genero: 'Novela',
        editorial: 'Francisco de Robles',
        publicacion: 1605,
      },
    ];
  }

  detalles(id: number) {
    return;
  }
}
