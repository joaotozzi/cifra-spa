import { EscolhaTomComponent } from './../escolha-tom/escolha-tom.component';
import { Cifra } from './../models/cifra.models';
import { CifraService } from './../services/cifra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.sass']
})
export class CifraComponent implements OnInit {

  cifra: any;
  tom!: string;


  constructor(public dialog: MatDialog, private service: CifraService, private activeRoute: ActivatedRoute, private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(EscolhaTomComponent);

    dialogRef.afterClosed().subscribe(result => {
      const id = this.activeRoute.snapshot.paramMap.get('id');
      this.service.mudarTom(id).subscribe((cifra : Cifra) => {
        this.cifra = cifra;
        this.tom = this.service.tomAtual;
      });
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.service.cifra(id).subscribe((cifra : Cifra) => {
      this.cifra = cifra;

      this.service.tomOriginal = cifra.tomOriginal;
      this.service.tomAtual = cifra.tomOriginal;
      this.tom = cifra.tomOriginal;

    });
  }

}
