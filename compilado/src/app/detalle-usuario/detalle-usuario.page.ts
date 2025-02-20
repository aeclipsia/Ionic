import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { IUsuario } from '../interfaces/IUsuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
  standalone: false,
})
export class DetalleUsuarioPage implements OnInit {
  usuario: IUsuario | null = null;

  constructor(private user: UsuarioService) {}

  ngOnInit() {
    this.usuario = this.user.getUser();
  }
}
