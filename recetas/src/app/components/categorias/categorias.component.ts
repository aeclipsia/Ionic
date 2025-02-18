import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/IReceta';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  standalone: false,
})
export class CategoriasComponent implements OnInit {
  categoryList: Category[] = [];

  constructor(private service: RecetaService, private nav: NavController) {}

  ngOnInit() {
    this.service.getCategory().subscribe((data) => {
      data.categories.forEach((categoria) => {
        this.categoryList.push(categoria);
      });
    });
  }

  details(category: Category) {
    this.nav.navigateForward(['/details', category.idCategory]);
  }
}
