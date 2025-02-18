import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../services/receta.service';
import { Category } from '../interfaces/IReceta';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {
  id: string | null = null;
  activeCategory: Category | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.recetaService.getCategory().subscribe((data) => {
          data.categories.forEach((category) => {
            if (category.idCategory == this.id) {
              this.activeCategory = category;
            }
          });
        });
      }
    });
  }

  recetas(category: string) {
    this.nav.navigateForward(['/meals', category]);
  }
}
