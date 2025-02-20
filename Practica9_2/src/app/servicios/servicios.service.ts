import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private usuario: IUsuario | null = null; // Almacenar usuario

  // Método para agregar usuario
  agregarUsuario(usuario: IUsuario): void {
    this.usuario = usuario;
    console.log('Usuario almacenado en el servicio:', this.usuario);
  }

  // Método para obtener el usuario almacenado
  obtenerUsuario(): IUsuario | null {
    return this.usuario;
  }
}
