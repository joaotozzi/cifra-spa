import { CifraService } from './../services/cifra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolha-tom',
  templateUrl: './escolha-tom.component.html',
  styleUrls: ['./escolha-tom.component.sass']
})
export class EscolhaTomComponent implements OnInit {

  tom! : string;
  tomOriginal! : string;

  constructor(private service : CifraService) { }

  atualizaTom(){
    this.service.tomAtual = this.tom;
    console.log(this.service.tomAtual);
  }

  ngOnInit(): void {
    this.tom = this.service.tomAtual;
    this.tomOriginal = this.service.tomOriginal;
  }

}
