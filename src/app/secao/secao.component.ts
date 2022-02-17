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
    conteudo = conteudo.replace(/\] {1,}\[/g, "&nbsp;&nbsp");
    conteudo = '<span style="position: relative;display: inline-block; padding-bottom: 1em">' + conteudo.replace(/\s/g, '</span> <span style="position: relative;display: inline-block; padding-bottom: 1em">') + "</span>";
    conteudo = conteudo.replace(/\[/g, '<sup style="position: absolute;font-size: 1em;top: -1em;font-weight: bold">');
    conteudo = conteudo.replace(/\]/g, '</sup>');

    return this.sanitizer.bypassSecurityTrustHtml(conteudo);
  }

}
