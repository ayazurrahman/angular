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
  model = {
    name: "Ayaz",
    age:21
  }
  onSubmit(value:any) {
    console.log(value);
  }
 
  ngOnInit(): void{
    this.servicesService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    });
  } 

  sendData() {
    const newModel = { "id": 3, "name": "ayazur", "age": 26 }
    this.servicesService.sendIt(newModel).subscribe(data => {
      console.log(data);
    });
  }
}
