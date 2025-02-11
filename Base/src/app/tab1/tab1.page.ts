import { Component } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/INoticias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    // this.noticiasService.getNoticias().subscribe((response) => {
    //   this.noticias.push(...response.articles);
    // });

    this.noticiasService.getNoticias().subscribe((data) => {
      data.articles.forEach((a) => this.noticias.push(a));
    });
  }
}
