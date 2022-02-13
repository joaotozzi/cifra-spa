import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cifra } from '../models/cifra.models';
import { Observable } from 'rxjs';
import { ResumoCifra } from '../models/resumo-cifra.model';

@Injectable({
  providedIn: 'root'
})
export class CifraService {
  private url = 'http://localhost:8080/cifras';

  constructor(private httpClient : HttpClient) { }

  cifra(id: any) : Observable<Cifra> {
    return this.httpClient.get<Cifra>(this.url + "/" + id);
  }

  get lista_cifras() : Observable<ResumoCifra[]> {
    return this.httpClient.get<ResumoCifra[]>(this.url);
  }

}
