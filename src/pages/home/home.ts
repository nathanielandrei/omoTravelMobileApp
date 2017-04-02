import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
    
    ionViewDidLoad(){
        this.showAlert();
    }
    
    showAlert() {
        let alert = this.alertCtrl.create({
          title: "There are places you must see!",
          subTitle: 'Click List Pages to explore.',
          buttons: ['OK'],
          cssClass: 'alert-style'
        });
        
        alert.present();
    }
}
