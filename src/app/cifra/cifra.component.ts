import { CifraService } from './../services/cifra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.sass']
})
export class CifraComponent implements OnInit {

  cifra: any;

  constructor(private service: CifraService) { }

  ngOnInit(): void {
    this.cifra = this.service.cifraFormatadaParaHTML;
  }

}
