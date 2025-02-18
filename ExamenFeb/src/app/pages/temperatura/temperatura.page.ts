import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Provincia } from 'src/app/interfaces/ITemperatura';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
  standalone: false,
})
export class TemperaturaPage implements OnInit {
  name: string | null = null;
  provinciasList: Provincia[] = [];
  pageTitle = 'Temperaturas';

  constructor(
    private activatedRoute: ActivatedRoute,
    private tempService: TempService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.name = params.get('name');
      if (this.name) {
        this.tempService.getData().subscribe((data) => {
          data.autonomias.forEach((autonomia) => {
            if (autonomia.source.name == this.name) {
              autonomia.provincias.forEach((provincia) => {
                this.provinciasList.push(provincia);
              });
            }
          });
        });
      }
    });
  }
}
