import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get("http://localhost:3000/posts");
  }
  // private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  sendIt(newModel) {
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization':'abcde'
    });
    console.log(httpHeaders);
    return this.httpClient.post('http://localhost:3000/posts', newModel, { headers:httpHeaders });
  }
}
