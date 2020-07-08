import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    public name: string = "",
    public age: number = 1
  ) { }
}
