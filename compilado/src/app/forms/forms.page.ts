import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from '../interfaces/IUsuario';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: false,
})
export class FormsPage implements OnInit {
  usuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    fecha: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    select: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(
    private userService: UsuarioService,
    private nav: NavController
  ) {}

  ngOnInit() {}

  mostrar() {
    if (this.usuario.valid) {
      const data: IUsuario = {
        nombre: this.usuario.get('nombre')?.value ?? '',
        telefono: this.usuario.get('telefono')?.value ?? 0,
        email: this.usuario.get('email')?.value ?? '',
        password: this.usuario.get('password')?.value ?? '',
        fecha: this.usuario.get('fecha')?.value ?? '',
        mensaje: this.usuario.get('mensaje')?.value ?? '',
        select: this.usuario.get('select')?.value ?? '',
        checkbox: this.usuario.get('checkbox')?.value ?? false,
      };
      this.userService.addUser(data);
      this.nav.navigateForward(['/detalle-usuario']);
    }
  }
}
