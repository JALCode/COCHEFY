import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';
import { AnunciosPage } from '../anuncios/anuncios';
//import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'page-nuevo-anuncio',
  templateUrl: 'nuevo-anuncio.html'
})

export class NuevoAnuncioPage {

    username:string;
	
	today = new Date();

    // anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidEnter()
   {
       // this.anuncios$ = [{
       //     id: "1",
       //     nombreUsuario: "string",
       //     nPersonas: "string",
       //     fSalida: "string",
       //     fRecogida: "string",
       //     localizacion: "string",
       //     nKm: "string",
       //     asegurado: "string",
       //     cancelacion: "string",
       //     alquilado: "string",
       // }]
   }

    ionViewDidLoad() {
        this.menuCtrl.enable(false, 'arrendadorMenu');
        this.menuCtrl.enable(true, 'arrendatarioMenu');
    }
	
	cancelar () {
		this.navCtrl.push(AnunciosPage);
	}
	
		/*showDatepicker1(){
		this.datePicker.show({
		  date: new Date(),
		  mode: 'date',
		  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
		}).then(
		  date => console.log('Got date: ', date),
		  err => console.log('Error occurred while getting date: ', err)
		);
	}
	
	showDatepicker2(){
		this.datePicker.show({
		  date: new Date(),
		  mode: 'date',
		  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
		}).then(
		  date => console.log('Got date: ', date),
		  err => console.log('Error occurred while getting date: ', err)
		);
	}*/

}
