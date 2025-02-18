import { Component } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { Category, ICategory } from '../interfaces/IReceta';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}
}
