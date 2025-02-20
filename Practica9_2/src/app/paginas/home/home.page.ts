import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  Usuario: IUsuario[] = [];
  UsuariosFiltrados: IUsuario[] = [];
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private susuario: ServiciosService) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      const usuario: IUsuario = this.registroForm.value;
      // Guardar usuario en el servicio
      this.susuario.agregarUsuario(usuario);
      // Navegar a la página de detalles
      this.router.navigate(['/datos']);
    } else {
      // Manejar el caso en que el formulario no sea válido
      console.log('Formulario inválido');
    }
  }
}
