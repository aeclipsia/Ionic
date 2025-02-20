import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: IUsuario | null = null;

  addUser(usuario: IUsuario) {
    this.usuario = usuario;
  }

  getUser(): IUsuario | null {
    return this.usuario;
  }
}
