import { Cifra } from './../models/cifra.models';
import { CifraService } from './../services/cifra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.sass']
})
export class CifraComponent implements OnInit {

  cifra: any;


  constructor(private service: CifraService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.cifra(id).subscribe((cifra : Cifra) => {
      this.cifra = cifra;
    });
  }

}
