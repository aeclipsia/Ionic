import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../interfaces/IReceta';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
  standalone: false,
})
export class MealsPage implements OnInit {
  activeCategory: string | null = null;
  meals: Meal[] = [];

  constructor(
    private recetaService: RecetaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.activeCategory = params.get('category');
    });

    this.recetaService.getRecetas().subscribe((data) => {
      data.meals.forEach((meal) => {
        if (meal.strCategory == this.activeCategory) {
          this.meals.push(meal);
        }
      });
    });
  }
}
