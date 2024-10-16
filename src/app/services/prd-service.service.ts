import { iResponse } from './../modules/i-response'; // Assicurati che l'interfaccia sia correttamente importata
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrdServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<iResponse> {
    return this.http.get<iResponse>(this.apiUrl);
  }
}
