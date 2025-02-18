import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  @Input() title: string | undefined;
  constructor(private nav: NavController) {}

  back() {
    this.nav.navigateBack('home');
  }
}
