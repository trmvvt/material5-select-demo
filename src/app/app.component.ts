import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'option1';
  show: boolean = false;
  comments = '';

  clickHandler = function (event) {
    event.preventDefault();
    if(this.show == false) {
      this.comments='';
      alert("Thanks for submitting! Data: " + JSON.stringify(this.selected) + JSON.stringify(this.comments));

    }
    if(this. show == true && !(this.comments == '')){
      alert("Thanks for submitting! Data: " + JSON.stringify(this.selected) + JSON.stringify(this.comments));
    }
  }

}
