import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private r: Router, private n:NavController) {}

  navegarRouter(){
    this.r.navigate(['/pagina2']);
  }

  navegarNavController(){
    this.n.navigateForward('/pagina2');
  }

}
