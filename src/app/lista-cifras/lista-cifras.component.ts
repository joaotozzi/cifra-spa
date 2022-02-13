import { Component, OnInit } from '@angular/core';
import { ResumoCifra } from '../models/resumo-cifra.model';
import { CifraService } from '../services/cifra.service';

@Component({
  selector: 'app-lista-cifras',
  templateUrl: './lista-cifras.component.html',
  styleUrls: ['./lista-cifras.component.sass']
})
export class ListaCifrasComponent implements OnInit {

  cifras: any;

  constructor(private service: CifraService) { }

  ngOnInit(): void {
    this.cifras = this.service.lista_cifras.subscribe((cifras : ResumoCifra[]) => {
      this.cifras = cifras;
    });
  }

}
