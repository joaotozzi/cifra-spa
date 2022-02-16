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

  cifraNaoEncontrada = false;

  busca = '';

  constructor(private service: CifraService) { }

  ngOnInit(): void {
    this.carregar_tudo();
  }

  carregar_tudo(){
    this.cifras = this.service.listar_cifras().subscribe((cifras : ResumoCifra[]) => {
      this.cifraNaoEncontrada = false;
      this.cifras = cifras;
    },
    (erro) => { window.alert("Erro ao consultar cifras")});
  }

  pesquisar(){
    if(this.busca){
      this.cifraNaoEncontrada = false;
      this.cifras = this.service.pesquisar_cifras(this.busca).subscribe((cifras : ResumoCifra[]) => {
        this.cifras = cifras;
        if(!cifras.length){
          this.cifraNaoEncontrada = true;
        }
      },
      (erro) => { window.alert("Erro ao consultar cifras")});
    }else{
      this.carregar_tudo();
    }
  }

}
