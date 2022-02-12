import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cifra } from '../models/cifra.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CifraService {
  private url = 'http://localhost:8080/cifras/1';

  constructor(private httpClient : HttpClient) { }

  get cifra() : Observable<Cifra> {
    return this.httpClient.get<Cifra>(this.url);
  }

}
