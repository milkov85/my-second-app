import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideDetails = true;
  detailsClicked = [];

  details() {
    let i = this.detailsClicked.length + 1;
    this.detailsClicked.push(i);
    return this.hideDetails = !this.hideDetails;
  }

  changeColor() {
    return this.detailsClicked.length < 5 ?"black":"blue"
  }
}
