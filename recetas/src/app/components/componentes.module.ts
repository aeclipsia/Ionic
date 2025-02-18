import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [HeaderComponent, CategoriasComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, CategoriasComponent],
})
export class ComponentesModule {}
