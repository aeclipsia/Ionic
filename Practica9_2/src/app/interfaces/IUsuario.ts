export interface IUsuario {
    nombre: string;
    email: string;
    fechaNacimiento: string;
    telefono: string;
    sexo: 'Masculino' | 'Femenino' | 'Otro';
  }