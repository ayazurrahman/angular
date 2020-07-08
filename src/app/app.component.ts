import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  model = new ServicesService();
  onSubmit(value:any) {
    console.log(value);
  }
  buttonName = "Click me"
  clickeme(event:any) {
    if (this.buttonName == "Click me") {
      this.buttonName = "Clicked"
    } else if(this.buttonName == "Clicked") {
      this.buttonName = "Click me"
    }
    console.log(event)
  }
}
