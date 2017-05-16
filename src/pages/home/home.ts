import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1 = '';
  name2 = '';
  score;
  constructor(public navCtrl: NavController) {

  }
   calcScore(){
   if(this.name1.toLowerCase()=='jeriah'&&this.name2.toLowerCase()
   =='halle berry'||this.name1.toLowerCase()=='halle berry'&&this.name2.toLowerCase()
   =='jeriah'){
     this.score= 100;
   }
   else{
     const letters = (this.name1 + this.name2).toLowerCase();
   let sum = 0;
   for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    this.score= Math.floor(sum % 101);
  }
   
   
 }

}
