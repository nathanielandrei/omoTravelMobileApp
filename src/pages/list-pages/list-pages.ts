import { Component } from '@angular/core';
import {PostDetail} from '../post-detail/post-detail';
import { NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-list-pages',
    templateUrl: 'list-pages.html'
})
export class ListPages {
	url: string = 'http://devel2.ordermate.online/wp-json/wp/v2/posts';
	items: any;

    constructor(public navCtrl: NavController, private http: Http, private nav: NavController, public loadingCtrl: LoadingController) {
	}

	ionViewDidEnter() {
        this.presentLoading();
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
            this.items = data;
            for(var ctr=0; ctr < this.items.length; ctr++){
                this.items[ctr].imageSourceTemp = "assets/images/" + this.items[ctr].id + ".jpg";
            }
	    });
	}
    
    presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 100
        });
            
        loader.present();
    }
    
    itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
}