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
  sendIt(newModel) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    console.log(newModel);
    return this.httpClient.post('http://localhost:3000/posts', newModel, { headers:httpHeaders });
  }
}
