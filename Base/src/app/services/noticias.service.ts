import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INoticias } from '../interfaces/INoticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<INoticias> {
    return this.http.get<INoticias>(
      'https://newsapi.org/v2/top-headlines?apiKey=63c27050764a4804a1957162f436fce2&country=us'
    );
  }
}
