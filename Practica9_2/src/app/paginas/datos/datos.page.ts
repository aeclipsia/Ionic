import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: false
})
export class DatosPage implements OnInit {
  usuario: IUsuario | null = null; // Definir la variable para almacenar el parámetro

  constructor(private susuario: ServiciosService) { }

  ngOnInit() {
    // Obtener el parámetro 'nombre' de la URL
    this.usuario = this.susuario.obtenerUsuario();
  }
}
