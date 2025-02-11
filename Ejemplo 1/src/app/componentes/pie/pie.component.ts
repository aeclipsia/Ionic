import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  standalone: false,
})
export class PieComponent implements OnInit {
  userName: string = 'Jared Bueno';

  constructor() {}

  ngOnInit() {}
}
