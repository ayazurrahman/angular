import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tdriven',
  templateUrl: './tdriven.component.html',
  styleUrls: ['./tdriven.component.css']
})
export class TdrivenComponent implements OnInit {

  constructor(public servicesService : ServicesService) {
    
  }
  posts: any;
  title = 'forms';
  model = {name:"",age:10};
  onSubmit(value: any, event:Event) {
    event.preventDefault();
    console.log(value);
    this.sendData(value);
  }
 
  ngOnInit(): void{
    this.servicesService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    });
  } 

  sendData(value) {
    const newModel = { id: 9, name: "ayazur", age: 26 };
    this.servicesService.sendIt(value).subscribe(data => {
      console.log(data);
    });
  }
}
