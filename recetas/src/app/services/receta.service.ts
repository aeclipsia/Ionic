import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, IReceta } from '../interfaces/IReceta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<ICategory> {
    return this.http.get<ICategory>('assets/data/categorias.json');
  }

  getRecetas(): Observable<IReceta> {
    return this.http.get<IReceta>('assets/data/recetas.json');
  }
}
