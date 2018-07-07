import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {
  tapped:number=0;
  pressed:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
  }

  OnDidReset(type:string)
  {
    switch (type){
      case 'tap':
      this.tapped=0;
      break;
      case 'press':
      this.pressed=0;
      default:
        this.pressed=0;
        this.tapped=0;
    }
  }

  OnTap()
  {
    this.tapped++;
  }

  OnPress()
  {
    this.pressed++;
  }
  DidWin()
  {
    return this.tapped==2 && this.pressed==4;
  }
}
