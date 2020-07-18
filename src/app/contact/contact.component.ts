import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // user: Object = { };
  user = {
    name:"ayaz",
    age:21
  }
  constructor() { }

  ngOnInit() {
  }
  submit(data) {
    console.log(data);
  }
}
