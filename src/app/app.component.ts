import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDisplaypp = false; 
  toDisplayje = false; 
  toDisplaypo = false; 

  togglePeepee() {
    this.toDisplaypp = !this.toDisplaypp; 
    if (this.toDisplaypp == true) {
      let meow = new Audio(); 
      meow.src = "assets/sounds/meow.mp3"; 
      meow.load(); 
      meow.play(); 
    }
  }
  toggleJesse() {
    this.toDisplayje = !this.toDisplayje; 
    if (this.toDisplayje == true) {
      let woof = new Audio(); 
      woof.src = "assets/sounds/bark.mp3"; 
      woof.load(); 
      woof.play(); 
  }
}
  togglePoop() {
    this.toDisplaypo = !this.toDisplaypo; 
    if (this.toDisplaypo == true) {
      let fart = new Audio(); 
      fart.src = "assets/sounds/fart.mp3"; 
      fart.load(); 
      fart.play(); 
  }
}
}
