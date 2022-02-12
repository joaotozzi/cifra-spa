import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-secao',
  templateUrl: './secao.component.html',
  styleUrls: ['./secao.component.sass'],
})
export class SecaoComponent implements OnInit {

  @Input() secao: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  converterParaHTML(conteudo: string) {
    return this.sanitizer.bypassSecurityTrustHtml(
      conteudo
        .replace(/ {2,}/g, '&nbsp;&nbsp;&nbsp;')
        .replace(/\[/g, '<sup style="position: absolute;font-size: 16px;top: -1.3em;font-weight: bold">')
        .replace(/\]/g, '</sup>')
    );
  }

}
