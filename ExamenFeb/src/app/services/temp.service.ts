import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITemperatura } from '../interfaces/ITemperatura';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ITemperatura> {
    return this.http.get<ITemperatura>('assets/temperaturas.json');
  }
}
