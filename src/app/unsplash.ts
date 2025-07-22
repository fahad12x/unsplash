import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root' 
})
export class UnsplashService {

  private accessKey = environment.unsplashAccessKey; 

  constructor(private http: HttpClient) {}

  getRandomImage(category: string): Observable<any> {
    const url = `https://api.unsplash.com/photos/random?query=${category}&client_id=${this.accessKey}`;
    return this.http.get(url);
  }
}
