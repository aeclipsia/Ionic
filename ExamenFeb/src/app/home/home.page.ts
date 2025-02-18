import { Component } from '@angular/core';
import { TempService } from '../services/temp.service';
import { Source } from '../interfaces/ITemperatura';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  sourceList: Source[] = [];
  pageTitle = 'Examen-Febrero';

  constructor(private service: TempService, private nav: NavController) {}

  ngOnInit() {
    this.service.getData().subscribe((data) => {
      data.autonomias.forEach((element) => {
        this.sourceList.push(element.source);
      });
    });
    this.sourceList.forEach((e) => {
      e.visible = false;
    });
  }

  show(source: Source) {
    source.visible = !source.visible;
  }

  toTemperaturas(autonomia: string) {
    this.nav.navigateForward(['/temperatura', autonomia]);
  }
}
