import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: false,
})
export class CabeceraComponent implements OnInit {
  @Input() pageName: string = '';

  constructor() {}

  ngOnInit() {}
}
